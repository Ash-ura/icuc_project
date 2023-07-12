from flask import Flask
from flask_sqlalchemy import SQLAlchemy
import secrets


app = Flask(__name__)
app.config[
    "SQLALCHEMY_DATABASE_URI"
] = "mysql+pymysql://gxxv4os024sqljpnou7a:pscale_pw_S5gSv9BbDQJLOaUg8VCzmCzC5rumzO6jANtlmxMh4Ry@localhost:3306/church"
app.config["SECRET_KEY"] = secrets.token_urlsafe(16)
db = SQLAlchemy(app)
