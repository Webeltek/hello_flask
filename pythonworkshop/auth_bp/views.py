from flask import render_template, redirect, request, url_for, flash, \
        current_app
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


templateLoader = jinja2.PackageLoader('pythonworkshop','templates')
templateEnv = jinja2.Environment(loader=templateLoader)

login_templ = templateEnv.get_template('/auth/login.jinja2')
register_templ = templateEnv.get_template('/auth/register.jinja2')

@auth_bp.route("/",defaults={ 'form':'login'}, methods= ['GET','POST'])
@auth_bp.route("/<form>", methods= ['GET','POST'])
def initial_login_form(form):
    if form=='login':
        print('inside form==login ')
        login_form = LoginForm()
        if login_form.validate_on_submit():
          user = User.get(User.user_email==login_form.email.data)
          if user is not None and user.verify_password(login_form.password.data):
            login_user(user, login_form.remember_me.data)
            next = request.args.get('next')
            if next is None or not next.startswith('/'):
              next = url_for('main_bp.contact_form')
            return redirect(next)
          else :
            print('inside wrong cred')  
            return login_templ.render(login=login_form, wrong_cred=True)  
    print('inside initial_login_form')
    app = current_app._get_current_object()
    return login_templ.render(login=login_form)    
   


@auth_bp.route('/login', methods=['GET', 'POST'])
def login_form():
    login_form = LoginForm()
    if login_form.validate_on_submit():
        user = User.get(User.user_email==login_form.email.data)
        if user is not None and user.verify_password(login_form.password.data):
            login_user(user, login_form.remember_me.data)
            next = request.args.get('next')
            if next is None or not next.startswith('/'):
              next = url_for('main_bp.contact_form')
            return redirect(next)
    #flash('Invalid email or password.') 
    # use render_template(..) to insert cntxt vars where get_flashed_messages is defined
    return login_templ.render( login=login_form)

@auth_bp.route('/logout')
@login_required
def logout():
  logout_user()
  return redirect(url_for('auth_bp.initial_login_form'))

@auth_bp.route('/register', methods=['GET', 'POST'])
def register_form():
  reg_form = RegistrationForm()
  if reg_form.validate_on_submit():
      user = models.User(user_email=reg_form.email.data,
                           user_name=reg_form.username.data,
                           user_pass=reg_form.password.data)
      user.save()
      token = user.generate_confirmation_token()
      send_email(user.user_email, 'Confirm Your Account',
                 'auth/email/confirm', user=user, token=token)
      return redirect(url_for('main_bp.contact_form'))
  return register_templ.render( register=reg_form)

@auth_bp.route('/confirm/<token>')
@login_required
def confirm(token):
    if current_user.user_confirmed:
        return redirect(url_for('main_bp.contact_form'))
    if current_user.confirm(token):
        current_user.save()
        #flash('You have confirmed your account. Thanks!')
    else:
      return redirect(url_for('main_bp.contact'))



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
