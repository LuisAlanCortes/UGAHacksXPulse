import { useState, useEffect } from "react";
import axios from "axios";
import EventForm from "./components/EventForm";
import GoogleMap from "./components/GoogleMapComponent";
import Sidebar from "./components/Sidebar";
import BottomNav from "./components/BottomNav";
import Modal from "./components/Modal"; // Import modal component

const App = () => {
  const [events, setEvents] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false); // Modal state
  const [selectedLat, setSelectedLat] = useState(null); // Selected lat
  const [selectedLng, setSelectedLng] = useState(null); // Selected lng

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
      setIsModalOpen(true); // Open modal
    } else {
      alert("Please select a location on the map.");
    }
  };

  const closeModal = () => {
    setIsModalOpen(false); // Close modal
  };

  const handleEventSubmit = (eventData) => {
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
        setIsModalOpen(false); // Close modal after event is added
      });
  };

  return (
    <div>
      <Sidebar events={events} />
      <GoogleMap
        setLat={setSelectedLat}
        setLng={setSelectedLng}
        events={events}
      />
      <BottomNav onExplore={handleExplore} onAddEvent={handleAddEvent} />

      {/* Modal for event form */}
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
