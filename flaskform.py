#!/usr/bin/env python3
# -*- coding: utf-8 -*-

from flask import Flask, render_template, request
from wtforms import Form, StringField, SubmitField,DecimalField, validators

class MyForm(Form):
    ufoname = StringField(label='Ufoname', validators=[validators.Length(min=4, max=25)])
    decimalfield = DecimalField(label= 'Decimal', validators= [validators.InputRequired('required')])
    submitfield = SubmitField('Submit')

app = Flask(__name__,
        static_url_path= '/static',
        static_folder= 'static',
        template_folder = 'templates')


@app.route("/", methods= ['POST','GET'])
def test_fullform():
        myform = MyForm(request.form)
        if request.method == 'POST' and myform.validate():
            print(F'I got UFO name is {myform.ufoname.data}')
            return F'I got your autodata!!!'
        return render_template('html/formtemplate2.html', form=myform)


if __name__== "__main__":
      app.run()


