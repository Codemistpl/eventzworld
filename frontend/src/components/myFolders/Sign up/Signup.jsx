import React, { useState, useEffect } from "react";
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
  const [registrationStatus, setRegistrationStatus] = useState(null);
  const [passwordMatchError, setPasswordMatchError] = useState(false);
  const [location, setLocation] = useState("");
  const navigate = useNavigate();

  const handleLocationChange = (place) => {
    const lat = place.geometry.location.lat();
    const lng = place.geometry.location.lng();
  }


  const handleSubmit = (e) => {
    e.preventDefault();
  
    if (
      name === "" ||
      email === "" ||
      gender === "" ||
      password.length < 8 ||
      location === "" ||
      password !== confirmPassword
    ) {
      setRegistrationStatus("error");
      setPasswordMatchError(true);
      return;
    }

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
  };


  const register = async (event) => {
    event.preventDefault();
  
    // Validate phone number
    const isValidPhoneNumber = /^[0-9]{10}$/g.test(email);
    if (!isValidPhoneNumber) {
      setRegistrationStatus("error");
      setPasswordMatchError(true);
      return;
    }
  
    const res = await fetch(`${Api_url}/create_post/register`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, password, name, location }),
    });
    console.log(res);
    if (res.ok) {
      setRegistrationStatus("success");
      navigate("/login");
    } else {
      setRegistrationStatus("error");
    }
  };

  return (
    <div className="box">
      <div className="registration-container">
        <h1>Create Account</h1>
        {registrationStatus === "success" && (
          <div className="success-message">Registration successful!</div>
        )}
        {registrationStatus === "error" && (
          <div className="error-message">Registration Failed.</div>
        )}

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
          <select
            value={gender}
            onChange={(e) => setGender(e.target.value)}
            className="input-field"
          >
            <option value="">Select Gender</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
          </select>

          {/* <div>
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
          </div> */}
    
          <input
            type="password"
            placeholder="Password"
            className="input-field"
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
              setPasswordMatchError(false);
            }}
          />

          <input
            type="password"
            placeholder="Confirm Password"
            className="input-field"
            value={confirmPassword}
            onChange={(e) => {
              setConfirmPassword(e.target.value);
              setPasswordMatchError(false);
            }}
          />


          <div>
           <Search
              style={{
                marginbottom: "10px",
                // padding: "12px",
                border: "1px solid #dddfe2",
                borderradius: "4px",
                fontsize: "16px",
                display: "flex",
                flexdirection: "column",
                width: "85%",
                marginleft: "0",
                // padding: 20px;
                border: "1px solid #dddfe2",
                backgroundcolor: "#fff",
                borderradius: "5px"
              }}
              onLocationChange={handleLocationChange}
            />

          </div>
          <div >
            <button
              className="button-box"
              onClick={register}
              type="submit"
              disabled={passwordMatchError} 
            >
              Register
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default RegistrationForm;