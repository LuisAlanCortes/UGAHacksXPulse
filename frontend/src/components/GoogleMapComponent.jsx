import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";
import { useState } from "react";

const googleApiKey = import.meta.env.VITE_GOOGLE_API_KEY;

// const darkmodestyle = [
//   {
//     "elementType": "geometry",
//     "stylers": [
//       {
//         "color": "#242f3e"
//       }
//     ]
//   },
//   {
//     "elementType": "labels.text.fill",
//     "stylers": [
//       {
//         "color": "#746855"
//       }
//     ]
//   },
//   {
//     "elementType": "labels.text.stroke",
//     "stylers": [
//       {
//         "color": "#242f3e"
//       }
//     ]
//   },
//   {
//     "featureType": "administrative.locality",
//     "elementType": "labels.text.fill",
//     "stylers": [
//       {
//         "color": "#d59563"
//       }
//     ]
//   },
//   {
//     "featureType": "poi",
//     "elementType": "labels.text.fill",
//     "stylers": [
//       {
//         "color": "#d59563"
//       }
//     ]
//   },
//   {
//     "featureType": "poi.park",
//     "elementType": "geometry",
//     "stylers": [
//       {
//         "color": "#263c3f"
//       }
//     ]
//   },
//   {
//     "featureType": "poi.park",
//     "elementType": "labels.text.fill",
//     "stylers": [
//       {
//         "color": "#6b9a76"
//       }
//     ]
//   },
//   {
//     "featureType": "road",
//     "elementType": "geometry",
//     "stylers": [
//       {
//         "color": "#38414e"
//       }
//     ]
//   },
//   {
//     "featureType": "road",
//     "elementType": "geometry.stroke",
//     "stylers": [
//       {
//         "color": "#212a37"
//       }
//     ]
//   },
//   {
//     "featureType": "road",
//     "elementType": "labels.text.fill",
//     "stylers": [
//       {
//         "color": "#9ca5b3"
//       }
//     ]
//   },
//   {
//     "featureType": "road.highway",
//     "elementType": "geometry",
//     "stylers": [
//       {
//         "color": "#746855"
//       }
//     ]
//   },
//   {
//     "featureType": "road.highway",
//     "elementType": "geometry.stroke",
//     "stylers": [
//       {
//         "color": "#1f2835"
//       }
//     ]
//   },
//   {
//     "featureType": "road.highway",
//     "elementType": "labels.text.fill",
//     "stylers": [
//       {
//         "color": "#f3d19c"
//       }
//     ]
//   },
//   {
//     "featureType": "transit",
//     "elementType": "geometry",
//     "stylers": [
//       {
//         "color": "#2f3948"
//       }
//     ]
//   },
//   {
//     "featureType": "transit.station",
//     "elementType": "labels.text.fill",
//     "stylers": [
//       {
//         "color": "#d59563"
//       }
//     ]
//   },
//   {
//     "featureType": "water",
//     "elementType": "geometry",
//     "stylers": [
//       {
//         "color": "#17263c"
//       }
//     ]
//   },
//   {
//     "featureType": "water",
//     "elementType": "labels.text.fill",
//     "stylers": [
//       {
//         "color": "#515c6d"
//       }
//     ]
//   },
//   {
//     "featureType": "water",
//     "elementType": "labels.text.stroke",
//     "stylers": [
//       {
//         "color": "#17263c"
//       }
//     ]
//   }
// ]

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
      // options={{ styles: darkmodestyle }}
    >
        {events.map((event, index) => (
          <Marker key={index} position={{ lat: event.lat, lng: event.lng }} label={event.name}/>
        ))}
        {clickedLatLng && (
          <Marker
            position={{
              lat: clickedLatLng.lat,
              lng: clickedLatLng.lng,
            }}
            icon="https://maps.google.com/mapfiles/ms/icons/blue-dot.png" 
          />
        )}
      </GoogleMap>
    </LoadScript>
  );
};

export default GoogleMapComponent;
