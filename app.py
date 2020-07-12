import os, aws_controller
from flask import Flask, render_template, url_for, redirect, jsonify, request, Response
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

@app.route("/dbread", methods = ["GET"])
def getMessages():
	item = aws_controller.getMessages()
	return item

@app.route("/dbpost", methods = ["POST"])
def writeMessage():
	print(jsonify(request.json))
	item = aws_controller.postMessage()
	return Response("{'status':'success'}", status=200, mimetype='application/json')

if __name__ == "__main__":
	app.run(host="0.0.0.0", port="80")
