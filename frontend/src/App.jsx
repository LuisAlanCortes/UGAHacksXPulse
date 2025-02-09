import { useEffect, useState } from "react";
import axios from 'axios';
import EventForm from "./components/EventForm";
import GoogleMap from "./components/GoogleMap";
import Sidebar from "./components/Sidebar";
import BottomNav from "./components/BottomNav";

const App = () => {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    // Fetch events from Flask API
    fetch("http://127.0.0.1:5000/api/events")
      .then((response) => response.json())
      .then((data) => setEvents(data));
  }, []);

    // Function to center map on user's location
  const handleExplore = () => {
    console.log("Explore button clicked! Centering map...");
    // You can implement logic here to move the map view
  };

  // Function to open the Add Event form (to be implemented)
  const handleAddEvent = () => {
    console.log("Add event clicked! Opening event form...");
    // Implement logic to show an add event form
  };

  const updateEvent = async (eventId, updatedEventData) => {
    try {
      const response = await axios.put(`http://127.0.0.1:5000/edit_event/${eventId}`, updatedEventData);
      console.log('Event updated successfully:', response.data);
    } catch (error) {
      console.error('There was an error updating the event:', error);
    }
  };

  return (
    <div>
      <Sidebar events={events} />
      <GoogleMap events={events} />
      <BottomNav onExplore={handleExplore} onAddEvent={handleAddEvent} />
      <EventForm />
    </div>
  );
};

export default App;