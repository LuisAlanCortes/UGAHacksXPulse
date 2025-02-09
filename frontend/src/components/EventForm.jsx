import React, { useState } from "react";
import GoogleMap from "./GoogleMap";
import GoogleMapComponent from "./GoogleMap";

const EventForm = () => {
  const [name, setName] = useState("");
  const [detail, setDetail] = useState("");
  const [lat, setLat] = useState("");
  const [lng, setLng] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    const eventData = {
      name,
      detail,
      lat: parseFloat(lat),
      lng: parseFloat(lng),
    };

    fetch("http://127.0.0.1:5000/api/events", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(eventData),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("Event added:", data);
        // Reset form
        setName("");
        setDetail("");
        setLat("");
        setLng("");
      });
  };

  return (
    <div>
      <h2>Create Event</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Event Name:</label>
          <input
            type="text"
            placeholder="Event Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div>
          <label>Event Detail:</label>
          <input
            type="text"
            placeholder="Event Detail"
            value={detail}
            onChange={(e) => setDetail(e.target.value)}
          />
        </div>
        <div>
          <label>Latitude:</label>
          <input
            type="number"
            placeholder="Latitude"
            value={lat}
            readOnly // Make it read-only so the user can't manually change it
          />
        </div>
        <div>
          <label>Longitude:</label>
          <input
            type="number"
            placeholder="Longitude"
            value={lng}
            readOnly // Make it read-only so the user can't manually change it
          />
        </div>
        <button type="submit">Add Event</button>
      </form>
    </div>
  );
};

export default EventForm;
