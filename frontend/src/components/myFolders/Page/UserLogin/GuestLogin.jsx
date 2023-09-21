// LoginForm component (React.js)
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Api_url } from '../../../../constant';

const LoginForm = () => {
  const navigate = useNavigate();
  const [username, setUserName] = useState('');
  const [password, setPassword] = useState('');
  const [token, setToken] = useState('');

  // const handleGuestLogin = async (req, res) => {
   

  const handleGuestLogin = async (req, res) => {
    
    // setUserName({ email: 'guest' });
    // setPassword('guest123');

    try {
      const res = await fetch(`${Api_url}/create_post/guestlogin`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username: 'guest', password: 'guest@123' }),
      });
      console.log(res);

      if (res.ok) {
       
        const data = await res.json();
        console.log(data.message);
        localStorage.setItem("isLoggedIn", true);
        window.location.href = "/ViewPage"; 
      } else {
      
        console.error('Guest login failed');
        window.alert("Unauthorized");
      }
    } catch (error) {
      console.error('Error occurred during guest login:', error);
      window.alert("Unauthorized");
    }
  };


  

  return (
    
    <button className="login-button" type="button" onClick={handleGuestLogin}>
      Guest Login
    </button>
    
  );
};

export default LoginForm;
