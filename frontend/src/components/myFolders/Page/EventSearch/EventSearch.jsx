import React from 'react';
import './SearchBox.css'; // Import the CSS file for styling

const SearchBox = () => {
  return (
    <div className="search-container">
      <input type="text" placeholder="Search..." className="search-input" />
      <button className="search-button">Search</button>
    </div>
  );
};

export default SearchBox;
