import React, { useEffect, useState } from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import L from "leaflet";
import markerIcon2x from "leaflet/dist/images/marker-icon-2x.png";
import markerIcon from "leaflet/dist/images/marker-icon.png";
import markerShadow from "leaflet/dist/images/marker-shadow.png";
import "leaflet/dist/leaflet.css";
import Papa from "papaparse";

// Fix Leaflet marker icons issue
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: markerIcon2x,
  iconUrl: markerIcon,
  shadowUrl: markerShadow,
});

const SVGMarker = (clusterValue) => {
  let color = "#FF0000"; // Default to red

  // Define color based on cluster value
  if (clusterValue == 0) color = "#8b6194";
  if (clusterValue == 1) color = "#83a3bb";
  if (clusterValue == 2) color = "#85d3ae";
  if (clusterValue == 3) color = "#f8f078";

  const svgIcon = L.divIcon({
    className: "custom-svg-icon",
    html: `
      <svg width="30" height="30" viewBox="0 0 30 30" xmlns="http://www.w3.org/2000/svg">
        <circle cx="15" cy="15" r="10" fill="${color}" />
      </svg>
    `,
    iconSize: [30, 30], // Size of the icon
    iconAnchor: [15, 15], // Anchor point in the middle of the circle
  });

  return svgIcon;
};

const MapComponent = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    Papa.parse(`${import.meta.env.BASE_URL}map_data.csv`, {
      download: true,
      header: true,
      complete: (result) => {
        console.log(result.data);
        setData(result.data);
      },
    });
  }, []);

  return (
    <MapContainer
      center={[-33.8688, 151.2093]}
      zoom={5}
      className="h-[500px] w-[80vw] flex mx-auto mb-40"
    >
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
      />
      {data.map((location, index) => {
        // Ensure latitude and longitude are numbers
        const latitude = parseFloat(location.Latitude);
        const longitude = parseFloat(location.Longitude);
        const cluster = parseInt(location.Cluster);
        // Check if latitude and longitude are valid numbers
        if (isNaN(latitude) || isNaN(longitude)) {
          console.warn(
            `Invalid coordinates for location: ${location.School_name}`
          );
          return null; // Skip rendering this marker if coordinates are invalid
        }

        return (
          <Marker
            key={index}
            position={[latitude, longitude]}
            icon={SVGMarker(cluster)}
          >
            <Popup>
              <strong>{location.School_name}</strong> <br />
              Latitude: {latitude}, Longitude: {longitude}, Cluster: {cluster}
            </Popup>
          </Marker>
        );
      })}
    </MapContainer>
  );
};

export default MapComponent;
