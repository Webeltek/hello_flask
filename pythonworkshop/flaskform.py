#!/usr/bin/env python3
# -*- coding: utf-8 -*-

from flask import Flask, render_template, request
from wtforms import Form, StringField, DateTimeField, DecimalField, validators, SubmitField, widgets

class MyForm(Form):
    name = StringField(label='Name', validators=[validators.Length(min=4, max=25)])
    timeofbirth = DateTimeField(label='Time of birth',format='%d/%m/%Y %H:%M:%S', widget=widgets.DateTimeInput())
    height = DecimalField(label='Height',places=2)
    submitField = SubmitField('Submit')

app = Flask(__name__,
            static_url_path='/static',
            static_folder='static',
            template_folder='templates')


@app.route("/", methods = ['GET','POST'])
def test_fullform():
    myform = MyForm(request.form)
    if request.method == 'POST' and myform.validate():
        print(F'I got name is {myform.name}')
        return F'I got your autodata!!!'
    print(myform)
    return render_template('html/formtemplate6.html',form=myform) 

if __name__ == "__main__":
    app.run()
