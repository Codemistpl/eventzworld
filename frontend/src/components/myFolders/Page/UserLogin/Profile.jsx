import React from 'react';
// import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';


function Profile() {

	return (

		<div>
        <h1 class="" style={{marginBottom:"20px"}}>Edit Profile</h1>
			<div class="container bootstrap snippets bootdey">

      {/* <hr/> */}
	<div class="row">

      <div class="col-md-3">
        <div class="text-center">
          <img src="https://bootdey.com/img/Content/avatar/avatar7.png" class="avatar img-circle img-thumbnail" alt="avatar"/>
          <h6>Upload a different photo...</h6>

          <input type="file" class="form-control"/>
        </div>
      </div>


      <div class="col-md-9 personal-info">
        <div class="alert alert-info alert-dismissable">
          <a class="panel-close close" data-dismiss="alert">×</a> 
          <i class="fa fa-coffee"></i>
          This is an <strong>.alert</strong>. Use this to show important messages to the user.
        </div>
        <h3>Personal info</h3>

        <form class="form-horizontal" role="form">
          <div class="form-group">
            <label class="col-lg-3 control-label">First name:</label>
            <div class="col-lg-8">
              <input class="form-control" type="text" value=""/>
            </div>
          </div>
          <div class="form-group">
            <label class="col-lg-3 control-label">Last name:</label>
            <div class="col-lg-8">
              <input class="form-control" type="text" value=""/>
            </div>
          </div>
          <div class="form-group">
            <label class="col-lg-3 control-label">Company:</label>
            <div class="col-lg-8">
              <input class="form-control" type="text" value=""/>
            </div>
          </div>
          <div class="form-group">
            <label class="col-lg-3 control-label">Email:</label>
            <div class="col-lg-8">
              <input class="form-control" type="text" value=""/>
            </div>
          </div>
          <div class="form-group">
            <label class="col-lg-3 control-label">Time Zone:</label>
            <div class="col-lg-8">
              <div class="ui-select">
                <select id="user_time_zone" class="form-control">
                  <option value="Hawaii">(GMT-10:00) Hawaii</option>
                  <option value="Alaska">(GMT-09:00) Alaska</option>
                  <option value="Pacific Time (US &amp; Canada)">(GMT-08:00) Pacific Time (US &amp; Canada)</option>
                  <option value="Arizona">(GMT-07:00) Arizona</option>
                  <option value="Mountain Time (US &amp; Canada)">(GMT-07:00) Mountain Time (US &amp; Canada)</option>
                  <option value="Central Time (US &amp; Canada)" selected="selected">(GMT-06:00) Central Time (US &amp; Canada)</option>
                  <option value="Eastern Time (US &amp; Canada)">(GMT-05:00) Eastern Time (US &amp; Canada)</option>
                  <option value="Indiana (East)">(GMT-05:00) Indiana (East)</option>
                </select>
              </div>
            </div>
          </div>
        </form>
      </div>
  </div>
</div>
<hr/>
		</div>
	);
}
export default Profile;



// import React, { useState } from "react";
// import { useNavigate } from "react-router-dom";
// import "./Signup.css";

// import { Api_url } from "../../../constant";

// const Profile = () => {
//   const [name, setName] = useState("");
//   const [email, setEmail] = useState("");

//   const [password, setPassword] = useState("");
//   const [confirmPassword, setConfirmPassword] = useState("");

//   const [nameError, setNameError] = useState("");
//   const [emailError, setEmailError] = useState("");

//   const [passwordError, setPasswordError] = useState("");
//   const [confirmPasswordError, setConfirmPasswordError] = useState("");
//   const [successMessage, setSuccessMessage] = useState("");
//   const [passwordMatchError, setPasswordMatchError] = useState(false);
//   const navigate = useNavigate();



//   };

//   return (
//     <div className="">
//       <div className="">
//         <h1>Edit Profile</h1>
//         <div style={{ color: "red", fontSize: "20px" }} className="success-message">{successMessage}</div>

//         <form onSubmit={handleSubmit}>
//           <div>
//             <input
//               type="text"
//               placeholder="Name"

//               value={name}
//               onChange={(e) => setName(e.target.value)}
//             />
//             <div className="error-message">{nameError}</div>
//           </div>

//           <div>
//             <input
//               type="email"
//               placeholder="Email"

//               value={email}
//               onChange={(e) => setEmail(e.target.value)}
//             />
//             <div className="error-message">{emailError}</div>
//           </div>



//           <input
//             type="password"
//             placeholder="Password"

//             value={password}
//             onChange={(e) => setPassword(e.target.value)}
//           />
//           <div className="error-message">{passwordError}</div>

//           <input
//             type="password"
//             placeholder="Confirm Password"

//             value={confirmPassword}
//             onChange={(e) => setConfirmPassword(e.target.value)}
//           />
//           <div className="error-message">{confirmPasswordError}</div>


//           <div>
//             <button
//               className="button-box"
//               type="submit"
//               disabled={passwordMatchError}
//             >
//               Update
//             </button>
//           </div>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default Profile;