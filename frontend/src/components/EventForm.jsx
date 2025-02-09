import { useState } from "react";

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
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Event Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <input
        type="text"
        placeholder="Event Detail"
        value={detail}
        onChange={(e) => setDetail(e.target.value)}
      />
      <input
        type="number"
        placeholder="Latitude"
        value={lat}
        onChange={(e) => setLat(e.target.value)}
      />
      <input
        type="number"
        placeholder="Longitude"
        value={lng}
        onChange={(e) => setLng(e.target.value)}
      />
      <button type="submit">Add Event</button>
    </form>
  );
};

export default EventForm;
