from flask import Flask
from flask_sqlalchemy import SQLAlchemy
import secrets


app = Flask(__name__)
app.config[
    "SQLALCHEMY_DATABASE_URI"
] = "mysql+pymysql://root:roottoor@localhost:3306/church"
app.config["SECRET_KEY"] = secrets.token_urlsafe(16)
db = SQLAlchemy(app)
