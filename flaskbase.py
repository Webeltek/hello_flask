import os
import sys
from pythonworkshop import create_app
from dotenv import load_dotenv
from pythonworkshop.models import create_table

dotenv_path = os.path.join(os.path.dirname(__file__), '.env')
if os.path.exists(dotenv_path):
    print('dotenv path exists')
    load_dotenv(dotenv_path)

app = create_app(os.getenv('FLASK_CONFIG'))

if __name__== "__main__":
      create_table()
      app.run()

