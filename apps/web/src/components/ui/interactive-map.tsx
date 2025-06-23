"use client";

import { useEffect } from "react";
import L from "leaflet";
import "leaflet/dist/leaflet.css";

type InteractiveMapProps = {
  center?: [number, number];
  zoom?: number;
};

export function InteractiveMap({
  center = [52.2297, 21.0122], // Default to Warsaw
  zoom = 12,
}: InteractiveMapProps) {
  useEffect(() => {
    const map = L.map("map").setView(center, zoom);

    L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
      attribution: "© OpenStreetMap contributors",
    }).addTo(map);

    return () => {
      map.remove(); // Cleanup on unmount
    };
  }, [center, zoom]);

  return (
    <div
      id="map"
      style={{ width: "100%", height: "500px", borderRadius: "1rem" }}
    />
  );
}
