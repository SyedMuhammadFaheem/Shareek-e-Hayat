from flask import Flask
from config import settings
app = Flask(__name__)

app.config.from_object(settings.Config)

from flask_pymongo import PyMongo
mongo = PyMongo(app)

from controllers import auth_bp

if __name__ == '__main__':
    app.register_blueprint(auth_bp)
    app.run(port=5001)
