import React from "react";
import { GoogleMap, useJsApiLoader } from "@react-google-maps/api";

const containerStyle = {
  width: "100vw",
  height: "100vh",
  position: "absolute",
  top: 0,
  left: 0,
  zIndex: -1, // Makes the map a background element
};

const center = { lat: 40.7128, lng: -74.006 }; // Example: New York

const MapComponent = () => {
  const { isLoaded } = useJsApiLoader({
    googleMapsApiKey: "AIzaSyBo-mXQolZZnHe2jxg1FDm8m-ViYP9_AaY", // Replace with your API key
  });

  if (!isLoaded) return <p>Loading Map...</p>;

  return <GoogleMap mapContainerStyle={containerStyle} center={center} zoom={12} />;
};

export default MapComponent;
