import React, { useState } from "react";
import Search from "./Search"; // Update the import path accordingly

function ParentComponent() {
  const handleLocationChange = (latitude, longitude, formattedAddress) => {
    console.log("Location changed:", latitude, longitude, formattedAddress);
    // Handle location change logic here
  };

  return (
    <div>
      {/* Pass the onLocationChange prop to the Search component */}
      <Search onLocationChange={handleLocationChange} />
    </div>
  );
}

export default ParentComponent;
