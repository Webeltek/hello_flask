from wtforms import Form, StringField,BooleanField, DateTimeField, DecimalField, validators, SubmitField, PasswordField, widgets
from wtforms.validators import DataRequired, Length, Email, Regexp, EqualTo
from flask_wtf import FlaskForm
from flask_wtf.file import FileField, FileRequired
from werkzeug.utils import secure_filename

class LoginForm(FlaskForm):
  username = StringField(label='Brukernavn:', validators=[validators.Length(min=8, max=16)])
  password = PasswordField(label='Passord:', validators=[validators.DataRequired()])
  remember_me = BooleanField('Keep me logged in')
  submit = SubmitField('Logg Inn')

class ContactForm(FlaskForm):
    epost = StringField(label='Epost:', validators=[validators.Length(min=4, max=25),validators.Email()])
    telf = StringField(label='Telefon:', validators=[validators.Length(min=8, max=16)])
    twitter = StringField(label='Twitter:', validators=[validators.Length(min=4, max=25)])
    facebook = StringField(label='Facebook:', validators=[validators.Length(min=4, max=25)])
    instagram = StringField(label='Instagram:', validators=[validators.Length(min=4, max=25)])

class PersonsForm(FlaskForm):
    epost = StringField(label='Epost:', validators=[validators.Length(min=4, max=25),validators.Email()])
    telf = StringField(label='Telefon:', validators=[validators.Length(min=8, max=16)])
    twitter = StringField(label='Twitter:', validators=[validators.Length(min=4, max=25)])
    facebook = StringField(label='Facebook:', validators=[validators.Length(min=4, max=25)])
    instagram = StringField(label='Instagram:', validators=[validators.Length(min=4, max=25)])

class ServicesForm(FlaskForm):
    description = StringField(label='Epost:', validators=[validators.Length(min=4, max=25),validators.InputRequired()])
    photo = FileField(validators=[FileRequired()])

class AboutUsForm(FlaskForm):
    firma_navn = StringField(label='Firma navn:', validators=[validators.Length(min=4, max=30)])
    org_nr = DecimalField(label='OrgNr:', validators=[validators.Length(min=8, max=16)])
    kort_om = StringField(label='Kort om oss:', validators=[validators.Length(min=4, max=25)])
