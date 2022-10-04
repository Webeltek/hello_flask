from flask import render_template, redirect,session, request, url_for, flash, \
        current_app, session
from flask_login import login_user, logout_user, login_required, \
    current_user
from . import auth_bp
from .. import main_bp
from .forms import LoginForm, RegistrationForm, ChangePasswordForm,\
    PasswordResetRequestForm, PasswordResetForm, ChangeEmailForm
import jinja2
from ..models import *
from ..email import send_smtp, gmail_send_message, send_email
from .. import executor
import peewee as p
from wtforms import ValidationError
import json
from urllib.parse import quote_plus, urlencode
from authlib.integrations.flask_client import OAuth
from os import environ as env

templateLoader = jinja2.PackageLoader('pythonworkshop','templates')
templateEnv = jinja2.Environment(loader=templateLoader)

login_templ = templateEnv.get_template('/auth/login.jinja2')
register_templ = templateEnv.get_template('/auth/register.jinja2')

@auth_bp.route('/')
def index():
  login_form = LoginForm()
  pass_reset_form = PasswordResetRequestForm()
  reg_form = RegistrationForm()
  wrong_cred=False
  email_sent=False
  return redirect(url_for('auth_bp.login_form'))

@auth_bp.before_app_request
def before_request():
  users_db.connect(reuse_if_open=True)
  if current_user is not None:
    if current_user.is_authenticated:
        current_user.ping()
        if not current_user.user_confirmed \
                and request.blueprint != 'auth_bp' \
                and request.endpoint != 'static':
            print('auth_bp.views.before_request() condition for unconfirmed == True')
            return redirect(url_for('auth_bp.unconfirmed'))
  users_db.close()
  pass    


@auth_bp.route('/unconfirmed')
def unconfirmed():
    if current_user.is_anonymous or current_user.user_confirmed:
        return redirect(url_for('main_bp.contact'))
    return render_template('auth/unconfirmed.jinja2')  


@auth_bp.route('/login', methods=['POST','GET'])
def login_form():
    print('login_form call')
    next = request.values.get('next')
    print('login_form method= POST and GET, next is: '+str(next))
    login_form = LoginForm()
    if login_form.validate_on_submit():
        users_db.connect(reuse_if_open=True)
        user = User.select().where(User.user_email==login_form.email.data).first()
        if user is not None and user.verify_password(login_form.password.data):
            login_user(user, login_form.remember_me.data)
            next = request.values.get('next')
            if next is None or not (next.startswith('/') or not next.startswith('%2F')):
                next = url_for('main_bp.contact_form')
            return redirect(next)
        else:
            print('login_form wrong cred')
            flash('Ugyldig epost eller passord.')
        users_db.close()
    return render_template('/auth/login.jinja2', login=login_form)       

@auth_bp.route('/register', methods=[ 'POST','GET'])
def register_form():
  reg_form = RegistrationForm()
  email_sent=False
  if reg_form.validate_on_submit() :
      users_db.connect(reuse_if_open=True)
      try :
        user = User.create(user_email=reg_form.email.data,
                           user_pass=reg_form.password.data)
      except p.IntegrityError :
        raise ValidationError('duplikat epost')
      token = user.generate_confirmation_token()
      print(f'User email token to send: {token}' )
      urlfor = url_for('auth_bp.confirm', token=token, _external=True) 
      print(f'Url extracted from url_for(): {urlfor}') 
      send_email(user.user_email, 'Confirm Your Account', 'auth/email/confirm', user=user, token=token)
      #send_email([user.user_email], 'Confirm Your Account', 'auth/email/confirm', user=user, token=token)
      flash('En bekreftelses e-post har blitt sendt til deg på e-post.')
      users_db.close()
  return render_template('/auth/register.jinja2', reg=reg_form)


@auth_bp.route('/logout')
@login_required
def logout():
  logout_user()
  flash('Du har blitt logget ut.')
  return redirect(url_for('auth_bp.login_form'))


@auth_bp.route('/confirm/<token>')
@login_required
def confirm(token):
    print(f'views.confirm() token before translate:{token}')
    token = token.replace('=<br />','')
    print(f"next in auth_bp.VIEWS.confirm is: {str(request.values.get('next'))}")
    print(f"token in auth_bp.VIEWS.confirm is: {str(token)}")
    users_db.connect(reuse_if_open=True)
    if current_user.user_confirmed or current_user.confirm(token):
        print('current_user.user_confirmed = True')
        flash('Du har bekreftet kontoen din. Takk!')
        return redirect(url_for('main_bp.contact_form'))
    print('current_user.user_confirmed = False')
    flash('Bekreftelseslenken er ugyldig eller har utløpt.') 
    users_db.close()
    return redirect(url_for('auth_bp.login_form'))

@auth_bp.route('/confirm')
@login_required
def resend_confirmation():
    token = current_user.generate_confirmation_token()
    send_smtp(current_user.user_email, 'Bekreft kontoen din',
               'auth/email/confirm', user=current_user, token=token)
    flash('En ny bekreftelses-e-post har blitt sendt til deg på e-post.')
    return redirect(url_for('auth_bp.login_form'))

@auth_bp.route('/reset', methods=['GET', 'POST'])
@login_required
def password_reset_request():
    form = PasswordResetRequestForm()
    if form.validate_on_submit():
        user = User.get(User.user_email==form.email.data.lower())
        if user:
            token = user.generate_reset_token()
            send_smtp(user.user_email, 'Reset Your Password',
                       'auth/email/reset_password',
                       user=user, token=token)
        return redirect(url_for('auth_bp.login_form'))
    return render_template('auth/pass_reset_request.jinja2', pass_res_req_form=form)


@auth_bp.route('/reset/<token>', methods=['GET', 'POST'])
@login_required
def password_reset(token):
    form = PasswordResetForm()
    if form.validate_on_submit():
        if User.reset_password(token, form.password.data):
            flash('Passordet ditt er oppdatert')
            return redirect(url_for('auth_bp.login_form'))
        else:
            return redirect(url_for('auth_bp.password_reset_request'))
    return render_template('auth/pass_reset.jinja2', pass_reset_form=form) 

@auth_bp.route('/change_email', methods=['GET', 'POST'])
@login_required
def change_email_request():
    form = ChangeEmailForm()
    if form.validate_on_submit():
        if current_user.verify_password(form.password.data):
            new_email = form.email.data.lower()
            token = current_user.generate_email_change_token(new_email)
            send_smtp(new_email, 'Confirm your email address',
                       'auth/email/change_email',
                       user=current_user, token=token)
            flash('En e-post med instruksjoner for å bekrefte din nye e-post adressen er sendt til deg.')
            return redirect(url_for('auth_bp.login'))
        else:
            print('Invalid email or password.')
            flash('Ugyldig epost')
    return render_template("auth/email_reset_request.jinja2", form=form)


@auth_bp.route('/change_email/<token>')
@login_required
def change_email(token):
    if current_user.change_email(token):
        flash('E-postadressen din er oppdatert')
    else:
        print('Ugyldig forespørsel.')
    return redirect(url_for('main_bp.contact_form'))
