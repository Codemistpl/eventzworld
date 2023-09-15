import React, { useState,useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./Signup.css";
import Main from "../Main";
import Search from '.././Google Search/Search'
import { Api_url } from "../../../constant";

const RegistrationForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [gender, setGender] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [location, setLocation] = useState("");
  const navigate = useNavigate();

  const handleLocationChange = (place) => {
    const lat = place.geometry.location.lat();
    const lng = place.geometry.location.lng();}

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = {
      name: "",
    address: "",
    phone: "",
    role: "",
    gender: "",
    sport: "",
    email: "",
    lat: "",
    lng: "",
    };
    console.log("Form Data:", formData);

    

    // Perform registration logic with form data
    // You can add code to handle storing the registration details

    // After successful registration, redirect to login page
   
  };

  
  // useEffect(() => {
  //   getregisterPlayers();
  //   let a;
  //   let current = [];
  //   current.push();
  // }, []);

  // const [map, setMap] = useState(null);

  const register = async (event) => {
    event.preventDefault();
    // console.log("Form submitted", formData);

    if (name === "" || email === "" || password === "" || confirmPassword === "" || location === "") {
      alert("Please fill in all fields");
      return;
    }
  
    if (password !== confirmPassword) {
      alert("Passwords do not match");
      return;
    }

    const res = await fetch(`${Api_url}/create_post/register`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email , password , name }),
    });
    console.log(res);
    navigate("/login");
  };

  return (
    <div className="box">
      <div className="registration-container">
        <h1>Create Account</h1>
        <form onSubmit={handleSubmit}>
          <div>
            <input
              type="text"
              placeholder="Name"
              className="input-field"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div>
            <input
              type="text"
              placeholder="Email/Mobile"
              className="input-field"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div>
            <input
              type="text"
              placeholder="Gender"
              className="input-field"
              value={gender}
              onChange={(e) => setGender(e.target.value)}
            />
          </div>
          <div>
            <input
              type="password"
              placeholder="Password"
              className="input-field"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div>
            <input
              type="password"
              placeholder="Confirm Password"
              className="input-field"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
            />
          </div>
          <div>
            {/* <input
              type="text"
              placeholder="Location"
              className="input-field"
              value={location}
              // onChange={(e) => setLocation(e.target.value)}
              
            /> */}
           
            <Search style={{  marginbottom: "10px",
    // padding: "12px",
    border: "1px solid #dddfe2",
    borderradius: "4px",
    fontsize: "16px",
    display: "flex",
    flexdirection: "column",
    width: "85%",
    marginleft:"0",
    // padding: 20px;
    border: "1px solid #dddfe2",
    backgroundcolor: "#fff",
    borderradius: "5px"}}
    onLocationChange={handleLocationChange}
    />
          
          </div>
          <div >
            <button className="button-box" onClick={register} type="submit">Register</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default RegistrationForm;
