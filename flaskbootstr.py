#!/usr/bin/env python3
# -*- coding: utf-8 -*-

from flask import Flask, render_template, request
from wtforms import Form, StringField, SubmitField,DecimalField, validators


app = Flask(__name__,
        static_url_path= '/static',
        static_folder= 'static',
        template_folder = 'templates')


@app.route("/", methods= ['POST','GET'])
def test_bootstr():
        return render_template('html/bootstrprofil.html')


if __name__== "__main__":
      app.run()


