from flask import Flask, request, jsonify
from flask_sqlalchemy import SQLAlchemy
from flask_cors import CORS
from dotenv import load_dotenv
import os

load_dotenv()  # Load environment variables from .env file

app = Flask(__name__)
CORS(app)

app.config["SQLALCHEMY_DATABASE_URI"] = os.getenv("DATABASE_URL")
app.config["SQLALCHEMY_TRACK_MODIFICATIONS"] = False
db = SQLAlchemy(app)

class Event(db.Model): # Init database 
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(100), nullable=False)
    lat = db.Column(db.Float, nullable=False)
    lng = db.Column(db.Float, nullable=False)
    def __repr__(self):
        return f"<Event {self.name}>"

@app.route("/add_event", methods=["POST"])
def add_event():
    data = request.json
    new_event = Event(name=data["name"], lat=data["lat"], lng=data["lng"])
    db.session.add(new_event)
    db.session.commit()
    return jsonify({"message": "Event Added!", "event": data}), 201

@app.route("/events", methods=["GET"])
def get_events():
    events = Event.query.all()
    event_list = [{"id": e.id, "name": e.name, "lat": e.lat, "lng": e.lng} for e in events]
    return jsonify(event_list)



if __name__ == "__main__":
    app.run(debug=True)