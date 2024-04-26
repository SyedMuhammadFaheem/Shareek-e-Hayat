from models.users import User

class UserService:
    def createUser(self, username, password, email):
        return User().createUser(username, password, email)

    def findUser(self, username, password):
        return User().findUser(username, password)
