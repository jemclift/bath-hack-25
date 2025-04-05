from flask import Flask, jsonify, request
from generator import ImageGenerator

app = Flask(__name__)

@app.route('/burn')
def image_response():
    
    question = request.args.get('q')