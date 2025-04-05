from flask import Blueprint, render_template, request

core = Blueprint('core', __name__, template_folder='templates')


@core.route("/")

def index():
    return render_template('index.html')


@core.route("/main")

def main():
    return render_template('main.html')


@core.route("/burn")

def burn():

    print(request.args)

    return render_template('burn.html')