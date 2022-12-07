import os
import sys
from pythonworkshop import create_app
from dotenv import load_dotenv
from pythonworkshop.models import User, users_db
from flask_socketio import SocketIO
from flask_cors import CORS, cross_origin

print(sys.path)

dotenv_path = os.path.join(os.path.dirname(__file__), '.env')
if os.path.exists(dotenv_path):
    print('dotenv path exists')
    load_dotenv(dotenv_path)

app = create_app(os.getenv('FLASK_CONFIG'))
socketio= SocketIO(app, cors_allowed_origins="*")

if __name__== "__main__":
    socketio.run()

