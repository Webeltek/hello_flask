from flask import Flask, render_template, request
from ..models import *
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

  
@main_bp.route("/services", methods= ['GET'])
@login_required
def index():
    users_db.connect(reuse_if_open=True)
    events = Event.select().order_by('id').asc() 
    calendar = events
    users_db.close() 
    return render_template('index.html', calendar = calendar)
  
@main_bp.route("/services/insert",methods=["POST","GET"])
@login_required
def insert():
    users_db.connect(reuse_if_open=True)
    if request.method == 'POST':
        title = request.form['title']
        start = request.form['start']
        end = request.form['end']
        print(title)     
        print(start)  
        User.create(title=title,start=start,end=end)
        users_db.close()
        msg = 'success' 
    return jsonify(msg)
  
@main_bp.route("/services/update",methods=["POST","GET"])
@login_required
def update():
    users_db.connect(reuse_if_open=True)
    if request.method == 'POST':
        title = request.form['title']
        start = request.form['start']
        end = request.form['end']
        id = request.form['id']
        print(title)     
        print(start)  
        event = Event.update(title=title,start=start,end=end).where(Event.id == id).execute()       
        users_db.close()
        msg = 'success' 
    return jsonify(msg)    
  
@main_bp.route("/services/ajax_delete",methods=["POST","GET"])
@login_required
def ajax_delete():
    users_db.connect(reuse_if_open=True)
    if request.method == 'POST':
        getid = request.form['id']
        print(getid)
        event = Event.delete().where(Event.id == getid).execute()
        users_db.close()
        msg = 'Record deleted successfully' 
    return jsonify(msg)
