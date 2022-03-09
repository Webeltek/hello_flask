import os
import sys
from pythonworkshop import create_app
from dotenv import load_dotenv

dotenv_path = os.path.join(os.path.dirname(__file__), '.env')
if os.path.exists(dotenv_path):
    print('dotenv path exists')
    load_dotenv(dotenv_path)

print(sys.prefix)
print(os.getenv('FLASK_CONFIG'))
app = create_app('development')

if __name__== "__main__":
      app.run()

