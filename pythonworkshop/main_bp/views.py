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
import uuid

def access_required(f):
    @wraps(f)
    def decorated_function(*args, **kwargs):
        auth_header = request.headers.get('Authorization')
        token = auth_header.split(" ")[1] if auth_header is not None else ''
        access_token_check = User.check_access_token(token) #access_token_check type is boolean or string
        if access_token_check == 'expiredSignatureError':
            return jsonify('access token expired')
        elif access_token_check == False:
            return jsonify('acces token is wrong')
        elif access_token_check == True:    
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

rooms_init = [
     {"title":"Møterom stort"},
     {"title":"Møterom lite"},
     {"title":"Møterom 214"}, 
     {"title":"Møterom 210" }, 
     {"title":"Aktivitets plan"}]

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

@main_bp.route("/api/services/rooms", methods= ['GET'])
@access_required
def index_rooms():
        users_db.connect(reuse_if_open=True)
        rooms = Room.select().order_by(Room.row.asc())
        if not rooms.exists():
            with users_db.atomic():
                Room.insert_many(rooms_init).execute()
        users_db.close()
        if rooms.exists():
            print(f'main_bp rooms {rooms}')
        return jsonify({'rooms':list( rooms.dicts())})

@main_bp.route("/api/services/insertroom",methods=["POST","GET"])
@access_required
def insertroom():
    users_db.connect(reuse_if_open=True)
    if request.method == 'POST':
        req_json = request.get_json()
        title = req_json['title']
        Room.create(title=title)
        new_rooms = Room.select().dicts()
        users_db.close()
        msg = 'Room added successfully' 
    return jsonify({'mod_rooms': list(new_rooms)})

@main_bp.route("/api/services/deleteroom",methods=["POST","GET"])
@access_required
def deleteroom():
    users_db.connect(reuse_if_open=True)
    if request.method == 'POST':
        req_json = request.get_json()
        row = req_json['row']
        title = req_json['title']
        num_of_rows = Event.delete().where((Event.rowname == title)).execute()
        Room.delete().where(Room.title==title).execute()
        new_rooms = Room.select().dicts()
        users_db.close()
        msg = 'Room deleted successfully' 
    return jsonify({'mod_rooms': list(new_rooms)})    

@main_bp.route("/api/services/updaterooms",methods=["POST","GET"])
@access_required
def updaterooms():
    users_db.connect(reuse_if_open=True)
    if request.method == 'POST':
        req_rooms = request.get_json()
        db_rooms = Room.select()
        for index,db_room in enumerate(db_rooms):
                db_room.title = req_rooms[index]
                print(f'auth_bp updatetrooms index: {index}')
                print(f'auth_bp updatetrooms row and title: {db_room.row, db_room.title}')  
                db_room.save()
        new_rooms = Room.select().dicts()        
        users_db.close()
        msg = 'Rooms updated successfully' 
    return jsonify({'mod_rooms': list(new_rooms)})                       
  
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
       
  
@main_bp.route("/api/services/insert",methods=["POST","GET"])
@access_required
def insert():
    users_db.connect(reuse_if_open=True)
    if request.method == 'POST':
        req_json = request.get_json()
        uid = req_json['uid']
        rowname = req_json['rowname']
        user_id = req_json['userId']
        print('event userId foregnkey is : '+ str(user_id))
        title = req_json['title']
        start = req_json['start']
        end = req_json['end']
        color = req_json['color']
        Event.create(uid=uid,userId=user_id, rowname=rowname, title=title,start=start,end=end, color=color)
        users_db.close()
        msg = 'Record added successfully' 
    return jsonify(msg)
  
@main_bp.route("/api/services/update",methods=["POST","GET"])
@access_required
def update():
    users_db.connect(reuse_if_open=True)
    if request.method == 'POST':
        req_json = request.get_json()
        uid = req_json['uid']
        userId = req_json['userId']
        title = req_json['title']
        start = req_json['start']
        end = req_json['end']
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
        if ids is not None:
            with users_db.atomic():
                for todelid in ids:
                    print(f'To delete id{str(id)}')
                    Event.delete().where(Event.id == todelid).execute()
        users_db.close()
        msg = 'Record/s deleted successfully' 
    return jsonify(msg)

@main_bp.route('/api/services/change_email', methods=['GET', 'POST'])
@access_required
def change_email_request():
    users_db.connect(reuse_if_open=True)
    if request.method == 'POST':
        req_json = request.get_json()
        userId = req_json['userId']
        user = User.select.where(User.id==userId)
        if current_user.verify_password(form.password.data):
            user = User.select.where(User.id==userId)
            new_email = form.email.data.lower()
            token = current_user.generate_email_change_token(new_email)
            send_email(new_email, 'Confirm your email address',
                       'auth/email/change_email',
                       user=current_user, token=token)
            flash('En e-post med instruksjoner for å bekrefte din nye e-post adressen er sendt til deg.')
            return redirect(url_for('auth_bp.login'))
        else:
            print('Invalid email or password.')
            flash('Ugyldig epost')
    users_db.close()        
    return render_template("auth/email_reset_request.jinja2", form=form)


@main_bp.route('/api/services/change_email/<token>')
@access_required
def change_email(token):
    if current_user.change_email(token):
        flash('E-postadressen din er oppdatert')
    else:
        print('Ugyldig forespørsel.')
    return redirect(url_for('main_bp.contact_form')) 

@main_bp.route('/api/services/changepass', methods=['GET', 'POST'])
@access_required
def change_pass_request():
    users_db.connect(reuse_if_open=True)
    if request.method == 'POST':
        req_json = request.get_json()
        user = User.get(User.user_email==form.email.data.lower())
        if user:
            token = user.generate_reset_token()
            send_email(user.user_email, 'Reset Your Password',
                       'auth/email/reset_password',
                       user=user, token=token)
        return redirect(url_for('auth_bp.login_form'))
    return render_template('auth/pass_reset_request.jinja2', pass_res_req_form=form)


@main_bp.route('/api/auth/changepass/<token>', methods=['GET', 'POST'])
@access_required
def change_pass(token):
    if request.method == 'POST':
        req_json = request.get_json()
        if User.reset_password(token, form.password.data):
            flash('Passordet ditt er oppdatert')
            return redirect(url_for('auth_bp.login_form'))
        else:
            return redirect(url_for('auth_bp.password_reset_request'))
    return render_template('auth/pass_reset.jinja2', pass_reset_form=form) 

