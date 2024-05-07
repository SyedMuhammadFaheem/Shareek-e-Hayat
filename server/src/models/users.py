from app import mongo
from flask import jsonify

class User:
    def __init__(self):
        if "users" not in mongo.db.list_collection_names():
            mongo.db.create_collection("users")

    def createUser(
        self,
        name,
        password,
        email,
        age,
        status,
        sex,
        orientation,
        body_type,
        drinks,
        education,
        ethnicity,
        height,
        income,
        job,
        last_online,
        location,
        pets,
        religion,
        sign,
        smokes,
        speaks,
        essay0,
        offspring,
        diet,
        drugs,
    ):
        user_id = (
            mongo.db.get_collection("users")
            .insert_one(
                {
                    "name": name,
                    "Password": password,
                    "Email": email,
                    "age": age,
                    "status": status,
                    "sex": sex,
                    "orientation": orientation,
                    "body_type": body_type,
                    "drinks": drinks,
                    "education": education,
                    "ethnicity": ethnicity,
                    "height": height,
                    "income": income,
                    "job": job,
                    "last_online": last_online,
                    "location": location,
                    "pets": pets,
                    "religion": religion,
                    "sign": sign,
                    "smokes": smokes,
                    "speaks": speaks,
                    "essay0": essay0,
                    "offspring": offspring,
                    "diet": diet,
                    "drugs": drugs,
                }
            )
            .inserted_id
        )
        return user_id

    def findUser(self, email, password):
        user = mongo.db.get_collection("users").find_one(
            {"Email": email, "Password": password}
        )
        if user:
            user={"ID": user.get("ID", "")}
            return user
        user = mongo.db.get_collection("users").find_one(
            {"Email": email, "Password": int(password)}
        )
        user={"ID": user.get("ID", "")}
        return jsonify({'ID':user})
    
    def findMatchedUsers(self, id, curr):
        users=[]
        for i in id:
            if i!=curr:
                users.append(mongo.db.get_collection("users").find_one(
                    {"ID": i}
                ))
        serializedUsers = []
        for user in users:
            serialized_user = {
                "ID": user.get("ID", ""),
                "name": user.get("name", ""),
                "Password": user.get("Password", ""),
                "Email": user.get("Email", ""),
                "age": user.get("age", ""),
                "status": user.get("status", ""),
                "sex": user.get("sex", ""),
                "orientation": user.get("orientation", ""),
                "body_type": user.get("body_type", ""),
                "drinks": user.get("drinks", ""),
                "education": user.get("education", ""),
                "ethnicity": user.get("ethnicity", ""),
                "height": user.get("height", ""),
                "income": user.get("income", ""),
                "job": user.get("job", ""),
                "last_online": user.get("last_online", ""),
                "location": user.get("location", ""),
                "pets": user.get("pets", ""),
                "religion": user.get("religion", ""),
                "sign": user.get("sign", ""),
                "smokes": user.get("smokes", ""),
                "speaks": user.get("speaks", ""),
                "essay0": user.get("essay0", ""),
                "offspring": user.get("offspring", ""),
                "diet": user.get("diet", ""),
                "drugs": user.get("drugs", ""),
            }
            serializedUsers.append(serialized_user)

    
        return jsonify({'users': serializedUsers})

    def updateUser(
        self,
        name,
        email,
        age,
        status,
        sex,
        orientation,
        body_type,
        drinks,
        education,
        ethnicity,
        height,
        income,
        job,
        last_online,
        location,
        pets,
        religion,
        sign,
        smokes,
        speaks,
        essay0,
        offspring,
        diet,
        drugs,
    ):
        update_query = {"Email": email}
        new_values = {
            "$set": {
                "name": name,
                "Email": email,
                "age": age,
                "status": status,
                "sex": sex,
                "orientation": orientation,
                "body_type": body_type,
                "drinks": drinks,
                "education": education,
                "ethnicity": ethnicity,
                "height": height,
                "income": income,
                "job": job,
                "last_online": last_online,
                "location": location,
                "pets": pets,
                "religion": religion,
                "sign": sign,
                "smokes": smokes,
                "speaks": speaks,
                "essay0": essay0,
                "offspring": offspring,
                "diet": diet,
                "drugs": drugs,
            }
        }
        mongo.db.get_collection("users").update_one(update_query, new_values)

    def deleteUser(self, email):
        delete_query = {"Email": email}
        mongo.db.get_collection("users").delete_one(delete_query)

