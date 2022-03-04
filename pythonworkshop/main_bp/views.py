from flask import Flask, render_template, request
from ..models import User
from . import forms
from . import main_bp
import jinja2
import os
from flask_login import login_required

templateLoader = jinja2.PackageLoader('pythonworkshop','templates')
templateEnv = jinja2.Environment(loader=templateLoader)

contact_templ = templateEnv.get_template('/main/contact.jinja2')
persons_templ = templateEnv.get_template('/main/persons.jinja2')
services_templ = templateEnv.get_template('/main/services.jinja2')
about_us_templ = templateEnv.get_template('/main/about_us.jinja2')

@main_bp.route("/contact", methods= ['GET','POST'])
@login_required
def contact_form():
        contact_form = forms.ContactForm(request.form)
        if request.method == 'POST' and contact_form.validate():
            print(F'I got UFO name is {myform.ufoname.data}')
            return F'I got your autodata!!!'
        return render_template('/main/contact.jinja2', contact=contact_form)

@main_bp.route("/persons", methods= ['GET','POST'])
@login_required
def persons_form():
        persons = forms.PersonsForm(request.form)
        if request.method == 'POST' and persons.validate():
            print(F'I got UFO name is {myform.ufoname.data}')
            return F'I got your autodata!!!'
        return render_template('/main/persons.jinja2', persons=persons)

@main_bp.route("/services", methods= ['GET','POST'])
@login_required
def services_form():
        services = forms.ServicesForm(request.form)
        if request.method == 'POST' and services.validate():
            print(F'I got UFO name is {myform.ufoname.data}')
            return F'I got your autodata!!!'
        return render_template('/main/services.jinja2' ,services = services)

@main_bp.route("/about_us", methods= ['GET','POST'])
@login_required
def about_us_form():
        about_us = forms.AboutUsForm(request.form)
        if request.method == 'POST' and about_us.validate():
            print(F'I got UFO name is {myform.ufoname.data}')
            return F'I got your autodata!!!'
        return about_us_templ.render(about=about_us)

@main_bp.route("/user_profile/<string:username>", methods= ['GET','POST'])
@login_required
def user_profile(username):
        user = User.select().where(user_name==username).get()
        about_us = forms.AboutUsForm(request.form)
        if request.method == 'POST' and about_us.validate():
            print(F'I got UFO name is {myform.ufoname.data}')
            return F'I got your autodata!!!'
        return render_template('/main/user_profile.jinja2',user=user)    

