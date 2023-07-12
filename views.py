from flask import jsonify, request
from flask_cors import CORS
from flask_login import (
    LoginManager,
    login_user,
    logout_user,
    login_required,
)
from models import User, Member, Contribution
from app import app


CORS(app)
login_manager = LoginManager(app)
login_manager.login_view = "login"


@login_manager.user_loader
def load_user(user_id):
    return User.query.get(int(user_id))


# Routes
@app.route("/login", methods=["POST"])
def login():
    data = request.json
    username = data["username"]
    password = data["password"]
    user = User.query.filter_by(username=username).first()
    if user and user.password == password:
        login_user(user)
        return jsonify({"message": "Login successful"})

    return jsonify({"message": "Invalid username or password"}), 401


@app.route("/logout", methods=["POST"])
@login_required
def logout():
    logout_user()
    return jsonify({"message": "Logout successful"})


@app.route("/members", methods=["GET"])
def get_members():
    members = Member.query.all()
    return jsonify([member.to_dict() for member in members])


@app.route("/members", methods=["POST"])
def create_member():
    data = request.json
    member = Member(
        firstname=data["firstname"],
        othernames=data["othernames"],
        email=data["email"],
        phone_number=data["phone_number"],
        address=data["address"],
        date_of_birth=data["date_of_birth"],
    )
    member = member.add_instance()
    return jsonify(member.to_dict()), 201


@app.route("/members/<int:member_id>", methods=["PUT"])
def update_member(member_id):
    member = Member.query.get(member_id)
    if not member:
        return jsonify({"message": "Member not found"}), 404

    data = request.json
    member.name = data["firstname"]
    member.othernames = data["othernames"]
    member.email = data["email"]
    member.phone = data["phone_number"]
    member.address = data["address"]
    member.date_of_birth = data["date_of_birth"]
    member = member.add_instance()
    return jsonify(member.to_dict())


@app.route("/members/<int:member_id>", methods=["DELETE"])
def delete_member(member_id):
    member = Member.query.get(member_id)
    if not member:
        return jsonify({"message": "Member not found"}), 404
    member.delete_instance()
    return jsonify({"message": "Member deleted"})


@app.route("/contributions", methods=["POST"])
def create_contribution():
    data = request.json
    member = Member.query.get(data["member_id"])
    if not member:
        return jsonify({"message": "Member not found"}), 404

    contribution = Contribution(
        member=member,
        amount=data["amount"],
        contribution_type=data["contribution_type"],
    )
    contribution = contribution.add_instance()

    return jsonify(contribution.to_dict()), 201


@app.route("/contributions", methods=["GET"])
def get_contributions():
    contributions = Contribution.query.all()
    return jsonify([contribution.to_dict() for contribution in contributions])
