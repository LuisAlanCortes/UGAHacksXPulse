import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";

const GoogleMapComponent = ({ events }) => {
  const center = { lat: 40.7128, lng: -74.0060 }; // Default to NYC

  return (
    <LoadScript googleMapsApiKey={process.env.REACT_APP_GOOGLE_MAPS_API_KEY}>
      <GoogleMap mapContainerStyle={{ width: "100%", height: "400px" }} zoom={12} center={center}>
        {events.map((event, index) => (
          <Marker key={index} position={{ lat: event.lat, lng: event.lng }} />
        ))}
      </GoogleMap>
    </LoadScript>
  );
};

export default GoogleMapComponent;
