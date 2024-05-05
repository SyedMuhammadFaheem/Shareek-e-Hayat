from flask import jsonify, request
from services.authenticationService import UserService
from . import auth_bp

@auth_bp.route('/update_user', methods=['PUT'])
def update_user():
    data = request.get_json()
    email = data.get('email')
    birth_date = data.get('birthDate')
    gender = data.get('gender')
    height = data.get('height')
    weight = data.get('weight')
    interests = data.get('interests')
    password = data.get('password')
    username = data.get('username')
    
    if not email:
        return jsonify({'error': 'Email is required'}), 400
    
    UserService().updateUser(email, birth_date, gender, height, weight, interests,password,username)
    
    return jsonify({'message': 'User updated successfully'}), 200  

@auth_bp.route('/delete_user', methods=['DELETE'])
def delete_user():
    data = request.get_json()
    email = data.get('email')
    
    if not email:
        return jsonify({'error': 'Email is required'}), 400
    
    UserService().deleteUser(email)
    
    return jsonify({'message': 'User deleted successfully'}), 200
