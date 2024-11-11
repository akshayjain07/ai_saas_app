"use client"

import React, { useEffect, useState } from 'react';
import { MapContainer, TileLayer, Marker, Popup, useMap } from 'react-leaflet';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import 'leaflet-routing-machine/dist/leaflet-routing-machine.css';
import 'leaflet-routing-machine';

const submissionCenters = [
  { id: 1, name: 'Center 1', lat: 40.748817, lng: -73.985428 },
  { id: 2, name: 'Center 2', lat: 40.749817, lng: -73.975428 },
  { id: 3, name: 'Center 3', lat: 40.758817, lng: -73.965428 },
];

const customIcon = new L.Icon({
  iconUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon.png',
  shadowUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-shadow.png',
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowSize: [41, 41],
});

const RoutingControl = ({
  destination,
  setDirections,
}: {
  destination: L.LatLng | null;
  setDirections: (directions: string[]) => void;
}) => {
  const map = useMap();

  useEffect(() => {
    if (!map || !destination) return;

    navigator.geolocation.getCurrentPosition((position) => {
      const userLocation = L.latLng(position.coords.latitude, position.coords.longitude);

      // Create the routing control
      const routingControl = L.Routing.control({
        waypoints: [userLocation, destination],
        lineOptions: { styles: [{ color: '#624cf5', weight: 4 }] },
        createMarker: () => null,  // Hide the default markers
        routeWhileDragging: true,
      }).addTo(map);

      routingControl.on('routesfound', (event) => {
        const steps = event.routes[0].legs[0].steps.map((step: any) => step.instructions);
        setDirections(steps); // Set the directions list
      });

      return () => {
        map.removeControl(routingControl);  // Cleanup routing control
      };
    });
  }, [map, destination, setDirections]);

  return null;
};

const MapComponent: React.FC = () => {
  const [selectedCenter, setSelectedCenter] = useState<L.LatLng | null>(null);
  const [directions, setDirections] = useState<string[]>([]);

  const handleCenterSelect = (center: { lat: number; lng: number }) => {
    setSelectedCenter(L.latLng(center.lat, center.lng));
  };

  return (
    <div className="space-y-6 mt-10">
      <MapContainer center={[40.748817, -73.985428]} zoom={13} style={{ height: '400px', width: '100%' }}>
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        />
        {submissionCenters.map((center) => (
          <Marker key={center.id} position={[center.lat, center.lng]} icon={customIcon}>
            <Popup>
              {center.name} <br />
              <button
                onClick={() => handleCenterSelect(center)}
                className="px-4 py-2 mt-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition duration-300"
              >
                Get Directions
              </button>
            </Popup>
          </Marker>
        ))}
        {selectedCenter && <RoutingControl destination={selectedCenter} setDirections={setDirections} />}
      </MapContainer>

      {/* Display directions below the map */}
      {directions.length > 0 && (
        <div className="p-4 border border-gray-300 rounded-lg bg-gray-50">
          <h3 className="text-xl font-semibold text-gray-700 mb-3">Directions to your selected center:</h3>
          <ul className="space-y-2">
            {directions.map((direction, index) => (
              <li key={index} className="text-gray-600">{direction}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default MapComponent;


// import React, { useEffect, useState } from 'react';
// import { MapContainer, TileLayer, Marker, Popup, useMap } from 'react-leaflet';
// import L from 'leaflet';
// import 'leaflet/dist/leaflet.css';
// import 'leaflet-routing-machine/dist/leaflet-routing-machine.css';
// import 'leaflet-routing-machine';

// const submissionCenters = [
//   { id: 1, name: 'Center 1', lat: 40.748817, lng: -73.985428 },
//   { id: 2, name: 'Center 2', lat: 40.749817, lng: -73.975428 },
//   { id: 3, name: 'Center 3', lat: 40.758817, lng: -73.965428 },
// ];

// const customIcon = new L.Icon({
//   iconUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon.png',
//   shadowUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-shadow.png',
//   iconSize: [25, 41],
//   iconAnchor: [12, 41],
//   popupAnchor: [1, -34],
//   shadowSize: [41, 41],
// });

// const RoutingControl = ({ destination }: { destination: L.LatLng | null }) => {
//   const map = useMap();

//   useEffect(() => {
//     if (!map || !destination) return;

//     navigator.geolocation.getCurrentPosition((position) => {
//       const userLocation = L.latLng(position.coords.latitude, position.coords.longitude);

//       const routingControl = L.Routing.control({
//         waypoints: [userLocation, destination],
//         lineOptions: { styles: [{ color: '#624cf5', weight: 4 }] },
//         createMarker: (i, waypoint) => L.marker(waypoint.latLng, { icon: customIcon })
//           .bindPopup(i === 0 ? 'Your Location' : 'Destination'),
//       }).addTo(map);

//       return () => {
//         map.removeControl(routingControl);
//       };
//     });
//   }, [map, destination]);

//   return null;
// };

// const MapComponent: React.FC = () => {
//   const [selectedCenter, setSelectedCenter] = useState<L.LatLng | null>(null);

//   const handleCenterSelect = (center: { lat: number; lng: number }) => {
//     setSelectedCenter(L.latLng(center.lat, center.lng));
//   };

//   return (
//     <div>
//       <MapContainer center={[40.748817, -73.985428]} zoom={13} style={{ height: '400px', width: '100%' }}>
//         <TileLayer
//           url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
//           attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
//         />
//         {submissionCenters.map((center) => (
//           <Marker key={center.id} position={[center.lat, center.lng]} icon={customIcon}>
//             <Popup>
//               {center.name} <br />
//               <button onClick={() => handleCenterSelect(center)}>Get Directions</button>
//             </Popup>
//           </Marker>
//         ))}
//         {selectedCenter && <RoutingControl destination={selectedCenter} />}
//       </MapContainer>
//     </div>
//   );
// };

// export default MapComponent;


// import React from 'react';
// import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
// import L from 'leaflet';
// import 'leaflet/dist/leaflet.css';

// // Submission centers' coordinates
// const submissionCenters = [
//   { id: 1, name: 'Center 1', lat: 40.748817, lng: -73.985428 },
//   { id: 2, name: 'Center 2', lat: 40.749817, lng: -73.975428 },
//   { id: 3, name: 'Center 3', lat: 40.758817, lng: -73.965428 },
// ];

// // Define a custom icon (optional)
// const customIcon = new L.Icon({
//   iconUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon.png',
//   iconRetinaUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon-2x.png',
//   shadowUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-shadow.png',
//   iconSize: [25, 41],
//   iconAnchor: [12, 41],
//   popupAnchor: [1, -34],
//   shadowSize: [41, 41],
// });

// const MapComponent: React.FC = () => {
//   return (
//     <MapContainer center={[40.748817, -73.985428]} zoom={13} style={{ height: '400px', width: '100%' }}>
//       <TileLayer
//         url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
//         attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
//       />
//       {submissionCenters.map((center) => (
//         <Marker key={center.id} position={[center.lat, center.lng]} icon={customIcon}>
//           <Popup>{center.name}</Popup>
//         </Marker>
//       ))}
//     </MapContainer>
//   );
// };

// export default MapComponent;
