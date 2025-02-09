import React from 'react';
import axios from 'axios';
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';

const containerStyle = {
  width: '100%',
  height: '100vh',
};

const center = {
  lat: 33.948006,
  lng: -83.377319, 
};

// Zell Miller: 33.951578369677655, -83.37589227483764
// Book Store: 33.951370294333564, -83.37491245552805
// Hull St Parking Deck: 33.95280232249797, -83.37873418357246
// Sanford Stadium: 33.949665198408546, -83.37325502317879

const MapComponent = () => {
  // State to store events
  const [events, setEvents] = useState([]);

  // Fetch events from the Flask backend
  useEffect(() => {
    axios.get('http://127.0.0.1:5000/api/events') // Adjust the URL if necessary
      .then(response => {
        setEvents(response.data); // Store the events in the state
      })
      .catch(error => {
        console.error('There was an error fetching the events!', error);
      });
  }, []);

  return (
    <LoadScript googleMapsApiKey={import.meta.env.VITE_GOOGLE_MAPS_API_KEY}>
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={center}
        zoom={10}
      >
        {/* Render markers for each event */}
        {events.map(event => (
          <Marker
            key={event.id}
            position={{ lat: event.lat, lng: event.lng }}
            title={event.name} // You can use the event's name or any other detail
          />
        ))}
      </GoogleMap>
    </LoadScript>
  );
};

export default MapComponent;