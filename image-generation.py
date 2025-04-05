import openai
import os
from dotenv import load_dotenv
import requests
import base64
from PIL import Image
from io import BytesIO

class ImageGenerator:
    
    # constructor
    def __init__(self, API_KEY, model="dalle-e-2"):
        self.items = []
        self.client = openai.OpenAI(
           api_key=API_KEY,
            base_url="https://hack.funandprofit.ai/api/providers/openai/v1"
        )
        self.model = model
        
    # add new item to existing list of items
    def add_item(self, item):
        self.items.append(item)
        
    # function to generate the image
    def generate_image(self):
        
        prompt = ", ".join(self.items)
        response = self.client.images.generate(
            model="dall-e-2",
            prompt=prompt,
        )
        return response.data[0].url    


    def save_image(self, URL):
        response = requests.get(URL)
        img = Image.open(BytesIO(response.content))
        img.save("test.png")
        

if __name__ == "__main__":
  
    load_dotenv()
    API_KEY = os.getenv("API_KEY")

    image_generator = ImageGenerator(API_KEY)
    
    for i in range(3):
        answer = input("What would you like to generate?: ")
        image_generator.add_item(answer)
        
    image_url = image_generator.generate_image()
    print(image_url)
    image_generator.save_image(image_url)
    
    
