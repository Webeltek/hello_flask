import os

class Config:
    SECRET_KEY = os.environ.get('SECRET_KEY') #env var SECRET_KEY#env var SECRET_KEY  
    MAIL_SERVER = os.environ.get('MAIL_SERVER', 'smtp.googlemail.com')
    MAIL_PORT = int(os.environ.get('MAIL_PORT', '587'))
    MAIL_USE_TLS = os.environ.get('MAIL_USE_TLS', 'true').lower() in \
        ['true', 'on', '1']
    MAIL_USERNAME = os.environ.get('MAIL_USERNAME')
    MAIL_PASSWORD = os.environ.get('MAIL_PASSWORD')
    FLASKY_MAIL_SUBJECT_PREFIX = '[NF admin]'
    FLASKY_MAIL_SENDER = 'NF admin <webeltek2017@gmail.com>'  #replace with site email
    FLASKY_ADMIN = os.environ.get('FLASKY_ADMIN')

    @staticmethod
    def init_app(app):
        pass

class DevelopmentConfig(Config):
    DEBUG = True
 
config = { 
         'development' : DevelopmentConfig
         }
