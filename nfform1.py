#!/usr/bin/env python3
# -*- coding: utf-8 -*-

from flask import Flask, render_template, request, url_for
from wtforms import Form, StringField, DateTimeField, DecimalField, validators, SubmitField, widgets
from flask_wtf import FlaskForm
from flask_wtf.file import FileField, FileRequired
from werkzeug.utils import secure_filename
import jinja2
import os
from flask_wtf.csrf import CSRFProtect


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

templ_dir = os.path.abspath('./mockup_v2/templates')

app = Flask(__name__,
     static_url_path='/static',
     static_folder= 'static',
     template_folder=templ_dir)

csrf = CSRFProtect(app)

templateLoader = jinja2.FileSystemLoader(searchpath='./mockup_v2/templates')
templateEnv = jinja2.Environment(loader=templateLoader)

user_templ = templateEnv.get_template('user_page.jinja2')
login_templ = templateEnv.get_template('forms/login.jinja2')
contact_templ = templateEnv.get_template('forms/contact.jinja2')
persons_templ = templateEnv.get_template('forms/persons.jinja2')
services_templ = templateEnv.get_template('forms/services.jinja2')
about_us_templ = templateEnv.get_template('forms/about_us.jinja2')

@app.route("/", methods= ['GET','POST'])
def login_form():
        
        if request.method == 'POST' :
            print(F'I got UFO name is {myform.ufoname.data}')
            return F'I got your autodata!!!'
        return login_templ.render()


@app.route("/contact", methods= ['GET','POST'])
def contact_form():
        contact = ContactForm(request.form)
        if request.method == 'POST' and contact.validate():
            print(F'I got UFO name is {myform.ufoname.data}')
            return F'I got your autodata!!!'
        return contact_templ.render(contact=contact)

@app.route("/persons", methods= ['GET','POST'])
def persons_form():
        persons = PersonsForm(request.form)
        if request.method == 'POST' and persons.validate():
            print(F'I got UFO name is {myform.ufoname.data}')
            return F'I got your autodata!!!'
        return render_template('forms/persons.jinja2',form=myform)

@app.route("/services", methods= ['GET','POST'])
def services_form():
        services = ServicesForm(request.form)
        if request.method == 'POST' and services.validate():
            print(F'I got UFO name is {myform.ufoname.data}')
            return F'I got your autodata!!!'
        return services_templ.render(services = services)    

@app.route("/about_us", methods= ['GET','POST'])
def about_us_form():
        about_us = AboutUsForm(request.form)
        if request.method == 'POST' and about_us.validate():
            print(F'I got UFO name is {myform.ufoname.data}')
            return F'I got your autodata!!!'
        return about_us_templ.render(about=about_us)


if __name__== "__main__":
      app.run()


