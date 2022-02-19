from flask import render_template, redirect, request, url_for, flash
from flask_login import login_user, logout_user, login_required, \
    current_user
from . import auth_bp
from .. import main_bp
from .forms import LoginForm, RegistrationForm
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
        login_form = LoginForm(request.form)
        if request.method == 'POST':
            request.form.get('user')
            print(F'I got username  {login_form.email.data}')
            return F'I got your autodata!!!'
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
              next = url_for('main_bp.contact')
            return redirect(next)
    flash('Invalid email or password.')
    return login_templ.render( login=login_form)

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
      flash('A confirmation email has been sent to you by email.')
      return redirect(url_for('main_bp.contact_form'))
  return render_template('auth/register.jinja2', register=reg_form)

@auth_bp.route('/confirm/<token>')
@login_required
def confirm(token):
    if current_user.user_confirmed:
        return redirect(url_for('main_bp.contact'))
    if current_user.confirm(token):
        current_user.save()
        flash('You have confirmed your account. Thanks!')
    else:
        flash('The confirmation link is invalid or has expired.')
    return redirect(url_for('main_bp.contact'))
