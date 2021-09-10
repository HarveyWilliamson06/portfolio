from flask import render_template
from app import app

@app.route("/")
def index():
    user = {"username": "Harvey"}
    return render_template('homepage/index.html', title='Homepage', user=user)