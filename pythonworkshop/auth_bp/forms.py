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
    email = StringField('Epost', validators=[DataRequired(), Length(1, 64),Email()])
    username = StringField('Brukernavn', validators=[DataRequired(), Length(1, 64),
        Regexp('^[A-Za-z][A-Za-z0-9_.]*$', 0,
               'Usernames must have only letters, numbers, dots or '
               'underscores')])
    password = PasswordField('Passord', validators=[DataRequired(),
        Length(8,64,message='Passord må være minst 8 tegn!'), 
        EqualTo('password2', message='Passordene må være like!')])
    password2 = PasswordField('Bekreft passord', validators=[DataRequired()])
    submit = SubmitField('Lagre')

    def validate_email(self, field):
        if User.select().where(User.user_email == field.data.lower()):
            raise ValidationError('E-postadressen er allerede i bruk.')

    def validate_username(self, field):
        if User.select().where(User.user_name == field.data):
            raise ValidationError('Brukernavn er allerede i bruk.')

class PasswordResetRequestForm(FlaskForm):
    email = StringField('Epost', validators=[DataRequired(), Length(1, 64), Email()])
    submit = SubmitField('Nullstil  passord')


class PasswordResetForm(FlaskForm):
    password = PasswordField('Nytt passord', 
            validators=[ Length(8,64,message='Passord må være minst 8 tegn!'),
      DataRequired(), EqualTo('password2', message='Passordene må være like!')])
    password2 = PasswordField('Bekreft passord', validators=[DataRequired()])
    submit = SubmitField('Tilbakestill passord')

class ChangePasswordForm(FlaskForm):
    old_password = PasswordField('Old password', validators=[DataRequired()])
    password = PasswordField('New password', validators=[
        DataRequired(), EqualTo('password2', message='Passwords must match.')])
    password2 = PasswordField('Confirm new password',
                              validators=[DataRequired()])
    submit = SubmitField('Update Password')    
