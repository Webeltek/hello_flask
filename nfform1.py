#!/usr/bin/env python3
# -*- coding: utf-8 -*-

from flask import Flask, render_template, request, url_for
from wtforms import Form, StringField, DateTimeField, DecimalField, validators, SubmitField, widgets
from flask_wtf import FlaskForm
import jinja2
import os

class ContactForm(FlaskForm):
    epost = StringField(label='Epost:', validators=[validators.Length(min=4, max=25),validators.Email()],render_kw={"placeholder":"Firma epost her"})
    telf = StringField(label='Telefon:', validators=[validators.Length(min=8, max=16)])
    twitter = StringField(label='Twitter:', validators=[validators.Length(min=4, max=25)])
    facebook = StringField(label='Facebook:', validators=[validators.Length(min=4, max=25)])
    instagram = StringField(label='Instagram:', validators=[validators.Length(min=4, max=25)])    

templ_dir = os.path.abspath('./mockup_v2/templates')

app = Flask(__name__,
     static_url_path='/static',
     static_folder= 'static',
     template_folder=templ_dir)


@app.route("/", methods= ['GET','POST'])
def login_form():
        
        if request.method == 'POST' :
            print(F'I got UFO name is {myform.ufoname.data}')
            return F'I got your autodata!!!'
        return render_template('forms/login.jinja2')


@app.route("/contact", methods= ['GET','POST'])
def contact_form():
        myform = ContactForm(request.form)
        if request.method == 'POST' and myform.validate():
            print(F'I got UFO name is {myform.ufoname.data}')
            return F'I got your autodata!!!'
        return render_template('forms/contact.jinja2',form=myform)

@app.route("/persons", methods= ['GET','POST'])
def persons_form():
        myform = MyForm(request.form)
        if request.method == 'POST' and myform.validate():
            print(F'I got UFO name is {myform.ufoname.data}')
            return F'I got your autodata!!!'
        return render_template('forms/persons.jinja2',form=myform)

@app.route("/services", methods= ['GET','POST'])
def services_form():
        myform = MyForm(request.form)
        if request.method == 'POST' and myform.validate():
            print(F'I got UFO name is {myform.ufoname.data}')
            return F'I got your autodata!!!'
        return render_template('forms/services.jinja2',form = myform)    

@app.route("/about_us", methods= ['GET','POST'])
def about_us_form():
        myform = MyForm(request.form)
        if request.method == 'POST' and myform.validate():
            print(F'I got UFO name is {myform.ufoname.data}')
            return F'I got your autodata!!!'
        return render_template('forms/about_us.jinja2',form=myform)


if __name__== "__main__":
      app.run()


