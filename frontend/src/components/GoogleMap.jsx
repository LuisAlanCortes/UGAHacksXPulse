import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";

const googleApiKey = import.meta.env.VITE_GOOGLE_API_KEY; 

const GoogleMapComponent = ({ events }) => {
  const center = { lat: 33.948006, lng: -83.377319 }; 

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
