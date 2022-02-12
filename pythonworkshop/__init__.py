#!/usr/bin/env python3
# -*- coding: utf-8 -*-

from flask import Flask, render_template, request
import jinja2
import os
from flask_wtf.csrf import CSRFProtect
from passlib.hash import bcrypt_sha256
from flask_moment import Moment
from flask_mail import Mail
from flask_moment import Moment
from flask_login import LoginManager
from config import config

templ_dir = os.path.abspath('./templates')

mail = Mail()
moment = Moment()
login_manager = LoginManager()

#csrf = CSRFProtect(app)    - only views that don't use FlaskForm use the provided CSRF extension

def create_app(config_name):
  app = Flask(__name__, static_url_path='/static',static_folder= 'static', template_folder=templ_dir)
  app.config.from_object(config[config_name])
  mail.init_app(app)
  moment.init_app(app)
  login_manager.init_app(app)
  #csrf.init_app(app)

  from .main_bp import main_bp
  app.register_blueprint(main_bp)

  from .login_bp import login_bp
  #app.register_blueprint(auth_bp)

  return app


