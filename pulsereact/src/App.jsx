import { useEffect, useState } from "react";
import EventForm from "./components/EventForm";
import GoogleMap from "./components/GoogleMap";

const App = () => {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    // Fetch events from Flask API
    fetch("http://127.0.0.1:5000/api/events")
      .then((response) => response.json())
      .then((data) => setEvents(data));
  }, []);

  return (
    <div>
      <GoogleMap events={events} />
      <EventForm />
    </div>
  );
};

export default App;