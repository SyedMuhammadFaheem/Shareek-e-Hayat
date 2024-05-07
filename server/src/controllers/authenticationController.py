from . import auth_bp
from flask import request, jsonify
from services.authenticationService import UserService


@auth_bp.route("/signup", methods=["POST"])
def signup():
    data = request.get_json()
    name = data["name"]
    password = data["password"]
    email = data["email"]
    age = data["age"]
    status = data["status"]
    sex = data["sex"]
    orientation = data["orientation"]
    body_type = data["body_type"]
    drinks = data["drinks"]
    education = data["education"]
    ethnicity = data["ethnicity"]
    height = data["height"]
    income = data["income"]
    job = data["job"]
    last_online = data["last_online"]
    location = data["location"]
    pets = data["pets"]
    religion = data["religion"]
    sign = data["sign"]
    smokes = data["smokes"]
    speaks = data["speaks"]
    essay0 = data["essay0"]
    offspring = data["offspring"]
    diet = data["diet"]
    drugs = data["drugs"]

    user_id = UserService().createUser(name, password, email, age, status, sex, orientation, body_type, drinks, education, ethnicity, height, income, job, last_online, location, pets, religion, sign, smokes, speaks, essay0,offspring, diet, drugs)
    return jsonify({"message": "User created successfully", "user_id": str(user_id)})


@auth_bp.route("/login", methods=["POST"])
def login():
    data = request.get_json()
    email = data["email"]
    password = data["password"]

    user = UserService().findUser(email, password)
    if user:
        return jsonify({"message": "Login successful"})
    else:
        return jsonify({"message": "Invalid credentials"}), 401


@auth_bp.route("/", methods=["GET"])
def get():
    return jsonify({"message": "Hello World"})
