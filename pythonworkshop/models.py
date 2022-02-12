from flask import Flask, request
from passlib.hash import bcrypt_sha256
import peewee


class User():
    __tablename__ = 'users'

    @property
    def password(self):
        raise AttributeError('password is not a readable attribute')

    @password.setter
    def password(self, password):
        self.password_hash = generate_password_hash(password)

    def verify_password(self, password):
        return check_password_hash(self.password_hash, password)  

    
