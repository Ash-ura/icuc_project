from flask import Flask
from flask_sqlalchemy import SQLAlchemy
import secrets


app = Flask(__name__)
app.config[
    "SQLALCHEMY_DATABASE_URI"
] = "postgresql://senam:qWCk6zCqVZlnvAXCu_Z1RQ@river-catfish-9550.6wr.cockroachlabs.cloud:26257/defaultdb?sslmode=verify-full"
app.config["SECRET_KEY"] = secrets.token_urlsafe(16)
db = SQLAlchemy(app)
