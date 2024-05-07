from flask import jsonify, request
from services.authenticationService import UserService
from . import auth_bp

@auth_bp.route('/update-user', methods=['PUT'])
def update_user():
    data = request.get_json()
    name = data["name"]
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
    
    if not email:
        return jsonify({'error': 'Email is required'}), 400
    
    UserService().updateUser(name, email, age, status, sex, orientation, body_type, drinks, education, ethnicity, height, income, job, last_online, location, pets, religion, sign, smokes, speaks, essay0,offspring, diet, drugs)
    
    return jsonify({'message': 'User updated successfully'}), 200  

@auth_bp.route('/delete-user', methods=['DELETE'])
def delete_user():
    data = request.get_json()
    email = data.get('email')
    
    if not email:
        return jsonify({'error': 'Email is required'}), 400
    
    UserService().deleteUser(email)
    
    return jsonify({'message': 'User deleted successfully'}), 200
