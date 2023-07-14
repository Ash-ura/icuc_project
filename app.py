from flask import Flask
from flask_sqlalchemy import SQLAlchemy
import secrets
import subprocess



app = Flask(__name__)
app.config[
    "SQLALCHEMY_DATABASE_URI"
] = "cockroachdb://senam:7qafKz1seSNjX0QHKINrOA@kind-ogre-8986.8nj.cockroachlabs.cloud:26257/icuc_database?sslmode=verify-full"
app.config["SECRET_KEY"] = secrets.token_urlsafe(16)
db = SQLAlchemy(app)
