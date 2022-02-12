from flask import render_template, redirect, request, url_for, flash
from flask_login import login_user, logout_user, login_required, \
    current_user
from . import login_bp
from .forms import LoginForm 

@login_bp.route('/login', methods=['GET', 'POST'])
def login():
    form = LoginForm()
    if form.validate_on_submit():
            return redirect(next)
    flash('Invalid email or password.')
    #return render_template('auth/login.html', form=form)
