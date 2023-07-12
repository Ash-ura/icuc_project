from flask import Flask
from flask_sqlalchemy import SQLAlchemy
import secrets


app = Flask(__name__)
app.config[
    "SQLALCHEMY_DATABASE_URI"
] = "mysql+pymysql://tvaqgz6f9vzaqu48y24b:pscale_pw_4nbBofhTkL4fc8S98NQTEWZU2hRhp0I7kNIeQ7SAKcF@aws.connect.psdb.cloud/icuc_database"
app.config["SECRET_KEY"] = secrets.token_urlsafe(16)
db = SQLAlchemy(app)
