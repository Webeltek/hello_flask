#!/usr/bin/env python3
#-*- coding: utf-8 -*-

#import flask

from flask import Flask, request
import jinja2

'''
A simple proof of concept. 
Flask server using a 2 button Jinja2 template that has two bootstrap buttons.
Pushing the buttons changes the color of the top container field. 
'''


app = Flask(__name__)

templateLoader = jinja2.FileSystemLoader(searchpath='./templates')
tempalteEnv = jinja2.Environment(loader=templateLoader)

@app.route('/', defaults={ 'form': 'login' })
@app.route('/<form>')
def index_data(form):
    TEMPLATE_FILE = '/forms/' + str(form) + '.jinja2' # Get form supplied to function
    myjinja = tempalteEnv.get_template(TEMPLATE_FILE) # load template
    return myjinja.render() # render template

app.run(host='127.0.0.1', port=8083)


