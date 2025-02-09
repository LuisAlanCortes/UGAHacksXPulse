import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";

const googleApiKey = import.meta.env.VITE_GOOGLE_API_KEY; 

const GoogleMapComponent = ({ events }) => {
  const center = { lat: 40.7128, lng: -74.0060 }; 

  return (
    <LoadScript googleMapsApiKey={googleApiKey}>
      <GoogleMap mapContainerStyle={{ width: "100%", height: "400px" }} zoom={12} center={center}>
        {events.map((event, index) => (
          <Marker key={index} position={{ lat: event.lat, lng: event.lng }} />
        ))}
      </GoogleMap>
    </LoadScript>
  );
};

export default GoogleMapComponent;
