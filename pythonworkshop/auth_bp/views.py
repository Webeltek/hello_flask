from flask import render_template, redirect, request, url_for, flash, \
        current_app, session
from flask_login import login_user, logout_user, login_required, \
    current_user
from . import auth_bp
from .. import main_bp
from .forms import LoginForm, RegistrationForm, ChangePasswordForm,\
    PasswordResetRequestForm, PasswordResetForm, ChangeEmailForm
import jinja2
from ..models import *
from ..email import send_email
from .. import executor
import peewee as p
from wtforms import ValidationError

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
  return render_template('/auth/login.jinja2', login=login_form, reset_pass=pass_reset_form, reg=reg_form, email_sent=email_sent, wrong_cred=wrong_cred)

@auth_bp.before_app_request
def before_request():
  users_db.connect(reuse_if_open=True)
  if current_user is not None:
    if current_user.is_authenticated:
        current_user.ping()
        print('before_request is_authenticated=True blueprint is: '+ str(request.blueprint))
        print('before_request is_authenticated=True endpoint is: '+str(request.endpoint))
        print('before_request is_authenticated=True next is: '+str(request.values.get('next')) )
        if not current_user.user_confirmed \
                and request.blueprint != 'auth_bp' \
                and request.endpoint != 'static':
            print('condition for unconfirmed == True')
            #return redirect(url_for('auth_bp.unconfirmed'))
  users_db.close()
  pass    


@auth_bp.route('/unconfirmed')
def unconfirmed():
    if current_user.is_anonymous or current_user.user_confirmed:
        return redirect(url_for('main_bp.contact'))
    return render_template('auth_bp/unconfirmed.html')  

@auth_bp.route('/login', methods=['POST','GET'])
def login_form():
    print('login_form call')
    next = request.values.get('next')
    print('login_form method= POST and GET, next is: '+str(next))
    login_form = LoginForm()
    pass_reset_form = PasswordResetRequestForm()
    reg_form = RegistrationForm()
    wrong_cred=False
    email_sent=False
    awaiting_confirm=False
    if request.method == 'POST' and request.form['submit'] == 'Logg Inn':
        users_db.connect(reuse_if_open=True)
        print('login_form() request method POST')
        print('login_form POST  request.form["email"] : ' + str(request.form['email']))
        user = User.select().where(User.user_email==login_form.email.data).first()
        if user is not None and user.verify_password(login_form.password.data):
            login_user(user, login_form.remember_me.data)
            next = request.values.get('next')
            print('login_form method=POST, next is: '+str(next))
            print('login_form method=POST, current_user.user_email: '+str(current_user.user_email))
            if next is None or not (next.startswith('/') or not next.startswith('%2F')):
                next = url_for('main_bp.contact_form')
            return redirect(next)
        else:
            wrong_cred=True
        users_db.close()
    return render_template('/auth/login.jinja2', login=login_form, reset_pass=pass_reset_form, reg=reg_form, email_sent=email_sent, wrong_cred=wrong_cred,awaiting_confirm=awaiting_confirm)

@auth_bp.route('/register', methods=[ 'POST','GET'])
def register_form():
  login_form = LoginForm()
  pass_reset_form = PasswordResetRequestForm()
  reg_form = RegistrationForm()
  wrong_cred=False
  email_sent=False
  awaiting_confirm=False
  if  request.method == 'POST' and request.form['submit']== 'Registrer' and reg_form.validate_on_submit() :
      users_db.connect(reuse_if_open=True)
      print('inside register_form POST')
      try :
        user = User.create(user_email=reg_form.email.data,
                           user_pass=reg_form.password.data)
      except p.IntegrityError :
        raise ValidationError('duplikat epost')
      print('user.is_authenticated before gene_conf_token(): ',str(user.is_authenticated)) 
      token = user.generate_confirmation_token()
      print('user.is_authenticated after gene_conf_token(): ',str(user.is_authenticated))
      print('User email to send: ' +  user.user_email)
      future = executor.submit(send_email, user.user_email, 'Confirm Your Account', 'auth/email/confirm', user=user, token=token)
      print('register_form future.result : '+str(future.result()))
      #send_email(user.user_email, 'Confirm Your Account', 'auth/email/confirm', user=user, token=token)
      awaiting_confirm= True
      users_db.close()
  if pass_reset_form.validate_on_submit():
        email_sent=True
  return render_template('/auth/login.jinja2', login=login_form, reset_pass=pass_reset_form, reg=reg_form, email_sent=email_sent, wrong_cred=wrong_cred,awaiting_confirm=awaiting_confirm)


@auth_bp.route('/logout')
@login_required
def logout():
  logout_user()
  return redirect(url_for('auth_bp.login_form'))


@auth_bp.route('/confirm/<token>')
@login_required
def confirm(token):
    print('next in auth_bp.confirm is: ' + str(request.values.get('next')))
    users_db.connect(reuse_if_open=True)
    if current_user.user_confirmed or current_user.confirm(token):
        print('current_user.user_confirmed = True')
        return redirect(url_for('main_bp.contact_form'))
    print('current_user.user_confirmed = False') 
    users_db.close()
    return redirect(url_for('auth_bp.login_form'))



@auth_bp.route('/reset', methods=['GET', 'POST'])
@login_required
def password_reset_request():
    form = PasswordResetRequestForm()
    if form.validate_on_submit():
        user = User.get(User.user_email==form.email.data.lower())
        if user:
            token = user.generate_reset_token()
            send_email(user.user_email, 'Reset Your Password',
                       'auth/email/reset_password',
                       user=user, token=token)
        return redirect(url_for('auth_bp.login_form'))
    return render_template('auth/pass_reset_request.jinja2', form=form)


@auth_bp.route('/reset/<token>', methods=['GET', 'POST'])
@login_required
def password_reset(token):
    form = PasswordResetForm()
    if form.validate_on_submit():
        if User.reset_password(token, form.password.data):
            return redirect(url_for('auth_bp.login_form'))
        else:
            return redirect(url_for('main_bp.contact_form'))
    return render_template('auth/pass_reset.jinja2', form=form) 

@auth_bp.route('/change_email', methods=['GET', 'POST'])
@login_required
def change_email_request():
    form = ChangeEmailForm()
    if form.validate_on_submit():
        if current_user.verify_password(form.password.data):
            new_email = form.email.data.lower()
            token = current_user.generate_email_change_token(new_email)
            send_email(new_email, 'Confirm your email address',
                       'auth/email/change_email',
                       user=current_user, token=token)
            print('An email with instructions to confirm your new email '
                  'address has been sent to you.')
            return redirect(url_for('auth_bp.login'))
        else:
            print('Invalid email or password.')
    return render_template("auth/email_reset_request.jinja2", form=form)


@auth_bp.route('/change_email/<token>')
@login_required
def change_email(token):
    if current_user.change_email(token):
        print('Your email address has been updated.')
    else:
        print('Invalid request.')
    return redirect(url_for('main_bp.contact_form'))
