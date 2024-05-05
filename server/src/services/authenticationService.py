from models.users import User

class UserService:
    def createUser(self, username, password, email):
        return User().createUser(username, password, email)

    def findUser(self, username, password):
        return User().findUser(username, password)

    def updateUser(self,email, birth_date, gender, height, weight, interests,password,username):
        return User().updateUser(email, birth_date, gender, height, weight, interests,password,username)

    def deleteUser(self, email):
        return User().deleteUser(email)    
