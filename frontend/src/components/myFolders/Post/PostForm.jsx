import React, { useState } from 'react';
import './PostingBox.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faImage, faMusic, faVideo } from '@fortawesome/free-solid-svg-icons';
// import PostData from './PostData';

const PostBox = () => {
  const [eventName, setEventName] = useState('');
  const [location, setLocation] = useState('');
  const [category, setCategory] = useState('');
  const [eventVenue, setEventVenue] = useState('');
  const [eventDate, setEventDate] = useState('');
  const [eventTime, setEventTime] = useState('');
  const [images, setImages] = useState([]);
  const [audio, setAudio] = useState('');
  const [videos, setVideos] = useState([]);
  const [text, setText] = useState('');
  const [postData, setPostData] = useState([]);
  const [show, setShow] = useState(true);

  const handleEventNameChange = (e) => {
    setEventName(e.target.value);
  };

  const handleLocationChange = (e) => {
    setLocation(e.target.value);
  };

  const handleCategoryChange = (e) => {
    setCategory(e.target.value);
  };

  const handleEventVenueChange = (e) => {
    setEventVenue(e.target.value);
  };

  const handleEventDateChange = (e) => {
    setEventDate(e.target.value);
  };


  const handleEventTimeChange = (e) => {
    setEventTime(e.target.value);
  };

  const handleImageChange = (e) => {
    const files = Array.from(e.target.files);
    const newImages = [];

    files.forEach((file) => {
      const reader = new FileReader();

      reader.onload = (event) => {
        newImages.push({ file: event.target.result, name: file.name });

        if (newImages.length === files.length) {
          setImages((prevImages) => [...prevImages, ...newImages]);
        }
      };

      reader.readAsDataURL(file);
    });
  };

  const handleAudioChange = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();

    reader.onload = (event) => {
      setAudio({ file: event.target.result, name: file.name });
    };

    reader.readAsDataURL(file);
  };

  const handleVideoChange = (e) => {
    const files = Array.from(e.target.files);
    const newVideos = [];

    files.forEach((file) => {
      const reader = new FileReader();

      reader.onload = (event) => {
        newVideos.push({ file: event.target.result, name: file.name });

        if (newVideos.length === files.length) {
          setVideos((prevVideos) => [...prevVideos, ...newVideos]);
        }
      };

      reader.readAsDataURL(file);
    });
  };


  const handleTextChange = (e) => {
    setText(e.target.value);
  };

  const handlePostSubmit = (e) => {
    e.preventDefault();



    if (!eventName || !location || !category || !eventVenue || !eventDate || !eventTime) {
      alert('Please fill in all the required fields.');
      return;
    }

    setShow(false);


    const newPost = {
      eventName,
      location,
      category,
      eventVenue,
      eventDate,
      eventTime,
      images: [...images],
      audio: audio.file,
      videos: [...videos],
      text,
    };

    setPostData((prevData) => [...prevData, newPost]);

    // Clear the form fields
    setEventName('');
    setLocation('');
    setCategory('');
    setEventVenue('');
    setEventDate('');
    setEventName('')
    setImages('');
    setAudio('');
    setVideos('');
    setText('');
  };

  return (
    <div className="post-box">
      {show && <div>
        <h2>Create a Post </h2>

        <form onSubmit={handlePostSubmit}>
          <input
            type="text"
            placeholder="Event Name"
            value={eventName}
            onChange={handleEventNameChange}
            className="post-input"
          />
          <select
            value={location}
            onChange={handleLocationChange}
            className="post-input"
          >
            <option value="">Select Location</option>
            <option value="bhopal">Bhopal</option>
            <option value="sagar">Sagar</option>
            <option value="indore">Indore</option>
          </select>
          <select
            value={category}
            onChange={handleCategoryChange}
            className="post-input"
          >
            <option value="">Select Event Category</option>
            <option value="cricket">Cricket</option>
            <option value="dance">Dance</option>
            <option value="Music">Music</option>
            <option value="art">Art</option>
            <option value="football">Football</option>
          </select>
          <input
            type="text"
            placeholder="Event Venue"
            value={eventVenue}
            onChange={handleEventVenueChange}
            className="post-input"
          />
          <input
            type="date"
            placeholder="Event Date"
            value={eventDate}
            onChange={handleEventDateChange}
            className="post-input"
          />
          <input
            type="time"
            placeholder="Event Time"
            value={eventTime}
            onChange={handleEventTimeChange}
            className="post-input"
          />

          <div className="input-group upload" >
            <label htmlFor="image-upload" >
              <FontAwesomeIcon icon={faImage} className="fa-icons" />
            </label>
            <input
              id="image-upload"
              type="file"
              accept="image/*"
              onChange={handleImageChange}
              className="post-input hide"
              multiple
            />
          </div>
          {/* {/ {image && <img src={image} alt="Post Image" className="post-media" />} /} */}
          <div className="input-group upload">
            <label htmlFor="audio-upload" >
              <FontAwesomeIcon icon={faMusic} className="fa-icon" />
            </label>
            <input
              id="audio-upload"
              type="file"
              accept="audio/*"
              onChange={handleAudioChange}
              className="post-input hide"
            />
          </div>
          <div className="input-group upload">
            <label htmlFor="video-upload" >
              <FontAwesomeIcon icon={faVideo} className="fa-con" />
            </label>
            <input
              id="video-upload"
              type="file"
              accept="video/*"
              onChange={handleVideoChange}
              className="post-input hide"
              multiple
            />
          </div>
          <div className="selected-files">
            {images.map((image, index) => (
              <p key={index}>Selected Image {index + 1}: {image.name}</p>
            ))}
            {audio && <p>Selected Audio: {audio.name}</p>}
            {
              videos.map((video, index) => (
                <p key={index}>Selected Video {index + 1}: {video.name}</p>
              ))
            }
          </div>

          <textarea
            placeholder="Enter your text here"
            value={text}
            onChange={handleTextChange}
            className="post-input text"
          ></textarea>

          <button
            type="submit"
            className="post-submit-button">
            Post
          </button>
        </form>
      </div>}

      <div className="post-data">
        {postData.map((post, index) => (
          <div key={index} className="post-item">
            <h3>{post.eventName}</h3>
            <p>
              <strong>Location:</strong> {post.location}
            </p>
            <p>
              <strong>Category:</strong> {post.category}
            </p>
            <p>
              <strong>Venue:</strong> {post.eventVenue}
            </p>
            <p>
              <strong>Date:</strong> {post.eventDate}
            </p>
            <p>
              <strong>Time:</strong> {post.eventTime}
            </p>

            {post.images.map((image, index) => (
              <img key={index} src={image.file} alt={`Post Image ${index + 1}`} className="post-media" />
            ))}

            {post.audio && (
              <audio controls className="post-media">
                <source src={post.audio} type="audio/mp3" />
                Your browser does not support the audio element.
              </audio>
            )}

            {post.videos.map((video, index) => (
              <video key={index} controls className="post-media">
                <source src={video.file} type="video/mp4" />
                Your browser does not support the video element.
              </video>
            ))}
            {post.text && <p>{post.text}</p>}
          </div>
        ))}
      </div>
      {/* {/ <PostData postData={postData} /> /} */}
    </div>

  );
};

export default PostBox;