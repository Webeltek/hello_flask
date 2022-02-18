from flask import render_template, redirect, request, url_for, flash
from flask_login import login_user, logout_user, login_required, \
    current_user
from . import auth_bp
from .. import main_bp
from .forms import LoginForm, RegistrationForm
import jinja2
from .. import models
from ..models import *


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
        user = User.select().where(User.user_email==login_form.email.data)
        if user is not None and user.verify_passord(login_form.password.data):
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
      if  models.User.table_exists():
        user = models.User(user_email=reg_form.email.data,
                           user_name=reg_form.username.data,
                           user_pass=reg_form.password.data)
      user.save()
      flash('Du kan logge inn.')
      return redirect(url_for('auth_bp.login_form'))
  return render_template('auth/register.jinja2', register=reg_form)
