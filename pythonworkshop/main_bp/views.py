from flask import Flask, render_template, request, jsonify, url_for
from ..models import *
from . import forms
from . import main_bp
import jinja2
import os
import json
from peewee import *
from playhouse.shortcuts import model_to_dict
from functools import wraps

def access_required(f):
    @wraps(f)
    def decorated_function(*args, **kwargs):
        auth_header = request.headers.get('Authorization')
        token = auth_header.split(" ")[1] if auth_header is not None else ''
        access_token_check = User.check_access_token(token) #access_token_check type is boolean or string
        if type(access_token_check) is str:
            return jsonify('access token expired')
        elif access_token_check is False:
            return jsonify('acces token is wrong')
        elif access_token_check is True:    
            print("Access ALLOWED")    
            return f(*args, **kwargs)            
        print("General access ERROR")            
        return jsonify('access not allowed')        
    return decorated_function


templateLoader = jinja2.PackageLoader('pythonworkshop','templates')
templateEnv = jinja2.Environment(loader=templateLoader)

contact_templ = templateEnv.get_template('/main/contact.jinja2')
persons_templ = templateEnv.get_template('/main/persons.jinja2')
#services_templ = templateEnv.get_template('/main/services.jinja2')
about_us_templ = templateEnv.get_template('/main/about_us.jinja2')

@main_bp.route("/contact", methods= ['GET','POST'])
@access_required
def contact_form():
        contact_form = forms.ContactForm(request.form)
        if request.method == 'POST' and contact_form.validate():
            print(F'I got UFO name is {myform.ufoname.data}')
            return F'I got your autodata!!!'
        return render_template('/main/contact.jinja2', contact=contact_form)



@main_bp.route("/about_us", methods= ['GET','POST'])
@access_required
def about_us_form():
        about_us = forms.AboutUsForm(request.form)
        if request.method == 'POST' and about_us.validate():
            return F'I got your autodata!!!'
        return render_template('/main/about_us.jinja2',about=about_us)

@main_bp.route("/user_profile/<string:username>", methods= ['GET','POST'])
@access_required
def user_profile(username):
        user = User.select().where(User.user_name==username).get()
        about_us = forms.AboutUsForm(request.form)
        if request.method == 'POST' and about_us.validate():
            print(F'I got UFO name is {myform.ufoname.data}')
            return F'I got your autodata!!!'
        return render_template('/main/user_profile.jinja2',user=user)  
  
@main_bp.route("/api/services/events", methods= ['GET'])
@access_required
def index_events():
        users_db.connect(reuse_if_open=True)
        events = Event.select().order_by(Event.id.asc())
        users_db.close()
        return jsonify({'events':list( events.dicts())})

@main_bp.route("/api/services/users", methods= ['GET'])
@access_required
def index_users():
        users_db.connect(reuse_if_open=True)
        saved_users = User.select().order_by(User.id.asc())
        users_db.close()
        s_users = saved_users.dicts() # returns modelselect with rows as dicts
        #json_users = json.dumps({'users':list(s_users)}) #list() is converting modelselect to list
        return jsonify({'users':list(s_users)})    

"""
@main_bp.route("/services", methods= ['GET'])
#@login_required
def services_index():
    users_db.connect(reuse_if_open=True)
    events = Event.select().order_by(Event.id.asc())
    if events is not None:
      for row in events :
        print('row id : ' + str(row.id))
    saved_events = events
    loggedin_user = User.select().where(current_user.id==User.id).get()
    users_db.close()
    for event in saved_events:
        if(event.userId != current_userId ):
            event.color = 'red'
    print ('current_userId :' + str(current_userId))  
    return render_template('/main/services.jinja2', saved_events=saved_events, 
        current_userId = current_userId,
        user_email=loggedin_user.user_email,
        is_admin=loggedin_user.is_admin)
"""        
  
@main_bp.route("/api/services/insert",methods=["POST","GET"])
@access_required
def insert():
    users_db.connect(reuse_if_open=True)
    if request.method == 'POST':
        req_json = request.get_json()
        uid = req_json['uid']
        row = req_json['row']
        user_id = req_json['userId']
        print('event userId foregnkey is : '+ str(user_id))
        title = req_json['title']
        start = req_json['start']
        end = req_json['end']
        color = req_json['color']
        Event.create(uid=uid,userId=user_id, row=row, title=title,start=start,end=end, color=color)
        users_db.close()
        msg = 'Record added successfully' 
    return jsonify(msg)
  
@main_bp.route("/api/services/update",methods=["POST","GET"])
@access_required
def update():
    users_db.connect(reuse_if_open=True)
    if request.method == 'POST':
        uid = request.form['uid']
        userId = current_user.id
        title = request.form['label']
        start = request.form['start']
        end = request.form['end']
        event = Event.update(uid=uid,userId=userId, title=title,start=start,end=end).where(Event.uid == uid).execute()       
        users_db.close()
        msg = 'Record updated successfully' 
    return jsonify(msg)    
  
@main_bp.route("/api/services/delete",methods=["POST","GET"])
@access_required
def ajax_delete():
    users_db.connect(reuse_if_open=True)
    if request.method == 'POST':
        req_json = request.get_json()
        ids = req_json['numList']
        print(f'To delete ids{str(ids[0])}')
        num_of_rows = Event.delete().where((Event.id >= ids[0]) & (Event.id<=ids[len(ids)-1])).execute()
        users_db.close()
        msg = 'Record deleted successfully' 
    return jsonify(msg)

