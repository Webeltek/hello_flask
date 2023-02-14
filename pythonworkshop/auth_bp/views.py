from flask import render_template, redirect,session, request, url_for, flash, \
        current_app, session, jsonify

from . import auth_bp
from .. import main_bp
from .forms import LoginForm, RegistrationForm, ChangePasswordForm,\
    PasswordResetRequestForm, PasswordResetForm, ChangeEmailForm
import jinja2
from ..models import *
from ..email import send_email, send_adm_conf_email
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
        if user is not None and user.verify_password(request.json['password']) and user.user_confirmed and user.user_conf_by_admin:
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
      temp_user_id = user.id
      send_email(user.user_email, 'Confirm Your Account', 'auth/email/confirm', user=user, token=token)
      #send_email([user.user_email], 'Confirm Your Account', 'auth/email/confirm', user=user, token=token)
      msg = 'En bekreftelses e-post har blitt sendt til deg på e-post.'
      users_db.close()
  return jsonify({'is_duplicate': False,'sent_token': token, 'temp_user_id': temp_user_id,'msg':msg})

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
    return redirect(f'/confirm?=userconfirmed={userconfirmed}')

@auth_bp.route('/api/auth/reg_admin_confirm', methods=['POST'])
def reg_admin_confirm(): 
    users_db.connect(reuse_if_open=True)
    if request.method == 'POST':
        req_json = request.get_json()
        user_email=request.json['email']
        user_pass=request.json['password']
        temp_user_id = req_json['temp_user_id']
        print(f'/api/auth/reg_admin_confirm called and request email: {str(request.json["email"])}') 
        users_db.connect(reuse_if_open=True)
        msg=''
        """ try :
            user = User.create(user_email=user_email,user_pass=user_pass)
        except p.IntegrityError :
            return ({'is_duplicate': True, 'duplicate_email': request.json['email']}) """
        adm_conf_token = User.generate_admin_conf_token(temp_user_id)
        temp_user = User.select().where(User.id==temp_user_id).first()
        app= current_app._get_current_object()
        adm_conf_email = app.config['FLASKY_CONF_ADMIN']
        send_adm_conf_email(adm_conf_email, 'Confirm registration of account: '+temp_user.user_email,  \
                             'auth/email/reg_admin_confirm', user=temp_user, adm_conf_token=adm_conf_token)
        msg = 'En bekreftelses e-post har blitt sendt til admin på e-post.'
        users_db.close()
    return jsonify({'is_duplicate': False,'sent_token': adm_conf_token, 'msg':msg})

@auth_bp.route('/api/auth/reg_admin_confirm/<token>',methods=['POST','GET'])
def conf_by_adm(token):
    users_db.connect(reuse_if_open=True)
    tokens_user_id = User.get_tokens_user_id(token)
    user = User.select().where(User.id==tokens_user_id).first()
    user_conf_by_adm=False
    if user is not None and ((user.user_confirmed and user_conf_by_adm) or user.conf_by_adm(token)):
        msg_confirmed=f'Admin har bekreftet kontoen {user.user_email}. Takk!'
        user_dict = model_to_dict(user)
        user_conf_by_adm=True
    elif user is not None and not user.confirm_by_adm(token):
        user_conf_by_adm=False
        User.delete().where(User.id == user.id).execute()
    msg_wrong_link = 'Bekreftelseslenken er ugyldig eller har utløpt.'
    print(f'auth_bp.conf_by_adm user_conf_by_adm:{user_conf_by_adm}')    
    users_db.close()
    return redirect(f'/confirm?user_conf_by_adm={user_conf_by_adm}')

@auth_bp.route('/api/auth/change_email/<token>')
def change_email(token):
    users_db.connect(reuse_if_open=True)
    msg=''
    emailchanged=False
    tokens_user_id = User.get_tokens_user_id(token)
    user = User.select().where(User.id==tokens_user_id).first()
    if user is not None and user.change_email(token):
        msg='E-postadressen din er oppdatert'
        emailchanged=True
    else:
        msg='Ugyldig forespørsel.'
    print(f'auth_bp.change_emal msg: {msg}')    
    users_db.close()    
    return redirect(f'/confirm?emailchanged={emailchanged}')

@auth_bp.route('/api/auth/change_pass/<token>', methods=['GET', 'POST'])
def change_pass(token):
    users_db.connect(reuse_if_open=True)
    msg=''
    emailcheck=False
    tokens_user_id = User.get_tokens_user_id(token)
    user = User.select().where(User.id==tokens_user_id).first()
    if user is not None :
        msg='User exists'
        emailcheck=True
    else:
        msg='Invalid email.'
    print(f'auth_bp.change_pass msg: {msg}')    
    users_db.close()    
    return redirect(f'/change_pass?emailcheck={emailcheck}')

@auth_bp.route('/api/auth/input_change_pass', methods=['POST','GET'])
def input_change_pass():
    msg = ''
    email= request.json['email']
    oldpass = request.json['oldpass']
    newpass = request.json['newpass']
    if request.method == 'POST':
        users_db.connect(reuse_if_open=True)
        user = User.select().where(User.user_email==email).first()
        if user is not None:
            print(f'auth_bp.input_change_pass user email to change pass:{user.user_email}')
        if user is not None and user.verify_password(oldpass) and user.user_confirmed and user.user_conf_by_admin:
            user.change_pass(email,newpass)
            user.login_user()
            return jsonify({'user_email':email,'msg':'Password changed!'})
        else:
            msg='Wrong username or password!'
        users_db.close()
    return jsonify({'user':'nonexistent','msg':msg}) 


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

"""
