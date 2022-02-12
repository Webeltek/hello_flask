#!/usr/bin/env python3
# -*- coding: utf-8 -*-

from flask import Flask, render_template, request

app = Flask(__name__,
            static_url_path='/static',
            static_folder='static',
            template_folder='templates')

@app.route("/")
def hello_world():
    return render_template('html/basic.html')

@app.route("/form")
def test_form():
    return render_template('html/form.html')

@app.route("/postit", methods = ['POST'])
def test_form_post():
    data = request.form
    print(data)
    return 'OK, I got your data!'

@app.route("/fullform", methods = ['GET','POST'])
def test_fullform():
    if request.method == 'GET':
        return render_template('html/fullform.html')
    elif request.method == 'POST':
        print(request.form)
        return 'OK, I got your data this time too!!!'

if __name__ == "__main__":
    app.run()
