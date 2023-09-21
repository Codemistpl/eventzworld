import React, { useState, useEffect } from 'react';
import './PostingBox.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faImage, faMusic, faVideo } from '@fortawesome/free-solid-svg-icons';
import Search from '../../Google Search/Search';
import moment from 'moment';
import ImageUploload from '../../../ImageUpoload'
// import AWS from 'aws-sdk';
import { Link } from "react-router-dom";
import { Api_url } from '../../../../constant';

const PostBox = () => {
  const [formData, setFormData] = useState({
    name: '',
    category: '',
    eventVenue: '',
    eventDate: moment().format('YYYY-MM-DD'),
    eventTime: moment().format('HH:mm'),
    text: '',
    image: null, // Use null instead of an empty string
    video: null, // Use null instead of an empty string
    audio: null, // Use null instead of an empty string
    latitude: '',
    longitude: '',
    formatted_address: '',
  });

  const handleLocationChange = (place) => {
    const lat = place.geometry.location.lat();
    const lng = place.geometry.location.lng();

    setFormData((prevFormData) => ({
      ...prevFormData,
      latitude: lat,
      longitude: lng,
      formatted_address: place.formatted_address,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (
      !formData.name ||
      !formData.category ||
      !formData.eventVenue ||
      !formData.text
      // !formData.eventDate ||
      // !formData.eventTime ||
      // !formData.image
    ) {
      alert('Please fill in all required fields.');
      return;
    }

    console.log('Form data submitted:', formData);

    await CreatePost();
  };

  const [eventDate, setEventDate] = useState(moment().format('YYYY-MM-DD'));
  const [eventTime, setEventTime] = useState(moment().format('HH:mm'));
  const [image, setimage] = useState(null)
  const [video, setvideo] = useState(null)
  const [audio, setaudio] = useState(null)
  const [selectedFiles, setSelectedFiles] = useState({
    image: '',
    audio: '',
    video: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,

    }));
    console.log(value, "value")

  };


  const handleEventDateChange = (e) => {
    const newDate = e.target.value;
    setEventDate(newDate);
    setFormData((prevFormData) => ({
      ...prevFormData,
      eventDate: newDate,
    }));
  };

  const handleEventTimeChange = (e) => {
    const newTime = e.target.value;
    setEventTime(newTime);
    setFormData((prevFormData) => ({
      ...prevFormData,
      eventTime: newTime,
    }));
  };


  // const CreatePost = async () => {
  //   console.log("Form submitted", formData);

  //   const postDataToUpload = new FormData();
  //   postDataToUpload.append("data", JSON.stringify(formData));
  //   postDataToUpload.append("image", image);
  //   postDataToUpload.append("video", formData.video);
  //   postDataToUpload.append("audio", formData.audio);

  //   try {
  //     const res = await fetch(`${Api_url}/create_post/CreatePost`, {
  //       method: "POST",
  //       body: postDataToUpload,
  //     });

  //     if (res.ok) {
  //       console.log('Post submitted successfully');
  //       // You can perform additional actions here
  //       window.location.href = '/ViewPage';
  //     } else {
  //       console.log('Post submission failed');
  //       console.log(await res.text());
  //     }
  //   }
  //   catch (error) {
  //     console.error('An error occurred:', error);
  //   }
  // };

  const CreatePost = async () => {
    console.log("Form submitted", formData);

    const postDataToUpload = new FormData();
    postDataToUpload.append("data", JSON.stringify(formData));

    if (formData.image) {
      postDataToUpload.append("image", image);
    }
    if (formData.video) {
      postDataToUpload.append("video", formData.video);
    }
    if (formData.audio) {
      postDataToUpload.append("audio", formData.audio);
    }

    try {
      const res = await fetch(`${Api_url}/create_post/CreatePost`, {
        method: "POST",
        body: postDataToUpload,
      });

      if (res.ok) {
        console.log('Post submitted successfully');
        window.location.href = '/ViewPage';
      } else {
        console.log('Post submission failed');
        console.log(await res.text());
      }
    } catch (error) {
      console.error('An error occurred:', error);
    }
  };

  const handleImageUpload = (e) => {
    setFormData({
      ...formData,
      image: e.target.files[0],
    });
    console.log(e.target.files[0]);
    setimage(e.target.files[0])
  };

  const handleVideoUpload = (e) => {
    setFormData({
      ...formData,
      video: e.target.files[0],
    });
  };

  const handleAudioUpload = (e) => {
    setFormData({
      ...formData,
      audio: e.target.files[0],
    });
  };

  const updateSelectedFile = (type, fileName) => {
    setSelectedFiles((prevSelectedFiles) => ({
      ...prevSelectedFiles,
      [type]: fileName,
    }));
  };



  return (
    <div className='background'>
      <div className="post-box">
        <div>
          <h2>Create a Post</h2>
          <form onSubmit={handleSubmit} method="post" enctype="multipart/form-data">

            <input
              type="text"
              placeholder="Event Name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="post-row"
            />
            <Search
              value={formData.addres}
              onLocationChange={handleLocationChange}

            />



            <select


              name="category"
              className="post-row"
              value={formData.category}
              onChange={handleChange}

            >
              <option value="">Select Event Category</option>
              <option value="sport">Sport</option>
              <option value="dance">Dance</option>
              <option value="Music">Music</option>
              <option value="art">Art</option>
              {/* <option value="football"></option> */}
            </select>
            <input
              type="text"
              placeholder="Event Venue"
              name="eventVenue"
              value={formData.eventVenue}
              onChange={handleChange}
              style={{ marginBottom: "18px" }}
              className="post-row"
            />
            <input
              type="date"
              placeholder="Event Date"
              name='eventDate'
              value={eventDate}
              onChange={handleEventDateChange}
              className="post-row"
            />
            <input
              type="time"
              placeholder="Event Time"
              value={eventTime}
              onChange={handleEventTimeChange}
              className="post-row"
            />

            <div className="input-group upload">
              <label htmlFor="image-upload">
                <FontAwesomeIcon icon={faImage} className="fa-icons" />
              </label>

              <input
                id="image-upload"
                type="file"
                accept="image/*"
                onChange={(e) => {
                  handleImageUpload(e);
                  updateSelectedFile('image', e.target.files[0].name);
                }}
                name="image"
                className="post-row hide"
              />
              <div className="selected-files-container">
                <span className="selected-file-name">{selectedFiles.image}</span>
              </div>

            </div>

            <div className="input-group upload">
              <label htmlFor="audio-upload">
                <FontAwesomeIcon icon={faMusic} className="fa-icon" />
              </label>

              <input
                id="audio-upload"
                type="file"
                accept="audio/*"
                onChange={(e) => {
                  handleAudioUpload(e);
                  updateSelectedFile('audio', e.target.files[0].name);
                }}
                name="audio"
                className="post-row hide"
              />
              <div className="selected-files-container">
                <span className="selected-file-name">{selectedFiles.audio}</span>
              </div>
            </div>

            <div className="input-group upload">
              <label htmlFor="video-upload">
                <FontAwesomeIcon icon={faVideo} className="fa-con" />
              </label>

              <input
                id="video-upload"
                type="file"
                accept="video/*"
                onChange={(e) => {
                  handleVideoUpload(e);
                  updateSelectedFile('video', e.target.files[0].name);
                }}
                name="video"
                className="post-row hide"
                multiple
              />
              <div className="selected-files-container">
                <span className="selected-file-name">{selectedFiles.video}</span>
              </div>
            </div>



            <textarea
              placeholder="Enter your text here"
              name="text"
              value={formData.text}
              onChange={handleChange}
              className="post-row text"
            ></textarea>

            <button type="submit" className="post-submit-button">
              Post
            </button>
          </form>


        </div>


      </div>
    </div>
  );
};

export default PostBox;