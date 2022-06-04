from datetime import datetime
from flask import Flask, request
from passlib.hash import bcrypt_sha256
import peewee as p
from flask_login import LoginManager
from flask_login import UserMixin
from . import login_manager
import jwt
from flask import current_app
from playhouse.shortcuts import model_to_dict

@login_manager.user_loader
def load_user(user_id):
    users_db.connect(reuse_if_open=True)
    if User.table_exists():
      query = User.select().where(User.id == int(user_id)).first()
      print('@login_manager.user_loader extr user value : ' + str(query))
      users_db.close()
      return  query
    else:
      return None   
#equal to User.get(int(user_id))  type=serial constraint=PRIMARY KEY 

users_db = p.PostgresqlDatabase(user='nf_user',password='nfvinter2022',
        host='127.0.0.1',
        port='5432',
        database='nf_users_db')

class Permission:
    VIEW = 1
    ADMIN = 16

class User(UserMixin,p.Model):
  id = p.AutoField()  
  user_email = p.CharField(default='first_email')
  user_pass_hash = p.CharField(default='initial hash')
  user_confirmed = p.BooleanField(default=False)
  last_seen = p.CharField(default='initial date')

  def to_dict(self):
      return self.model_to_dict()

  @property
  def user_pass(self):
    raise AttributeError('password is not a readable attribute')

  @user_pass.setter
  def user_pass(self, password):
    self.user_pass_hash = bcrypt_sha256.hash(password)

  def verify_password(self, password):
    return bcrypt_sha256.verify(password,self.user_pass_hash)
  
  class Meta:
    database = users_db
    table_name = 'nf_user'
  
  def generate_confirmation_token(self, expiration=3600):
        encoded = jwt.encode({'confirm': self.id},current_app.config['SECRET_KEY'], algorithm='HS256')
        return encoded

  def confirm(self, token):
    secret_key = current_app.config['SECRET_KEY']
    try:
        data = jwt.decode(token, secret_key, algorithms=['HS256'])
    except:
        print('exeption in User.confirm( s.loads')
        return False
    if data.get('confirm') != self.id:
        print('User.confirm(...) exception in data.get("confirm")')
        print('User.confirm(...) data.get("confirm"): ' + str(data.get('confirm')) + 'is not = self.id: '+str(self.id)) 
        
        return False
    self.user_confirmed = True
    self.save()
    print('User confirmed in User.confirm(')
    return True
  
  def generate_reset_token(self, expiration=3600):
        encodeed = jwt.encode({'reset': self.id},current_app.config['SECRET_KEY'], algorithm='HS256')
        return encodeed

  @staticmethod
  def reset_password(token, new_password):
        secret_key = current_app.config['SECRET_KEY']
        try:
           data = jwt.decode(token, secret_key, algorithms=['HS256'])
        except:
            print('serializer loads exeption')
            return False
        user = User.get(User.id == data.get('reset'))
        if user is None:
            return False
        user.user_pass = new_password
        user.save()
        return True

  def generate_email_change_token(self, new_email, expiration=3600):
        encodeed = jwt.encode({'change_email': self.id, 'new_email' : new_email },current_app.config['SECRET_KEY'], algorithm='HS256')
        return encodeed

  def change_email(self, token):
        secret_key = current_app.config['SECRET_KEY']
        try:
            data = jwt.decode(token, secret_key, algorithms=['HS256'])
        except:
            return False
        if data.get('change_email') != self.id:
            return False
        new_email = data.get('new_email')
        if new_email is None:
            return False
        user =  User.get(User.user_email==new_email)        
        if user is not None:
            return False
        self.user_email = new_email
        user
        return True

  def ping(self):
        self.last_seen = datetime.utcnow()

class Event(p.Model):
  id = p.AutoField()
  uid = p.CharField()
  userId = p.ForeignKeyField(User, backref='events', lazy_load=False)
  row = p.CharField()
  title = p.CharField()
  start = p.CharField()
  end = p.CharField()
  color = p.CharField()

  class Meta:
    database = users_db
    table_name = 'nf_event'

  
users_db.connect(reuse_if_open=True)
users_db.create_tables([User,Event], safe = True) #safe=True equal to IF_NOT_EXISTS

