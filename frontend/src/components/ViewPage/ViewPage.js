import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Search from '../myFolders/Google Search/Search';

import './View.css';
import { Api_url } from '../../constant';

const Card = ({ item }) => {
  return (
    <div className="card" style={{ width: '100%' }}>
      <div className="text-holder">
        <h3> {item.name}</h3>
        <p>Location: {item.addres}</p>
        <p>Category: {item.category}</p>
        <p>Venue: {item.eventVenue}</p>
        <p>Time: {item.eventTime}</p>
        <p>Date: {item.eventDate}</p>
        <Link to={`/seemore/${item.id}`}>
          <p className="text-holder button" style={{fontSize:"18px", fontWeight:"400", color:"blue"}}>See More</p>
        </Link>
      </div>
    </div>
  );
};


const ViewPage = () => {
  const [items, setItems] = useState([]);
  const [filteredItems, setFilteredItems] = useState([]);
  
  const [currentLocation, setCurrentLocation] = useState(null);
  const [selectedRange, setSelectedRange] = useState('today'); // Changed from a dropdown to a radio button

  const calculateDistance = (lat1, lon1, lat2, lon2) => {
    const R = 6371; // Radius of the Earth in kilometers
    const dLat = (lat2 - lat1) * (Math.PI / 180);
    const dLon = (lon2 - lon1) * (Math.PI / 180);
    const a =
      Math.sin(dLat / 2) * Math.sin(dLat / 2) +
      Math.cos(lat1 * (Math.PI / 180)) *
        Math.cos(lat2 * (Math.PI / 180)) *
        Math.sin(dLon / 2) * Math.sin(dLon / 2);
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    const distance = R * c;
    return distance;
  };
  
  // Example usage
  const lat1 = 52.5200;
  const lon1 = 13.4050; 
  const lat2 = 48.8566; 
  const lon2 = 2.3522;  
  
  const distance = calculateDistance(lat1, lon1, lat2, lon2);
  console.log('Distance:', distance, 'km');

  const handleLocationChange = place => {
    const selectedLat = place.geometry.location.lat();
    const selectedLng = place.geometry.location.lng();

    
    setCurrentLocation({ lat: selectedLat, lng: selectedLng });

    // setFilteredItems(filteredData);
    // console.log(filteredData)
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`${Api_url}/create_post/getPostbylocation/${JSON.stringify(currentLocation)}`,{
          method: 'GET'
        });
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        setItems(data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, [currentLocation]);

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          setCurrentLocation({ lat: latitude, lng: longitude});
          // console.log(latitude, longitude)
          console.log(position, "text")
        },
        (error) => {
          console.error('Error getting location:', error);
        }
      );
    } else {
      console.error('Geolocation is not supported in this browser.');
    }
  }, []);
  
  useEffect(() => {
    const currentDate = new Date();
    const nextThreeDays = new Date(currentDate);
    nextThreeDays.setDate(nextThreeDays.getDate() + 3);

    let filteredData = items.filter(item => {
      const eventDate = new Date(item.eventDate);
      currentDate.setHours(0, 0, 0, 0);
      return eventDate >= currentDate && eventDate <= nextThreeDays;
    });

    if (selectedRange === 'today') {
      filteredData = filteredData.filter(item => {
        const eventDate = new Date(item.eventDate);
        return eventDate.toDateString() === currentDate.toDateString();
      });
    } else if (selectedRange === 'next3days') {
      filteredData = filteredData.filter(item => {
        const eventDate = new Date(item.eventDate);
        const dayDiff = Math.floor((eventDate - currentDate) / (1000 * 60 * 60 * 24));
        return dayDiff >= 1 && dayDiff <= 3;
      });
    }

    filteredData.sort((a, b) => new Date(a.eventDate) - new Date(b.eventDate));

    setFilteredItems(filteredData);
  }, [items, selectedRange]);

  const handleRangeChange = event => {
    setSelectedRange(event.target.value);
  };

  return (
    <div className='view'>
      <div className="search-container">
        <Search onLocationChange={handleLocationChange} />
      </div>
      <div className="card">
        <label htmlFor="today" style={{ fontSize: "20px", fontWeight: "500", color: "brown", paddingBottom: "6px" }}>
          View Events
        </label>
        <div>
          <input
            type="radio"
            id="today"
            value="today"
            checked={selectedRange === 'today'}
            onChange={handleRangeChange}
          />
          <label htmlFor="today">Today</label>
        </div>
        <div>
          <input
            type="radio"
            id="next3days"
            value="next3days"
            checked={selectedRange === 'next3days'}
            onChange={handleRangeChange}
          />
          <label htmlFor="next3days">Next 3 Days</label>
        </div>
      </div>
      <div>
        {filteredItems.length > 0 ? (
          <div className='card-list'>
            {filteredItems.map(item => (
              <Card key={item.id} item={item} />
            ))}
          </div>
        ) : (
          <div>
            <h2 style={{ color: "white", textAlign :'center' }}>No Events</h2>
          </div>
        )}
      </div>
    </div>
  );
};

export default ViewPage;
