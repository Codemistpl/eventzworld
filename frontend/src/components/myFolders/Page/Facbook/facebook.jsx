// import React, { useEffect, useState } from 'react';
// import FacebookLogin from '@greatsumini/react-facebook-login';
// import { useNavigate } from 'react-router-dom';
// import { Api_url } from '../../../../constant';


// function Facebook({ onLogin }) {
//   const [authenticated, setAuthenticated] = useState(false);

//   const navigate = useNavigate()

//   const responseFacebook = async (response) => {
//     console.log("facebook response",response);

//     try {
//       const res = await fetch(`${Api_url}/create_post/responseFacebook`, {
//         method: 'POST',

//         headers: {
//           'Content-Type': 'application/json',
//         },

//         body: JSON.stringify({
//           accessToken: response.accessToken,
//           name: response.name,
//           id: response.id,
//         }),

//       });

//       console.log("fb in database ", res);

//       if (!res.ok) {
//         // throw new Error('Error saving Facebook data');
//       }

//       // const data = await res.json();
//       // console.log(data.message);

//       // Save data in localStorage and set authentication status to true
//       localStorage.setItem('facebookUserData', JSON.stringify({

//         Token: response.accessToken,
//         name: response.name,
//         id: response.id,
//       }));
//       setAuthenticated(true);
//       localStorage.setItem("isLoggedIn", true);
//       // navigate('/Viewpage');
//       window.location.href = "/Viewpage";

//     } catch (error) {
//       console.error('Error saving Facebook data:', error);
//     }
//   };



//   return (
//     <div style={{justifycontent:"center", marginTop:"10px", marginBottom:"17px" , backgroundcolor:"blue", color:"white"}}>
//       <FacebookLogin
//         // appId="537985784317073"
//         // appId="257840317177709"
//         appId="310387418131287"
//         autoLoad={true}
//         fields="name,email,picture"
//         callback={responseFacebook}
//       />
//       {/* <FacebookLogin
//           appId="537985784317073"
//           onSuccess={(response) => {
//             console.log('Login Success!', response);
//           }}
//           onFail={(error) => {
//             console.log('Login Failed!', error);
//           }}
//           onProfileSuccess={(response) => {
//             console.log('Get Profile Success!', response);
//           }}
//           callback= {responseFacebook}
//         /> */}
//     </div>
//   );
// }

// export default Facebook;



// // set HTTPS=true&&npm start



import {LoginSocialFacebook} from "reactjs-social-login";
import  { FacebookLoginButton} from "react-social-login-buttons";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Facebook (){
  const [profile , setProfile] = useState(null);
  const navigate = useNavigate();

return (
  <div>
   {!profile ? <LoginSocialFacebook
     appId="310387418131287"
     onResolve={(response)=>{
      console.log(response);
       navigate("/Viewpage");
      setProfile(response.data);
      
     }}
     onReject={(error)=>{
      console.log(error)
     }}
    >
      
    <FacebookLoginButton style={{width:"65%", marginLeft:"50px"}} />
    </LoginSocialFacebook>:''}

    {profile ? ( <div>
      <h1>{profile.name}</h1>
      <img src={profile.picture.data.url}/>
    </div>
    ):(

      ""
  )}
    </div>
  );
}

export default Facebook;



// set HTTPS=true&&npm start