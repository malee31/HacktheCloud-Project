import os
from flask import Flask, render_template, url_for, redirect
app = Flask(__name__, template_folder = "./src/templates", static_folder = "./src/static")

app.config.update(
	TESTING = True,
	SECRET_KEY = os.urandom(32)
)

@app.route("/home", methods = ["GET"])
@app.route("/", methods = ["GET"])
def home():
	print(__name__)
	return render_template("index.html")

if __name__ == "__main__":
	app.run(host="0.0.0.0", port="80")
