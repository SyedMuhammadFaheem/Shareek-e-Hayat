from models.users import User

class UserService:
    def createUser(self, name, password, email, age, status, sex, orientation, body_type, drinks, education, ethnicity, height, income, job, last_online, location, pets, religion, sign, smokes, speaks, essay0,offspring, diet, drugs):
        return User().createUser(name, password, email, age, status, sex, orientation, body_type, drinks, education, ethnicity, height, income, job, last_online, location, pets, religion, sign, smokes, speaks, essay0,offspring, diet, drugs)

    def findUser(self, email, password):
        return User().findUser(email, password)

    def updateUser(self,name, email, age, status, sex, orientation, body_type, drinks, education, ethnicity, height, income, job, last_online, location, pets, religion, sign, smokes, speaks, essay0,offspring, diet, drugs):
        return User().updateUser(name, email, age, status, sex, orientation, body_type, drinks, education, ethnicity, height, income, job, last_online, location, pets, religion, sign, smokes, speaks, essay0,offspring, diet, drugs)

    def deleteUser(self, email):
        return User().deleteUser(email) 
       
    def findMatchedUsers(self,id, curr):
        print(curr)
        return User().findMatchedUsers(id, curr)    
