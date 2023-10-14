import React, { useState } from 'react';
import { Api_url } from '../../../../constant';
import Search from '../../Google Search/Search';
import './Profile.css';

const Profile = () => {
  const [formData, setFormData] = useState({
    oldPassword: '', // Added oldPassword field
    name: '',
    email: '',
    newPassword: '',
    confirmNewPassword: '',
    profilePicture: null,
  });

  // const [isEditing, setIsEditing] = useState(false);
  const [updateMessage, setUpdateMessage] = useState('');

  const handleLocationChange = (place) => {
    const lat = place.geometry.location.lat();
    const lng = place.geometry.location.lng();
  } 

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setFormData({
      ...formData,
      profilePicture: file,
    });
  };

  // const handleEditClick = () => {
  //   setIsEditing(!isEditing);
  //   setUpdateMessage(''); // Clear update message on edit click
  // };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (formData.newPassword !== formData.confirmNewPassword) {
      setUpdateMessage('Passwords do not match.');
      return;
    }

    try {
      const verifyResponse = await fetch(`${Api_url}/create_post/verifyUser`, {
        method: 'POST',
        body: JSON.stringify({
          userId: 'userIdHere',
          oldPassword: formData.oldPassword,
        }),
        headers: {
          'Content-Type': 'application/json',
        },
      });
  
      const verifyData = await verifyResponse.json();
  
      if (verifyData.error) {
        setUpdateMessage(verifyData.error);
        return;
      }
  
      // User is verified, proceed with the update
      if (formData.newPassword !== formData.confirmNewPassword) {
        setUpdateMessage('Passwords do not match.');
        return;
      }
  
      const updateResponse = await fetch(`${Api_url}/create_post/updateProfile`, {
        method: 'POST',
        body: JSON.stringify({
          userId: 'userIdHere',
          updatedData: formData,
        }),
        headers: {
          'Content-Type': 'application/json',
        },
      });
  
      const updateData = await updateResponse.json();
  
      if (updateData.message) {
        setUpdateMessage('Profile updated successfully.');
      } else {
        setUpdateMessage('Error updating profile.');
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <>
      <h2>Edit Profile</h2>
      <div className="pro-container">

        <form onSubmit={handleSubmit}>
          
          <div className="pro-form-group">
            <label className='profile'>Name</label>
            <input
              type="text"
              name="name"
              className='pro-input'
              value={formData.name}
              onChange={handleInputChange}
              // disabled={!isEditing}
            />
          </div>
          <div className="pro-form-group">
            <label className='profile'>Email</label>
            <input
              type="email"
              name="email"
              className='pro-input'
              value={formData.email}
              onChange={handleInputChange}
              // disabled={!isEditing}
            />
          </div>
         
          <div className="pro-form-group">
            <label className='profile'> Password</label>
            <input
              type="password"
              name="Password"
              className='pro-input'
              value={formData.newPassword}
              onChange={handleInputChange}
              // disabled={!isEditing}
            />
          </div>
          <div className="pro-form-group">
            <label className='profile'>Confirm New Password</label>
            <input
              type="password"
              name="confirmNewPassword"
              className='pro-input'
              value={formData.confirmNewPassword}
              onChange={handleInputChange}
              // disabled={!isEditing}
            />
          </div>
            <div className="pro-form-group">
            <label className='profile'>Location</label>
          <Search
           className='pro-input'
            onLocationChange={handleLocationChange}
          />
            </div>

          <div className="pro-form-group">
            <label className='profile'>Profile Picture</label>
            <input
             className='pro-input'
              type="file"
              accept="image/*"
              onChange={handleFileChange}
              // disabled={!isEditing}
            />
          </div>
          <button type="submit"  className="edit-btn">
            Update
          </button>
          {/* <button onClick={handleEditClick} className={`edit-btn ${isEditing ? 'disabled' : ''}`}>
            {isEditing ? 'Cancel Edit' : 'Edit Profile'}
          </button> */}
        </form>
        {updateMessage && <div className="message">{updateMessage}</div>}
      </div>
    </>
  );
};

export default Profile;
