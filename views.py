from flask import Blueprint, render_template, request, url_for, redirect, jsonify
from generator import ImageGenerator
import threading
import time

from dotenv import load_dotenv
from os import getenv
from uuid import uuid4

core = Blueprint('core', __name__, template_folder='templates')

jobs = {}

@core.route("/")
def index():
    return render_template('index.html')


@core.route("/main")
def main():
    return render_template('main.html')


@core.route("/burn", methods=["GET", "POST"])
def burn():
        
    if request.method == "GET":        
        load_dotenv()
        API_KEY = getenv("API_KEY")
        image_id = str(uuid4())
        local_url = f"assets/{image_id}.jpg"
        
        jobs[image_id] = {
            "status": "processing",
            "local_url": local_url
        }
    
        generator = ImageGenerator(API_KEY)
        generator.add_items(request.args.values())
                
        def generate_image(local_url, job_id, test):
            if test:
                print("HERE")
                jobs[job_id]["local_url"] = "assets/test_image.jpg"
            else:
                generator.generate_image(local_url)
            jobs[job_id]["status"] = "done"

        test=False
        if generator.items[0] == "queen":
            test=True

        thread = threading.Thread(target=generate_image, args=(local_url, image_id, test))
        thread.start()
        
        return redirect(url_for("core.loading", job_id=image_id))    
    
    return render_template('burn.html')


@core.route("/loading/<job_id>")
def loading(job_id):
    return render_template("loading.html", job_id=job_id)


@core.route("/check_status/<job_id>")
def check_status(job_id):
    job = jobs.get(job_id)
    if job and job["status"] == "done":
        return jsonify({"ready": True, "url": url_for("core.burn_result", job_id=job_id)})
    return jsonify({"ready": False})


@core.route("/burn_result/<job_id>")
def burn_result(job_id):
    if jobs[job_id] and jobs[job_id]["status"] == "done":
        return render_template("burn.html", image_url = jobs[job_id]["local_url"])
    return "Nr", 404