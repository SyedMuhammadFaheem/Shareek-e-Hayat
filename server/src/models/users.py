from app import mongo
class User:
    def __init__(self): 
        if 'users' not in mongo.db.list_collection_names():
            mongo.db.create_collection('users')

    def createUser(self, username, password, email):
        user_id = mongo.db.get_collection('users').insert_one({'username': username, 'password': password, 'email': email}).inserted_id
        return user_id

    def findUser(self, username, password):
        user = mongo.db.get_collection('users').find_one({'username': username, 'password': password})
        return user
