import React, { useState, useEffect } from 'react';
// import './Admindashboard.css'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
// import './Admindashboard.css';
import Fulldetail from '../Fulldetail/Fulldetail'
import { Api_url } from '../../../../constant';


const Card = ({ item }) => {
  const handleSeeMore = () => {
    // Redirect to another page with full details when the button is clicked
    window.location.href = `/SeeMore/${item.id}`;
  };

  return (
    <div className="card" style={{container:"widht"}}>
      <img className='image-title' src={item.image} alt={item.title} />
      <div className="text-holder">
        <h3>{item.name}</h3>
        <p>{item.description}</p>
        <button onClick={handleSeeMore}>Apruve</button>
      </div>
    </div>
  );
};



const AdminDashboard = () => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`${Api_url}/create_post/getCreatePost`);
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
  }, []);

  return (
    <div className="card-list" style={{display:"flex" ,flexWrap:"weap"}}>
      {items.map((item) => (
        <Card key={item.id} item={item} />

      ))}
    </div>
  );
};

export default AdminDashboard;
