import os, aws_controller
from flask import Flask, render_template, url_for, redirect, jsonify, send_from_directory
import aws_controller
app = Flask(__name__, template_folder = "./src/templates", static_folder = "./src/static")

app.config.update(
				TESTING = True,
				SECRET_KEY = os.urandom(32)
)

@app.route("/home", methods = ["GET"])
def home_page():
				return 'TODO: Home Page'

@app.route('/messages')
def get_items():
				return render_template("messages.html")

@app.route("/", methods = ["GET"])
def home():
				return render_template("index.html")

@app.route("/welcome", methods = ["GET"])
def display():
				return render_template("welcome.html")

@app.route("/database", methods = ["GET"])
def getStuff():
				item = aws_controller.getItems()
				print("Databasing")
				print(item)
				return item

if __name__ == "__main__":
				app.run(host="0.0.0.0", port="80")
