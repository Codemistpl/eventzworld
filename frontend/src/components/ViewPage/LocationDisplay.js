import React from 'react';

const LocationDisplay = ({ currentLocation }) => {
  return (
    <div className="location-display">
      {currentLocation ? (
        <p>Showing events within 25 km of: {currentLocation.formatted_address}</p>
      ) : (
        <p>Showing all events</p>
      )}
    </div>
  );
};

export default LocationDisplay;
