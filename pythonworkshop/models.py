from flask import Flask, request
from passlib.hash import bcrypt_sha256
import peewee as p
from flask_login import LoginManager
from flask_login import UserMixin
from . import login_manager
from itsdangerous import TimedJSONWebSignatureSerializer as Serializer
from flask import current_app

@login_manager.user_loader
def load_user(user_id):
    return User.select().where(User.id == int(user_id)).get()  
#equal to User.get(int(user_id))  type=serial constraint=PRIMARY KEY 

users_db = p.PostgresqlDatabase(user='nf_user',password='nfvinter2022',
        host='127.0.0.1',
        port='5432',
        database='nf_users_db')


class User(UserMixin,p.Model):
  id = p.AutoField()  
  user_email = p.CharField(default='first_email')
  user_name = p.CharField(default='anonymous_user',max_length='30')
  user_pass_hash = p.CharField(default='initial hash')
  user_confirmed = p.BooleanField(default=False)
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
        s = Serializer(current_app.config['SECRET_KEY'], expiration)
        return s.dumps({'confirm': self.id}).decode('utf-8')

  def confirm(self, token):
    s = Serializer(current_app.config['SECRET_KEY'])
    try:
        data = s.loads(token.encode('utf-8'))
    except:
        return False
    if data.get('confirm') != self.id:
        return False
    self.user_confirmed = True
    self.save()
    return True
  
  def generate_reset_token(self, expiration=3600):
        s = Serializer(current_app.config['SECRET_KEY'], expiration)
        return s.dumps({'reset': self.id}).decode('utf-8')

  @staticmethod
  def reset_password(token, new_password):
        s = Serializer(current_app.config['SECRET_KEY'])
        try:
            data = s.loads(token.encode('utf-8'))
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
        s = Serializer(current_app.config['SECRET_KEY'], expiration)
        return s.dumps(
            {'change_email': self.id, 'new_email': new_email}).decode('utf-8')

  def change_email(self, token):
        s = Serializer(current_app.config['SECRET_KEY'])
        try:
            data = s.loads(token.encode('utf-8'))
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
 
users_db.connect()   
users_db.create_tables([User])
