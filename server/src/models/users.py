from app import mongo
from datetime import datetime


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
            return user
        user = mongo.db.get_collection("users").find_one(
            {"Email": email, "Password": int(password)}
        )
        return user

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

