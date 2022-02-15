from flask import Flask, request
from passlib.hash import bcrypt_sha256
import peewee as p
from . import login_manager
from flask_login import UserMixin

@login_manager.user_loader
def load_user(user_id):
  return #User.query.get(int(user_id))

users_db = p.PostgresqlDatabase(user='nf_user',password='nfvinter2022',
        host='127.0.0.1',
        port='5432',
        database='nf_users_db')

class User(UserMixin,p.Model):
    user_id = p.CharField(default='first_id')
    user_email = p.CharField(default='first_email')
    user_name = p.CharField(default='anonymous_user',max_length='30')
    user_pass_hash = p.CharField(default='initial hash')
    
    @property
    def user_pass(self):
        raise AttributeError('password is not a readable attribute')

    @user_pass.setter
    def user_pass(self, password):
        self.password_hash = bcrypt_sha256.hash(password)

    def verify_password(self, password):
        return bcrypt_sha256.verify(password,user_pass_hash)
    
    class Meta:
        database = users_db

users_db.connect()
users_db.create_tables([User])

    
