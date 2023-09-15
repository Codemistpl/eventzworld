import React, { useState } from 'react';
import { GoogleLogin, googleLogout  } from '@react-oauth/google';

const Main = () => {
  const [loggedIn, setLoggedIn] = useState(false);

  const responseGoogle = (response) => {
    console.log(response);
    // Perform login logic with response
    setLoggedIn(true);
  };

  const handleLogout = () => {
    // Perform logout logic
    setLoggedIn(false);
    googleLogout();

    console.log("logout",handleLogout)

  };
  

  return (
    <>
    <div style={{marginLeft:"20%", marginTop:"10px", marginBottom:"10px" , backgroundcolor:"#df4930", color:"white"}}>
     
              <GoogleLogin 
              clientId="930455171490-65or5r8589s8fes6gjf1u0es9ogdsbo6.apps.googleusercontent.com"
              // clientId="148618350247-ub8i9r8hniknbearhb69shomlfic5ig5.apps.googleusercontent.com"
            onSuccess={credentialResponse => {
            localStorage.setItem('isLoggedIn', 'true');
            window.location.href = "/"
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





// import React from 'react';
// import ReactDOM from 'react-dom';
// // import GoogleLogin from 'react-google-login';
// // or
// import { GoogleLogin } from 'react-google-login';

// const responseGoogle = (response) => {
//   console.log(response);
// }

// ReactDOM.render(
//   <GoogleLogin
//     clientId="148618350247-ub8i9r8hniknbearhb69shomlfic5ig5.apps.googleusercontent.com"
//     render={renderProps => (
//       <button onClick={renderProps.onClick} disabled={renderProps.disabled}>This is my custom Google button</button>
//     )}
//     buttonText="Login"
//     onSuccess={responseGoogle}
//     onFailure={responseGoogle}
//     cookiePolicy={'single_host_origin'}
//   />,
//   document.getElementById('googleButton')
// );



// import React from 'react';
// import { createRoot } from 'react-dom/client';
// import { Auth0Provider } from '@auth0/auth0-react';
// import App from './App';

// const root = createRoot(document.getElementById('root'));

// root.render(
// <Auth0Provider
//        domain="dev-hav1h8rqrg2dq3y4.us.auth0.com"
//        clientId="vcNa399yEtIqSHXNBVDe3tLaEBwNyiCk"
//     authorizationParams={{
//       redirect_uri: window.location.origin
//     }}
//   >
//     <AppProvider>
//     <App />
//     </AppProvider>  
//   </Auth0Provider>,
// );

