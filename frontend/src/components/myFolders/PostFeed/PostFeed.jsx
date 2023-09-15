import React, { useState } from 'react';
import './PostFeed.css'

const EventCard = ({ imageSrc, description }) => {
  const [isCopied, setIsCopied] = useState(false);

  const copyLink = () => {
    const dummyInput = document.createElement('input');
    document.body.appendChild(dummyInput);
    dummyInput.value = window.location.href;
    dummyInput.select();
    document.execCommand('copy');
    document.body.removeChild(dummyInput);
    setIsCopied(true);
  };

  const shareEvent = () => {
    if (navigator.share) {
      navigator.share({
        title: 'Event App',
        text: description,
        url: window.location.href,
      })
        .then(() => {
          console.log('Event shared successfully');
        })
        .catch((error) => {
          console.error('Error sharing event:', error);
        });
    }
  };

  return (
    <div className="event-card" style={{display:'grid',justifyContent:'center'}}>
      <img src={imageSrc} alt="Event" className="event-image" />
      <p className="event-description">{description}</p>
      <div className="event-actions">
        <button onClick={copyLink} className="copy-link-button">{isCopied ? 'Link Copied!' : 'Copy Link'}</button>
        {navigator.share && (
          <button onClick={shareEvent} className="share-button">Share</button>
        )}
      </div>
    </div>
  );
};

export default EventCard;
