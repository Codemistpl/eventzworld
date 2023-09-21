import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
// import onadminLogin from '../AdminLogin/onadminLogin'
import "./Admin.css"
import { Link } from "react-router-dom";


function AdminLogin() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleLogin = () => {
    
    if (username === "aman@test.com" && password === "1234") {
    
      navigate ('/AdminTable')
    } else {
      setError("Invalid credentials");
    }
  };

  return (
    <div className="admincontainer" style={{}}>
        <div className="ad"style={{}}>
      <h2 style={{}}>Admin Login</h2>

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
      
      <button className="admin-btn"onClick={handleLogin}>Login</button>
      {error && <p>{error}</p>}
      </div>
    </div>
  );
}

export default AdminLogin;
