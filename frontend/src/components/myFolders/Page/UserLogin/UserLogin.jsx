import React, { useState, useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";
import Signup from '../../Sign up/Signup'
import Main from '../../Main'
import './UserLogin.css'
import Facebook from '../Facbook/facebook'
import AdminLogin from "../AdminLogin/AdminLogin";
// import {logo192} from "../im/logo192"
import GuestLogin from "./GuestLogin"
import { Api_url } from "../../../../constant";
const LoginForm = () => {

  const [showAdminLogin, setShowAdminLogin] = useState(false);


  //   setMarker,

  //   setPlayers,
  // }) => {
  const [formData, setFormData] = useState({
    name: "",
    address: "",
    phone: "",
    role: "",
    gender: "",
    sport: "",
    email: "",
    lat: "",
    lng: "",
  });

  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [showSignup, setShowSignup] = useState(false);
  const navigate = useNavigate();
  const [showadminLogin, setShowadminLogin] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = {
      userName: userName,
      password: password,
    };
    console.log("Form Data:", formData);

    // if (userName === "guest" && password === "guest123") {
    //   // Redirect to the home page
    //   navigate('/ViewPage');
    // } else {
    //   // Handle incorrect login credentials
    //   console.log("Invalid username or password");
    // }
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  // const handleGuestLogin = () => {
  //   // Set guest username and password
  //   setUserName("");
  //   setPassword("");
  // };

  const handleSignup = () => {
    setShowSignup(true);
  };

  if (showSignup) {
    return <Signup />;
  }


  const handleAdminLogin = () => {
    setShowAdminLogin(true);
  };

  if (showAdminLogin) {
    return <AdminLogin />;
  }


  const Logindata = async (event) => {
    event.preventDefault();
    console.log("Form submitted", formData);

    try {
      const res = await fetch(`${Api_url}/create_post/login`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email: formData.name, password: password }),
      });

      if (!res.ok) {
        throw new Error("Login failed. Please check your credentials.");
      }

      const data = await res.json();
      console.log(data);
      if (data.message === "Login successful.") {
        localStorage.setItem("isLoggedIn", true);
        window.location.href = "/ViewPage";
        // if (formData.Role === "user") {
        //   window.location.href = "/ViewPage"; 
        // } else if (formData.Role === "1") {
        //   window.location.href = "/AdminTable"; 
        // }
      }

      // const data = await res.json();
      // console.log(data);

      // if (data.role === "admin") {
      //   localStorage.setItem("isLoggedIn", true);
      //   localStorage.setItem("role", "admin");
      //   navigate("/AdminTable");
      // } else if (data.role === "user") {
      //   localStorage.setItem("isLoggedIn", true);
      //   localStorage.setItem("role", "user");
      //   window.location.href = "/ViewPage"; 
      // }



    } catch (error) {
      console.error("Error occurred during login:", error.message);
      window.alert("Unauthorized")
      // Handle the error and display appropriate message to the user
    }
  };

  // const guestlogin = async () => {
  //   setUserName("");
  //  setPassword("");
  //   try {
  //     const res = await fetch('http://localhost:4113/create_post/guestlogin', {
  //       method: 'POST',
  //       headers: { 'Content-Type': 'application/json' },
  //     });
  
  //     if (!res.ok) {
  //       throw new Error('Guest login failed');
  //     }
  
  //     const data = await res.json();
  //     // const guestToken = data.token;
  
      
  //     // localStorage.setItem('token', guestToken);
  
  //     localStorage.setItem('isLoggedIn', 'true');
  //     window.location.href = "/ViewPage"
  //   } catch (error) {
  //     console.error('Error during guest login:', error);
      
  //   }
  // };
  


  return (
    <div className="container">
      <div className="login-container">
        <h1>Login Page</h1>
        <form onSubmit={handleSubmit}>

          <div className="admin-login-option">
            {/* <label>
              <input
                type="checkbox"
                checked={showAdminLogin}
                onChange={handleAdminLogin}
              />
              Show Admin Login  
            </label> */}
          </div>
          <div>
            {/* <img src={logo192.png} alt="email" className="email" /> */}
            <input
              type="text"
              placeholder="Username"
              className="name"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            />
          </div>
          <div className="second-input">
            <input
              type="password"
              placeholder="Password"
              className="name"
              value={password}
              onChange={handlePasswordChange}
            />
          </div>
          <div className="btn" style={{
            margintop: " 10px",
            cursor: "pointer"
          }}>
            <div className="login-button" style={{}}>
              <button onClick={Logindata} style={{ marginBottom: "15px" }} type="submit">Login</button>
              {/* <button type="button" onClick={handleGuestLogin}>Guest Login</button> */}
              {/* <button onClick={guestlogin}>Guest Login</button> */}
               <GuestLogin/>
              <div >
                <div>
                  <Main />
                </div>
                <Facebook />
                <p className="link">
                  <Link to="#" onClick={handleSignup}>Sign Up</Link>

                </p>
                <p className="link">
                  <Link to="#" onClick={handleAdminLogin}>Admin Login</Link>

                </p>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>

  );
};

export default LoginForm;
