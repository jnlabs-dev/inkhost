"use client";

import { MapContainer, TileLayer } from "react-leaflet";
import "leaflet/dist/leaflet.css";

type InteractiveMapProps = {
  className?: string;
}

export function InteractiveMap({ className }: InteractiveMapProps) {
  return (
    <MapContainer
      center={[52.2297, 21.0122]} // Example: Warsaw
      zoom={13}
      scrollWheelZoom={false}
      className={className}
    >
      <TileLayer
        url="https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png"
        attribution='&copy; <a href="https://carto.com/">CARTO</a>'
      />
    </MapContainer>
  );
}
