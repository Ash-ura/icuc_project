from flask import Flask
from flask_sqlalchemy import SQLAlchemy
import secrets
import subprocess


CurlUrl = "curl --create-dirs -o $HOME/.postgresql/root.crt 'https://cockroachlabs.cloud/clusters/048c420a-d81c-456e-9286-f9fa4d8ab4c6/cert'"

status, output = subprocess.getstatusoutput(CurlUrl)

app = Flask(__name__)
app.config[
    "SQLALCHEMY_DATABASE_URI"
] = "cockroachdb://senam:qWCk6zCqVZlnvAXCu_Z1RQ@river-catfish-9550.6wr.cockroachlabs.cloud:26257/defaultdb?sslmode=verify-full"
app.config["SECRET_KEY"] = secrets.token_urlsafe(16)
db = SQLAlchemy(app)
