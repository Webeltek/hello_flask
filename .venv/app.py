from flask import Flask
app = Flask(__name__)

@app.route("/")
def home():
    a = "thing"
    b = "second thing23221654654"
    return "Hello, Flask, and more stuff!"