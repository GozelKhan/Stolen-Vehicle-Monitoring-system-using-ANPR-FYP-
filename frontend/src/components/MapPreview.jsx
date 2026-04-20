/** @format */

<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> 4518809402808e6ca5db71f9c83e1773a55a49d8
import "./styles/MapPreview.css";

const MapPreview = ({
  height = 250,
  locations = [
    { name: "Blue Area", latitude: 33.6844, longitude: 73.0479 },
  ],
}) => {
  // Generate marker string for Google Maps embed
  const markers = locations
    .map((loc) => `${loc.latitude},${loc.longitude}`)
    .join("|");

  const mapUrl = `https://maps.google.com/maps?q=${markers}&t=&z=13&ie=UTF8&iwloc=&output=embed`;
<<<<<<< HEAD
=======

  return (
    <div className="map-preview">
      <h2>Map Preview</h2>
      <iframe
        title="Map"
        src={mapUrl}
        width="100%"
        height={height}
        style={{ border: 0, borderRadius: "10px" }}
        allowFullScreen
        loading="lazy"
      ></iframe>
=======
import "./styles/components.css";
>>>>>>> 4518809402808e6ca5db71f9c83e1773a55a49d8

  return (
    <div className="map-preview">
      <h2>Map Preview</h2>
<<<<<<< HEAD
      <iframe
        title="Map"
        src={mapUrl}
        width="100%"
        height={height}
        style={{ border: 0, borderRadius: "10px" }}
        allowFullScreen
        loading="lazy"
      ></iframe>
=======
      <div className="map-placeholder">
        <p>Map showing latest detections and alerts</p>
      </div>
>>>>>>> d4cac4720d4cace9d447997545cd6c0a379eefc5
>>>>>>> 4518809402808e6ca5db71f9c83e1773a55a49d8
    </div>
  );
};

export default MapPreview;
