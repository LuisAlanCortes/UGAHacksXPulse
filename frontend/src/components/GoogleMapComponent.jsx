import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";
import { useState } from "react";

const googleApiKey = import.meta.env.VITE_GOOGLE_API_KEY;

const GoogleMapComponent = ({ events, setLat, setLng }) => {
  const [clickedLatLng, setClickedLatLng] = useState(null);
  const center = { lat: 33.95119148628928, lng: -83.37600572048282 };

  const handleMapClick = (event) => {
    const lat = event.latLng.lat();
    const lng = event.latLng.lng();

    setClickedLatLng({ lat, lng });
    setLat(lat);
    setLng(lng);
  };

  return (
    <LoadScript googleMapsApiKey={googleApiKey}>
    <GoogleMap
      mapContainerStyle={{ width: "100vw", height: "100vh" }} 
      zoom={17}
      center={center}
      onClick={handleMapClick}
    >
        {events.map((event, index) => (
          <Marker key={index} position={{ lat: event.lat, lng: event.lng }} />
        ))}
        {clickedLatLng && (
          <Marker
            position={{
              lat: clickedLatLng.lat,
              lng: clickedLatLng.lng,
            }}
            icon="https://maps.google.com/mapfiles/ms/icons/blue-dot.png" // Optional: Different icon for clicked marker
          />
        )}
      </GoogleMap>
    </LoadScript>
  );
};

export default GoogleMapComponent;
