import React, { useState } from 'react';
import { GoogleLogin, googleLogout  } from '@react-oauth/google';

const Main = () => {
  const [loggedIn, setLoggedIn] = useState(false);

  const responseGoogle = (response) => {
    console.log(response);
    
    setLoggedIn(true);
  };

  const handleLogout = () => {
    
    setLoggedIn(false);
    googleLogout();

    console.log("logout",handleLogout)

  };
  

  return (
    <>
    <div style={{justifyContent:"center", marginLeft:"21%", marginTop:"10px", marginBottom:"17px" , backgroundcolor:"#df4930", color:"white"}}>
     
              <GoogleLogin 
              clientId="930455171490-65or5r8589s8fes6gjf1u0es9ogdsbo6.apps.googleusercontent.com"
              // clientId="148618350247-ub8i9r8hniknbearhb69shomlfic5ig5.apps.googleusercontent.com"
            onSuccess={credentialResponse => {
            localStorage.setItem('isLoggedIn', 'true');
            window.location.href = "/Viewpage"
            console.log(credentialResponse);
          }}
          onError={() => {
            console.log('Login Failed');
          }}

          
        />
        </div>

{/* <button onClick={handleLogout}>logout</button> */}
    </>
  );
};

export default Main;



// import React, { useState } from 'react';
// import { GoogleLogin } from '@react-oauth/google';
// import { Api_url } from '../../constant';

// const Main = () => {
//   const [loggedIn, setLoggedIn] = useState(false);
  
//   const responseGoogle = async (response) => {
//     console.log(response);

//     const { credential, name, clientId } = response;

//     try {
//       const saveUserDataResponse = await fetch('/api/saveUserData', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify({
//           credential,
//           name,
//           clientId,
//         }),
//       });

//       if (saveUserDataResponse.ok) {
//         console.log('User data saved successfully');
//       } else {
//         console.error('Error saving user data');
//       }

//       setLoggedIn(true);
//     } catch (error) {
//       console.error('Error:', error);
//     }
//   };

//   return (
//     <div>
//       <div style={{ justifyContent: "center", marginLeft: "21%", marginTop: "10px", marginBottom: "17px", backgroundcolor: "#df4930", color: "white" }}>
//         <GoogleLogin
//           clientId="930455171490-65or5r8589s8fes6gjf1u0es9ogdsbo6.apps.googleusercontent.com"
//           onSuccess={responseGoogle}
//           onError={() => console.log('Login Failed')}
//         />
//       </div>
     
//     </div>
//   );
// };

// export default Main;
