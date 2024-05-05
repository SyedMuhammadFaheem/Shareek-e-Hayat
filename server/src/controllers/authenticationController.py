from . import auth_bp
from flask import request, jsonify
from services.authenticationService import UserService


@auth_bp.route('/signup', methods=['POST'])
def signup():
    data = request.get_json()
    print(data)
    username = data['username']
    password = data['password']
    email = data['email']
    
    user_id = UserService().createUser(username, password, email)
    return jsonify({'message': 'User created successfully', 'user_id': str(user_id)})

@auth_bp.route('/login', methods=['POST'])
def login():
    data = request.get_json()
    username = data['username']
    password = data['password']
    
    user = UserService().findUser(username, password)
    if user:
        return jsonify({'message': 'Login successful'})
    else:
        return jsonify({'message': 'Invalid credentials'}), 401


@auth_bp.route('/', methods=['GET'])
def get():
    return jsonify({'message': 'Hello World'})

  