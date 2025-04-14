import React from "react";

const GoogleMap: React.FC = () => {
  return (
    <div
      style={{
        overflow: "hidden",
        maxWidth: "100%",
        width: "100%",
        height: "500px",
      }}
    >
      <div style={{ height: "100%", width: "100%", maxWidth: "100%" }}>
        <iframe
          style={{ height: "100%", width: "100%", borderRadius: "0" }}
          frameBorder="0"
          src="https://www.google.com/maps/embed/v1/place?q=jashore+installation+service&key=AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8"
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </div>
  );
};

export default GoogleMap;
