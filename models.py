from app import db
from flask_login import UserMixin


class InstanceMixin:
    """Mixin to add "add" and "delete" functionality to Models"""

    def add_instance(self):
        self.session = db.session
        self.session.add(self)
        self.session.commit()
        self.session.refresh(self)
        return self

    def delete_instance(self):
        self.session = db.session
        db.session.delete(self)
        self.session.commit()


# Database Models
class User(UserMixin, db.Model, InstanceMixin):
    __tablename__ = 'user'
    id = db.Column(db.Integer, primary_key=True)
    username = db.Column(db.String(100), unique=True, nullable=False)
    password = db.Column(db.String(100), nullable=False)
    role = db.Column(db.String(20), nullable=False)


class Member(db.Model, InstanceMixin):
    __tablename__ = 'member'
    id = db.Column(db.Integer, primary_key=True, autoincrement=True)
    firstname = db.Column(db.String(100), nullable=False)
    othernames = db.Column(db.String(100), nullable=False)
    email = db.Column(db.String(100), nullable=False, unique=True)
    phone_number = db.Column(db.String(20))
    address = db.Column(db.String(200))
    date_of_birth = db.Column(db.Date)

    def to_dict(self):
        return {
            "id": self.id,
            "firstname": self.firstname,
            "othernames": self.othernames,
            "email": self.email,
            "phone_number": self.phone_number,
            "address": self.address,
            "date_of_birth": self.date_of_birth,
        }


class Contribution(db.Model, InstanceMixin):
    __tablename__ = 'contribution'
    id = db.Column(db.Integer, primary_key=True, autoincrement=True)
    member_id = db.Column(db.Integer, db.ForeignKey("member.id"), nullable=False)
    firstname = db.Column(db.String(100), nullable=False)
    othernames = db.Column(db.String(100), nullable=False)
    amount = db.Column(db.Float, nullable=False)
    contribution_type = db.Column(db.String(20), nullable=False)
    timestamp = db.Column(
        db.DateTime, nullable=False, default=db.func.current_timestamp()
    )

    member = db.relationship("Member", backref=db.backref("contributions"))

    def to_dict(self):
        return {
            "id": self.id,
            "member_id": self.member_id,
            "firstname": self.firstname,
            "othernames": self.othernames
            "amount": self.amount,
            "contribution_type": self.contribution_type,
            "timestamp": self.timestamp,
        }
