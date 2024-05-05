from app import mongo
from datetime import datetime
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

    def updateUser(self, email, birthDate, gender, height, weight, interests,password,username):
        birth_date = datetime.strptime(birthDate, '%Y-%m-%d')
        update_query = {'email': email}
        new_values = {
            '$set': {
                'birthDate': birth_date,
                'gender': gender,
                'height': height,
                'weight': weight,
                'interests': interests,
                'password':password,
                'username':username
            }
        }
        mongo.db.get_collection('users').update_one(update_query, new_values)

    def deleteUser(self, email):
        delete_query = {'email': email}
        mongo.db.get_collection('users').delete_one(delete_query)    

    # def updateUser(self,name)
