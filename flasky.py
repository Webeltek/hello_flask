import os
import sys
from pythonworkshop import create_app

app = create_app(os.getenv('FLASK_CONFIG'))

if __name__== "__main__":
      app.run()

