from flask import Flask, request, jsonify # Base flask
from flask_sqlalchemy import SQLAlchemy # SQL support
from flask_cors import CORS 
from dotenv import load_dotenv # To hide database url in .env
import os
from flask_migrate import Migrate # To migrate table if changes are needed

load_dotenv()  # Load environment variables from .env file

app = Flask(__name__)
CORS(app, resources={r"/api/*": {"origins": "*"}})

app.config["SQLALCHEMY_DATABASE_URI"] = os.getenv("DATABASE_URL")
app.config["SQLALCHEMY_TRACK_MODIFICATIONS"] = False
db = SQLAlchemy(app) # Init Database
migrate = Migrate(app, db)  # Enable migrations

class Event(db.Model): # Init database 
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(100), nullable=False)
    detail = db.Column(db.String(255), nullable=False)
    lat = db.Column(db.Float, nullable=False)
    lng = db.Column(db.Float, nullable=False)
    def __repr__(self):
        return f"<Event {self.name}>"

@app.route("/api/events", methods=["POST"])
def add_event():
    data = request.json
    new_event = Event(name=data["name"], detail=data["detail"], lat=data["lat"], lng=data["lng"])
    db.session.add(new_event)
    db.session.commit()
    return jsonify({"message": "Event Added!", "event": data}), 201

@app.route("/api/events", methods=["GET"])
def get_events():
    events = Event.query.all()
    event_list = [{"id": e.id, "name": e.name, "detail": e.detail, "lat": e.lat, "lng": e.lng} for e in events]
    return jsonify(event_list)

@app.route("/edit_event/<int:event_id>", methods=["PUT"])
def edit_event(event_id):
    event = Event.query.get(event_id)
    
    if not event:
        return jsonify({"message": "Event not found!"}), 404
    
    data = request.json
    
    event.name = data.get("name", event.name)
    event.detail = data.get("detail", event.detail)
    event.lat = data.get("lat", event.lat)
    event.lng = data.get("lng", event.lng)
    
    db.session.commit()
    
    return jsonify({"message": "Event Updated!", "event": data}), 200


if __name__ == "__main__":
    app.run(debug=True)