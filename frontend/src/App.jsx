import { useState, useEffect } from "react";
import axios from "axios";
import EventForm from "./components/EventForm";
import GoogleMapComponent from "./components/GoogleMapComponent";
import Sidebar from "./components/Sidebar";
import BottomNav from "./components/BottomNav";
import Modal from "./components/Modal";

const App = () => {
  const [events, setEvents] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedLat, setSelectedLat] = useState(null);
  const [selectedLng, setSelectedLng] = useState(null);

  useEffect(() => {
    fetch("http://127.0.0.1:5000/api/events")
      .then((response) => response.json())
      .then((data) => setEvents(data));
  }, []);

  const handleExplore = () => {
    console.log("Explore button clicked! Centering map...");
  };

  const handleAddEvent = () => {
    if (selectedLat && selectedLng) {
      setIsModalOpen(true);
    } else {
      alert("Please select a location on the map.");
    }
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const handleEventSubmit = (eventData) => {
    // Add the event to the backend first
    fetch("http://127.0.0.1:5000/api/events", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(eventData),
    })
      .then((response) => response.json())
      .then((data) => {
        setEvents((prevEvents) => [...prevEvents, data]);
        setIsModalOpen(false); 
      });
  };

  return (
    <div>
      <Sidebar events={events} />
      <GoogleMapComponent
        setLat={setSelectedLat}
        setLng={setSelectedLng}
        events={events}
      />
      <BottomNav onExplore={handleExplore} onAddEvent={handleAddEvent} />
      <Modal isOpen={isModalOpen} onClose={closeModal}>
        <h2 className="text-lg font-bold mb-4">Add New Event</h2>
        <EventForm
          lat={selectedLat}
          lng={selectedLng}
          onSubmit={handleEventSubmit}
        />
      </Modal>
    </div>
  );
};

export default App;
