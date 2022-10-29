from flask import Blueprint
from flask_cors import CORS

auth_bp = Blueprint('auth_bp', __name__)
#cors = CORS(auth_bp, resources={r"/api/*/*": {"origins": "*"}})

from . import views
