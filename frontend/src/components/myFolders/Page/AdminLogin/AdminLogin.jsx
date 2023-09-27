import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Admin.css";
import { Link } from "react-router-dom";

function AdminLogin() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleLogin = () => {
    if (username.trim() === "" && password.trim() === "") {
      setError("Username, Password are required!");
    } else if (username.trim() === "") {
      setError("Username is a necessary field");
    } else if (password.trim() === "") {
      setError("Password is a necessary field");
    } else if (username !== "aman@test.com") {
      setError("Invalid email");
    } else if (password !== "1234") {
      setError("Wrong password");
    } else {
      setError("");
      navigate('/AdminTable');
    }
  };

  return (
    <div className="admincontainer">
      <div className="ad">
        <h2>Admin Login</h2>
        <input
          type="text"
          placeholder="Username"
          className="admin-fields"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          className="admin-field"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button className="admin-btn" onClick={handleLogin}>
          Login
        </button>
        {error && <p>{error}</p>}
      </div>
    </div>
  );
}

export default AdminLogin;
