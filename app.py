from flask import Flask
from flask_sqlalchemy import SQLAlchemy
import secrets
import subprocess



app = Flask(__name__)
app.config[
    "SQLALCHEMY_DATABASE_URI"
] = "cockroachdb://senam:qWCk6zCqVZlnvAXCu_Z1RQ@river-catfish-9550.6wr.cockroachlabs.cloud:26257/defaultdb?sslmode=verify-full"
app.config["SECRET_KEY"] = secrets.token_urlsafe(16)
db = SQLAlchemy(app)
