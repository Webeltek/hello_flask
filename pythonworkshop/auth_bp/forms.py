from flask_wtf import FlaskForm
from wtforms import StringField, PasswordField, BooleanField, SubmitField
from wtforms.validators import DataRequired, Length, Email, Regexp, EqualTo
from wtforms import ValidationError
from ..models import User


class LoginForm(FlaskForm):
    username = StringField('Brukernavn', validators=[DataRequired('Felt må ikke være tomt')] )
    email = StringField('Email', validators=[DataRequired(), Length(1, 64),Email()])
    password = PasswordField('Passord', validators=[DataRequired()])
    remember_me = BooleanField('La meg være pålogget')
    submit = SubmitField('Logg Inn')

class RegistrationForm(FlaskForm):
    email = StringField('E-post', validators=[DataRequired(), Length(1, 64),Email()])
    username = StringField('Brukernavn', validators=[DataRequired(), Length(1, 64),
        Regexp('^[A-Za-z][A-Za-z0-9_.]*$', 0,
               'Usernames must have only letters, numbers, dots or '
               'underscores')])
    password = PasswordField('Passord', validators=[DataRequired(), 
        EqualTo('password2', message='Passwords must match.')])
    password2 = PasswordField('Bekreft passord', validators=[DataRequired()])
    submit = SubmitField('Lagre')

    def validate_email(self, field):
        if User.select().where(User.user_email == field.data.lower()):
            raise ValidationError('E-postadressen er allerede i bruk.')

    def validate_username(self, field):
        if User.select().where(User.user_name == field.data):
            raise ValidationError('Brukernavn er allerede i bruk.')
