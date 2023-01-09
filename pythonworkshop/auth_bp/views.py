from flask import render_template, redirect,session, request, url_for, flash, \
        current_app, session, jsonify

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
from os import access, environ as env
from playhouse.shortcuts import model_to_dict
#from .. import socketio

templateLoader = jinja2.PackageLoader('pythonworkshop','templates')
templateEnv = jinja2.Environment(loader=templateLoader)

login_templ = templateEnv.get_template('/auth/login.jinja2')
register_templ = templateEnv.get_template('/auth/register.jinja2')

"""
@auth_bp.route('/')
def index():
  login_form = LoginForm()
  pass_reset_form = PasswordResetRequestForm()
  reg_form = RegistrationForm()
  wrong_cred=False
  email_sent=False
  return render_template('index.html')


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

"""     


@auth_bp.route('/api/auth/login', methods=['POST','GET'])
def login_form():
    print('login_form call')
    msg = ''
    if request.method == 'POST':
        users_db.connect(reuse_if_open=True)
        user = User.select().where(User.user_email==request.json['email']).first()
        if user is not None:
            print(f'auth_bp.login_form() user email to login:{user.user_email}')
        if user is not None and user.verify_password(request.json['password']) and user.user_confirmed:
            user.login_user()
            user.generate_access_token()
            user_dict = model_to_dict(user)
            return jsonify({'user':user_dict,'msg':'User confirmed!'})
        else:
            msg='Wrong username or password!'
        users_db.close()
    return jsonify({'user':'nonexistent','msg':msg})
           

@auth_bp.route('/api/auth/register', methods=['POST'])
def register_form(): 
  if request.method == 'POST':
      print(f'/api/auth/register called and request email: {str(request.json["email"])}') 
      users_db.connect(reuse_if_open=True)
      msg=''
      try :
        user = User.create(user_email=request.json['email'],
                           user_pass=request.json['password'])
      except p.IntegrityError :
        return ({'is_duplicate': True, 'duplicate_email': request.json['email']})
      token = user.generate_confirmation_token()
      send_email(user.user_email, 'Confirm Your Account', 'auth/email/confirm', user=user, token=token)
      #send_email([user.user_email], 'Confirm Your Account', 'auth/email/confirm', user=user, token=token)
      msg = 'En bekreftelses e-post har blitt sendt til deg på e-post.'
      users_db.close()
  return jsonify({'is_duplicate': False,'sent_token': token, 'msg':msg})
  


@auth_bp.route('/api/auth/confirm/<token>',methods=['POST','GET'])
def confirm(token):
    users_db.connect(reuse_if_open=True)
    tokens_user_id = User.get_tokens_user_id(token)
    user = User.select().where(User.id==tokens_user_id).first()
    userconfirmed=False
    if user is not None and (user.user_confirmed or user.confirm(token)):
        msg_confirmed='Du har bekreftet kontoen din. Takk!'
        user_dict = model_to_dict(user)
        userconfirmed=True
    elif user is not None and not user.confirm(token):
        userconfirmed=False
        User.delete().where(User.id == user.id).execute()
    msg_wrong_link = 'Bekreftelseslenken er ugyldig eller har utløpt.'
    print(f'auth_bp.confirm userconfirmed:{userconfirmed}')    
    users_db.close()
    return redirect(f'/confirm/{userconfirmed}')


def confirm_event(userstate):
    print('socketio emitting msg:')
    socketio.emit('user_confirmed', {'data': f'user confirmed={userstate}'})

    """
@auth_bp.route('/logout')
@login_required
def logout():
  logout_user()
  flash('Du har blitt logget ut.')
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

"""    
