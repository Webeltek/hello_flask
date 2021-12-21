from flask import Flask
app = Flask(__name__)

@app.route("/")
def home():
    a = "thing"
    b = "second thing2322165465412313"
    c = "ve3213421341234"
    return "Hello, Flask, and more stuff!"