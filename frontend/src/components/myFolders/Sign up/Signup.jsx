import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Signup.css";
import Search from '.././Google Search/Search'
import { Api_url } from "../../../constant";

const RegistrationForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [gender, setGender] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [location, setLocation] = useState("");
  const [nameError, setNameError] = useState("");
  const [emailError, setEmailError] = useState("");
  const [genderError, setGenderError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [confirmPasswordError, setConfirmPasswordError] = useState("");
  const [successMessage, setSuccessMessage] = useState("");
  const [passwordMatchError, setPasswordMatchError] = useState(false);
  const navigate = useNavigate();

  const handleLocationChange = (place) => {
    const lat = place.geometry.location.lat();
    const lng = place.geometry.location.lng();
  }

  const handleSubmit = async (e) => {
    e.preventDefault();

    let valid = true;

    setNameError("");
    setEmailError("");
    setGenderError("");
    setPasswordError("");
    setConfirmPasswordError("");

    if (!name) {
      setNameError("Name is required.");
      valid = false;
    }

    if (!email) {
      setEmailError("Email is required.");
      valid = false;
    }

    if (!gender) {
      setGenderError("Gender is required.");
      valid = false;
    }

    if (password.length < 8) {
      setPasswordError("Password must be at least 8 characters long.");
      valid = false;
    }

    if (password !== confirmPassword) {
      setConfirmPasswordError("Passwords do not match.");
      valid = false;
    }
    if (!valid) {
      return;
    }

    try {
      const response = await fetch(`${Api_url}/create_post/register`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, gender, password }),
      });
    
      const data = await response.json();
    
      if (response.ok) {
        setSuccessMessage("User successfully registered.");
        setTimeout(() => {
          navigate("/login");
        }, 3000);
      } else {
        console.error("Error registering user:", data.error);
      }
    } catch (error) {
      console.error("Error registering user:", error);
    }
    
  };

  return (
    <div className="box">
      <div className="registration-container">
        <h1>Create Account</h1>
        <div style={{color:"green", fontSize:"20px"}}  className="success-message">{successMessage}</div>

        <form onSubmit={handleSubmit}>
          <div>
            <input
              type="text"
              placeholder="Name"
              className="input-field"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <div className="error-message">{nameError}</div>
          </div>

          <div>
            <input
              type="email"
              placeholder="Email"
              className="input-field"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <div className="error-message">{emailError}</div>
          </div>

          <select
            value={gender}
            onChange={(e) => setGender(e.target.value)}
            className="input-field">
            <option value="">Select Gender</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
          </select>
          <div className="error-message">{genderError}</div>

          <input
            type="password"
            placeholder="Password"
            className="input-field"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <div className="error-message">{passwordError}</div>

          <input
            type="password"
            placeholder="Confirm Password"
            className="input-field"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
          <div className="error-message">{confirmPasswordError}</div>

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

          <div>
            <button
              className="button-box"
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