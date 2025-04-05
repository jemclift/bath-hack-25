import openai
import os
from dotenv import load_dotenv
import requests
import base64
from PIL import Image
from io import BytesIO

class ImageGenerator:
    
    # constructor
    def __init__(self, API_KEY, model="dall-e-3"):
        self.items = []
        self.client = openai.OpenAI(
           api_key=API_KEY,
            base_url="https://hack.funandprofit.ai/api/providers/openai/v1"
        )
        self.model = model
        
    # add new item to existing list of items
    def add_items(self, items):
        for i in items:
            if i != "":
                self.items.append(i)
        
        
    # function to generate the image
    def generate_image(self, location):
        self.items[-1] = "and " + self.items[-1]
        prompt = ", ".join(self.items)
        full_prompt = f"""A pixel-art style scene showing {prompt} all positioned side by side on a plain background. Don't put in any text"""
                
        try:
            response = self.client.images.generate(
                model=self.model,
                prompt=full_prompt,
            )
            self.save_image(response.data[0].url, f"static/{location}")
            return 1
        except Exception as e:
            print(response.data[0].url)
            print("error: ", e)
            return -1


    def save_image(self, image_url, location):
        response = requests.get(image_url)
        img = Image.open(BytesIO(response.content))
        img.save(location)
        

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
    
    
