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
    <div className="admincontainer"   style={{
      backgroundColor: "",
      paddingTop: "1rem",
      background: " rgb(34, 193, 195)", background: "linear-gradient(135deg, rgba(34, 193, 195, 1) 0%, rgba(253, 187, 45, 1) 100%)",
      fontfamily: "work sans",
      display: "flex",
      justifycontent: "center",
      textAlign: "center",
      height: "100vh",
      width: "100%"
    }}>
        <div style={{
        width: "400px",
        padding: "20px",
        backgroundcolor: "#FFFFFF",
        borderradius: "25px",
        boxshadow: "0 0 8px rgba(0, 0, 0, 0.1)",
        textalign: "center",
        margin: "100px auto"
      }}>
    
    <h2 style={{
          textalign: "center",
          marginbottom: "60px",
          fontfamily: 'open sans sans-serif',
          fontsize: "2rem"
        }}>Admin Login</h2>
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
        className="admin-fields"
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
