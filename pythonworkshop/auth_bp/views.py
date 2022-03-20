from flask import render_template, redirect, request, url_for, flash, \
        current_app, session
from flask_login import login_user, logout_user, login_required, \
    current_user
from . import auth_bp
from .. import main_bp
from .forms import LoginForm, RegistrationForm, ChangePasswordForm,\
    PasswordResetRequestForm, PasswordResetForm, ChangeEmailForm
import jinja2
from .. import models
from ..models import *
from ..email import send_email
from .. import executor


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
  if current_user is not None:
    if current_user.is_authenticated:
        current_user.ping()
        print('request.blueprint is: '+ str(request.blueprint))
        print('request.endpoint is: '+str(request.endpoint))
        if not current_user.user_confirmed \
                and request.blueprint != 'auth_bp' \
                and request.endpoint != 'static':
            print('condition for unconfirmed == True')
            #return redirect(url_for('auth_bp.unconfirmed'))
            pass


@auth_bp.route('/unconfirmed')
def unconfirmed():
    if current_user.is_anonymous or current_user.user_confirmed:
        return redirect(url_for('main_bp.contact'))
    return render_template('auth_bp/unconfirmed.html')  

@auth_bp.route('/login', methods=['POST','GET'])
def login_form():
    print('login_form call')
    login_form = LoginForm()
    pass_reset_form = PasswordResetRequestForm()
    reg_form = RegistrationForm()
    wrong_cred=False
    email_sent=False
    if request.method == 'POST' and request.form['submit'] == 'Logg Inn':
        print('request method POST')
        print('request request.form["email"] : ' + str(request.form['email']))
        user = User.get_or_none(User.user_email==login_form.email.data)
        if user is not None and user.verify_password(login_form.password.data):
            login_user(user, login_form.remember_me.data)
            next = request.args.get('next')
            print('next arg from request in login_form: '+str(next))
            if next is None or not (next.startswith('/') or next.startswith('%2F')):
                next = url_for('auth_bp.index')
            print('inside request.form["submit"]')
            return redirect(next)
        else:
            wrong_cred=True
    return render_template('/auth/login.jinja2', login=login_form, reset_pass=pass_reset_form, reg=reg_form, email_sent=email_sent, wrong_cred=wrong_cred)

@auth_bp.route('/register', methods=[ 'POST','GET'])
def register_form():
  login_form = LoginForm()
  pass_reset_form = PasswordResetRequestForm()
  reg_form = RegistrationForm()
  wrong_cred=False
  email_sent=False
  awaiting_confirm=False
  if request.form['submit']== 'Registrer':
      print('inside reg_form.Validate_on_submit()')
      
      user = User(user_email=reg_form.email.data,
                           user_pass=reg_form.password.data)
      user.save()
      token = user.generate_confirmation_token()
      print('User email to send: ' +  user.user_email)
      future = executor.submit(send_email, user.user_email, 'Confirm Your Account', 'auth/email/confirm', user=user, token=token)
      print(str(future.result()))
      #send_email(user.user_email, 'Confirm Your Account', 'auth/email/confirm', user=user, token=token)
      awaiting_confirm= True
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
    if current_user.user_confirmed:
        print('current_user.user_confirmed = True')
        return redirect(url_for('main_bp.contact_form'))
    if current_user.confirm(token):
        print('current_user.user_confirmed = True') 
    else:
        print('current_user.user_confirmed = False')
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
