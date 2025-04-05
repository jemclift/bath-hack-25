from flask import Flask
from creds import *
from views import core

app = Flask(__name__)
app.secret_key = FLASH_SECRET_KEY
app.register_blueprint(core)

if __name__ == "__main__":
    app.run()