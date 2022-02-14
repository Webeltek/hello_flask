from flask import Flask, request
from passlib.hash import bcrypt_sha256
import peewee
from . import login_manager
from flask_login import UserMixin

@login_manager.user_loader
def load_user(user_id):
  return #User.query.get(int(user_id))


class User(UserMixin):
    __tablename__ = 'users'

    @property
    def password(self):
        raise AttributeError('password is not a readable attribute')

    @password.setter
    def password(self, password):
        pass
        #self.password_hash = generate_password_hash(password)

    def verify_password(self, password):
        pass
        #return check_password_hash(self.password_hash, password)  

    
