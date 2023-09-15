import React from "react";
// import './App.css'
import './Form.css'
import profile from "../image/log.jpg";
import email from "../image/email.jpg";
import pass from "../image/pass.png";
function Form() {
  
  return (
    <div className="main">
      <div className="sub-main">
       <div>
        <form>
          <div className="imgs">
            <div className="container-image">
              <img src={profile} alt="profile" className="profile" />
            </div>
        </div>
        <div>
            <h1>Login Page</h1>
            <div>
              <img src={email} alt="email" className="email" />
              <input type="text" placeholder="user name" className="name" />
          </div>
       <div className="second-input">
              <img src={pass} alt="pass" className="email  " />
              <input type="password" placeholder="Password" className="name" />
          </div>
          <div className="login-button">
           <button>Login</button> </div>
          <p className="link">
            <a href="#">Forgot Password</a> Or <a href="#">Sign Up</a>
          </p>
          </div>
          </form>
        </div>
      </div>
   </div>
  );
}
export default Form;