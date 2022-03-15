#!/usr/bin/env python3
# -*- coding: utf-8 -*-

from flask import Flask, render_template, request
import jinja2
import os
from passlib.hash import bcrypt_sha256
from flask_moment import Moment
from flask_mail import Mail
from flask_moment import Moment
from flask_login import LoginManager
from config import config, DevelopmentConfig


templ_dir = os.path.abspath('./pythonworkshop/templates')
static_dir = os.path.abspath('./pythonworkshop/static')

mail = Mail()
moment = Moment()
login_manager = LoginManager()
login_manager.login_view = 'auth_bp.login_form'

 #- only views that don't use FlaskForm use the provided CSRF extension

def create_app(config_name):
  app = Flask(__name__, static_url_path=static_dir ,static_folder= 'static', template_folder=templ_dir)
  print('config_name : ' + str(config[config_name]) )
  app.config.from_object(config[config_name])
  app.config.from_envvar('DOTENV_FILE')
  #python-dotenv doesn't override existing SECRET_KEY value which defauts to None!
  app.config['SECRET_KEY'] = os.environ.get('SECRET_KEY')
  config[config_name].init_app(app)

  mail.init_app(app)
  moment.init_app(app)
  login_manager.init_app(app)
  print('mail server: ' + app.config['MAIL_SERVER'])
  print('ENV value: ' + app.config['ENV'])
  print('DEBUG value :' + str(app.config['DEBUG']))
  print('mail user '+ str(os.environ.get('MAIL_USERNAME')) )
  print('mail pass : ' + str(os.environ.get('MAIL_PASSWORD')) )
  from .main_bp import main_bp
  app.register_blueprint(main_bp)

  from .auth_bp import auth_bp
  app.register_blueprint(auth_bp)

  return app


