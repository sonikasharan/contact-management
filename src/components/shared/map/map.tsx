// MapComponent.js
import React from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";

interface MapData {
  countries: any;
}

const MapComponent: React.FC<MapData> = ({ countries }) => {
  return (
    <MapContainer
      center={[20, 0]}
      zoom={2}
      scrollWheelZoom={false}
      style={{ height: "100%", width: "100%" }}
    >
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      />
      {countries?.length !== 0} && (
      {countries.map((country: any, index: number) => (
        <Marker
          key={index}
          position={[country.countryInfo.lat, country.countryInfo.long]}
          icon={L.icon({
            iconUrl: country.countryInfo.flag,
            iconSize: [32, 32],
          })}
        >
          <Popup>
            <strong>{country.country}</strong>
            <br />
            <b>Active Cases:</b> {country.active}
            <br />
            <b>Recovered:</b> {country.recovered}
            <br />
            <b>Deaths:</b> {country.deaths}
          </Popup>
        </Marker>
      ))}
      )
    </MapContainer>
  );
};

export default MapComponent;
