// import React, { useState, useEffect } from 'react';
// import { useParams } from 'react-router-dom';
// import "./SeeMore.css"
// // import GuestLogin from "./GuestLogin"
// const SeeMore = () => {
//   const { id } = useParams();
//   const [itemDetails, setItemDetails] = useState(null);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     console.log("Fetching item details for id:", id);
//     const fetchData = async () => {
//       try {
//         const response = await fetch(`http://localhost:4113/create_post/getCreatePostbyid/${id}`);
//         if (!response.ok) {
//           throw new Error('Network response was not ok');
//         }
//         const data = await response.json();
//         console.log("Fetched data:", data);
//         setItemDetails(data);
//         setLoading(false);
//       } catch (error) {
//         console.error('Error fetching item details:', error);
//         setLoading(false);
//       }
//     };

//     fetchData();
//   }, []);

//   // useEffect(()=>{
//   //   console.log(itemDetails,"jdjsndsd")

//   // },[itemDetails])

//   if (loading) {
//     return <div>Loading...</div>;
//   }

//   if (!itemDetails) {
//     return <div>No data found for the given id.</div>;
//   }

//   return (
//     <div className='see-more-container'>
//       <div className="item-box">
        
//       <h3> {itemDetails[0].name} </h3>
//       <div className='item-media'>
//         <img className="image-title item-image" src={`http://localhost:4113/image/${itemDetails[0].image}`} alt={itemDetails.title} />
//         </div>
//         <div className='item-media'>
//         {itemDetails[0].audio && (
//             <audio controls>
//               <source src={`http://localhost:4113/audio/${itemDetails[0].audio}`} type="audio/mpeg" />
//               Your browser does not support the audio element.
//             </audio>
//           )}
//           </div>
//           <div className='item-media' >
//           {itemDetails[0].video && (
//           <video controls className="video">
//           <source
//             src={`http://localhost:4113/video/${itemDetails[0].video}`}
//             type="video/mp4"
//           />
//           Your browser does not support the video element.
//         </video>
        
//           )}
//           </div>
     
          
//     <div className='item-details'>
//           <p className='item-add'>{itemDetails[0].addres}</p>
//           <p className='items'>{itemDetails[0].category}</p>
//           <p className='items'>{itemDetails[0].eventDate}</p>
//           <p className='items'>{itemDetails[0].eventTime}</p>
//           <p className='items'>{itemDetails[0].eventVenue}</p>
//           <p className='item-text'>{itemDetails[0].text}</p>
         

       

//       </div>
//       </div>


//     </div>
//   );
// };

// export default SeeMore;



// import React, { useState, useEffect } from 'react';
// import { useParams } from 'react-router-dom';
// import "./SeeMore.css"

// const SeeMore = () => {
//   const { id } = useParams();
//   const [itemDetails, setItemDetails] = useState(null);
//   const [loading, setLoading] = useState(true);
//   const [modalOpen, setModalOpen] = useState(false);
//   const [modalMedia, setModalMedia] = useState(null);
//   const [modalIsVideo, setModalIsVideo] = useState(false);

//   useEffect(() => {
//     console.log("Fetching item details for id:", id);
//     const fetchData = async () => {
//       try {
//         const response = await fetch(`http://localhost:4113/create_post/getCreatePostbyid/${id}`);
//         if (!response.ok) {
//           throw new Error('Network response was not ok');
//         }
//         const data = await response.json();
//         console.log("Fetched data:", data);
//         setItemDetails(data);
//         setLoading(false);
//       } catch (error) {
//         console.error('Error fetching item details:', error);
//         setLoading(false);
//       }
//     };

//     fetchData();
//   }, []);

//   // useEffect(()=>{
//   //   console.log(itemDetails,"jdjsndsd")

//   // },[itemDetails])

//   if (loading) {
//     return <div>Loading...</div>;
//   }

//   if (!itemDetails) {
//     return <div>No data found for the given id.</div>;
//   }

//   const openModal = (mediaUrl, isVideo = false) => {
//     setModalMedia(mediaUrl);
//     setModalIsVideo(isVideo);
//     setModalOpen(true);
//   };

//   const closeModal = () => {
//     setModalMedia(null);
//     setModalIsVideo(false);
//     setModalOpen(false);
//   }
//   return (
//     <div className='see-more-container'>
//       <div className="item-box">
//         <div className="left-content">
//           <h3>{itemDetails[0].name}</h3>
//           <p className='item-add'>{itemDetails[0].addres}</p>
//           <p className='items'>{itemDetails[0].category}</p>
//           <p className='items'>{itemDetails[0].eventDate}</p>
//           <p className='items'>{itemDetails[0].eventTime}</p>
//           <p className='items'>{itemDetails[0].eventVenue}</p>
//           <p className='item-text'>{itemDetails[0].text}</p>
//         </div>
//         <div className="right-content">
//         <img
//             className="image-title item-image"
//             src={`http://localhost:4113/image/${itemDetails[0].image}`}
//             alt={itemDetails.title}
//             onClick={() => openModal(`http://localhost:4113/image/${itemDetails[0].image}`)}
//           />
//           {itemDetails[0].audio && (
//             <audio
//               controls
//               className="audio"
//               onClick={() => openModal(`http://localhost:4113/audio/${itemDetails[0].audio}`)}
//             >
//               <source src={`http://localhost:4113/audio/${itemDetails[0].audio}`} type="audio/mpeg" />
//               Your browser does not support the audio element.
//             </audio>
//           )}
//           {itemDetails[0].video && (
//             <video
//               controls
//               className="video"
//               onClick={() => openModal(`http://localhost:4113/video/${itemDetails[0].video}`, true)}
//             >
//               <source src={`http://localhost:4113/video/${itemDetails[0].video}`} type="video/mp4" />
//               Your browser does not support the video element.
//             </video>
//           )}
//         </div>
//       </div>

//       {/* Modal */}
//       {modalOpen && (
//         <div className="modal" onClick={closeModal}>
//           {modalIsVideo ? (
//             <video
//               controls
//               className="modal-content"
//               autoPlay
//             >
//               <source src={modalMedia} type="video/mp4" />
//               Your browser does not support the video element.
//             </video>
//           ) : (
//             <img className="modal-content" src={modalMedia} alt="Enlarged Media" />
//           )}
//         </div>
//       )}
//     </div>
//   );
// };

// export default SeeMore;

import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { FacebookShareButton, WhatsappShareButton, TwitterShareButton } from "react-share";
import {FacebookIcon, WhatsappIcon, TwitterIcon} from "react-share";

import './SeeMore.css';
import { Api_url } from '../../../../constant';

const SeeMore = () => {
  const { id } = useParams();
  const [itemDetails, setItemDetails] = useState(null);
  const [loading, setLoading] = useState(true);
  const [modalOpen, setModalOpen] = useState(false);
  const [modalMedia, setModalMedia] = useState(null);
  const [modalIsVideo, setModalIsVideo] = useState(false);
  const [shareMenuOpen, setShareMenuOpen] = useState(false);
  useEffect(() => {
    console.log("Fetching item details for id:", id);
    const fetchData = async () => {
      try {
        const response = await fetch(`${Api_url}/create_post/getCreatePostbyid/${id}`);
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        console.log("Fetched data:", data);
        setItemDetails(data);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching item details:', error);
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!itemDetails) {
    return <div>No data found for the given id.</div>;
  }

  const openModal = (mediaUrl, isVideo = false) => {
    setModalMedia(mediaUrl);
    setModalIsVideo(isVideo);
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalMedia(null);
    setModalIsVideo(false);
    setModalOpen(false);
  };
   
//  const shareOnSocialMedia = (platform) => {
//   let shareUrl = '';

//   switch (platform) {
//     case 'instagram':
//       window.open('https://www.instagram.com', '_blank');
//       break;
//     case 'facebook':
//       shareUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(window.location.href)}`;
//       break;
//     case 'whatsapp':
//       shareUrl = `https://wa.me/?text=${encodeURIComponent(window.location.href)}`;
//       break;
//     case 'twitter':
//       shareUrl = `https://twitter.com/intent/tweet?url=${encodeURIComponent(window.location.href)}`;
//       break;
//     default:
//       break;
//   }
  // const shareOnInstagram = () => {
  //   const caption = encodeURIComponent("Check out this awesome post!");
  
  //   // Open Instagram website with pre-filled caption
  //   window.open(`https://www.instagram.com/create/story/?text=${caption}`, '_blank');
  // };
  
  
  
  
  

//   if (shareUrl) {
//     window.open(shareUrl, '_blank');
//   }
// };
 

  
  
 

  return (
    <div className='see-more-container'>
      <div className="item-box">
        <div className="left-content">
          <h3>Name: {itemDetails[0].name}</h3>
          <p className='item-add'>Location: {itemDetails[0].addres}</p>
          <p className='items'>Category: {itemDetails[0].category}</p>
          <p className='items'>Date: {itemDetails[0].eventDate}</p>
          <p className='items'>Time: {itemDetails[0].eventTime}</p>
          <p className='items'>Venue: {itemDetails[0].eventVenue}</p>
          <p className='item-text'>Desciption: {itemDetails[0].text}</p>
        </div>
        <div className="right-content">
          <img
            className="image-title item-image"
            src={`${Api_url}/image/${itemDetails[0].image}`}
            alt={itemDetails.title}
            onClick={() => openModal(`${Api_url}/image/${itemDetails[0].image}`)}
          />
          {itemDetails[0].audio && (
            <audio
              controls
              className="audio"
              onClick={() => openModal(`${Api_url}/audio/${itemDetails[0].audio}`)}
            >
              <source src={`${Api_url}/audio/${itemDetails[0].audio}`} type="audio/mpeg" />
              Your browser does not support the audio element.
            </audio>
          )}
          {itemDetails[0].video && (
            <video
              controls
              className="video"
              onClick={(e) => openModal(`${Api_url}/video/${itemDetails[0].video}`, true)}
            >
              <source src={`${Api_url}/video/${itemDetails[0].video}`} type="video/mp4" />
              Your browser does not support the video element.
            </video>
          )}
          {/* <div className="social-media-icons">
       <FaInstagram className="insta" onClick={() => shareOnSocialMedia('instagram')} />
       <FaFacebook style={{color:"blue"}}  onClick={() => shareOnSocialMedia('facebook')} />
      <FaWhatsapp style={{color:"green"}}  onClick={() => shareOnSocialMedia('whatsapp')} />
       <FaTwitter style={{color:"blue"}}  onClick={() => shareOnSocialMedia('twitter')} />
</div> */}

<div>
  <FacebookShareButton url="https://youtu.be/0XSujRgVXI"
    quote={"Hey"}
    hashtag="#React"
  >
    <FacebookIcon logoFillColor="white" round={true}>

    </FacebookIcon>
  </FacebookShareButton>
  <WhatsappShareButton
  title='Sharing Content'
  url="http://localhost:3000/SeeMore/"
  >
    <WhatsappIcon logoFillColor="white" round={true}></WhatsappIcon>
  </WhatsappShareButton>
  <TwitterShareButton
  title='Sharing Content'
  url="http://localhost:3000/SeeMore/"
>
  <TwitterIcon logoFillColor="white" round={true} />
</TwitterShareButton>
</div>

    </div>
      </div>

      {/* Modal */}
      {modalOpen && (
        <div className="modal" onClick={closeModal}>
          {modalIsVideo ? (
            <video
              controls
              className="modal-content"
              autoPlay
              onClick={(e) => {
                if (e.target === e.currentTarget) {
                  closeModal();
                }
              }}
            >
              <source src={modalMedia} type="video/mp4" />
              Your browser does not support the video element.
            </video>
          ) : (
            <img
              className="modal-content"
              src={modalMedia}
              alt="Enlarged Media"
              onClick={closeModal}
            />
          )}
        </div>
      )}
    </div>
  );
};

export default SeeMore;


