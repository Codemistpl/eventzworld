// import React, { useEffect, useState } from "react";
// import {
//   Form,
//   BrowserRouter as Router,
//   Routes,
//   Route,
//   NavLink,
//   Navigate,
//   Link,
// } from "react-router-dom";
// import UserLogin from "../../myFolders/Page/UserLogin/UserLogin";
// import ViewPage from "../../ViewPage/ViewPage";
// import PostingBox from "../Page/Create Post/PostingBox";
// import AdminDashboard from "../../myFolders/Page/AdmunDashboard/AdminDashboard";
// import AdminLogin from "../Page/AdminLogin/AdminLogin";
// import Fulldetail from "../../myFolders/Page/Fulldetail/Fulldetail";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faBars } from "@fortawesome/free-solid-svg-icons";
// import SeeMore from "../../myFolders/Page/SeeMore/SeeMore";
// import ManagePosts from "../../myFolders/Page/ManagePost/ManagePost";

// import AdminTable from "../../myFolders/Page/AdminLogin/AdminTable";

// import "./NavBar.css";

// function Navbar() {
//   const [click, setClick] = useState(false);
//   const [authenticated, setAuthenticated] = useState(false);
//   const [username, setUsername] = useState("");


//   const [isAdminLoggedIn, setIsAdminLoggedIn] = useState(false);

//   const handleAdminLogin = () => {
//     setIsAdminLoggedIn(true);
//   };

//   const handleClick = () => {
//     setClick(!click);
//   };

//   const loginHandler = () => {
//     let isLoggedIn = localStorage.getItem("isLoggedIn");
//     if (isLoggedIn) {
//       setAuthenticated(true);
//       setUsername(localStorage.getItem("userName"));
//     }
//   };

//   useEffect(loginHandler, []);

//   return (
//     <Router>
//       <div>
//         <nav className="navbar" style={{ display: "flex", flexWrap: "wrap", backgroundcolor: "rgb(34, 193, 195);" }}>
//           <div
//             style={{ display: "flex", flexWrap: "wrap" }}
//             className="nav-container"
//           >
//             <NavLink exact to="/" className="nav-logo" style={{fontWeight:"bold"}}>
//               EventzWorld
//             </NavLink>

//             <ul className={click ? "nav-menu active" : "nav-menu"}>
//               <li className="nav-item">
//                 <NavLink
//                   exact
//                   to="/ViewPage"
//                   activeClassName="active"
//                   className="nav-links"
//                   onClick={handleClick}
//                 >
//                   Home
//                 </NavLink>
//               </li>


//               {authenticated ? (
//                 <li className="nav-item">
//                   <NavLink
//                     exact
//                     to="/PostingBox"
//                     activeClassName="active"
//                     className="nav-links"
//                     onClick={handleClick}
//                   >
//                     CreatePost
//                   </NavLink>
//                 </li>
//               ) : null}



//               <li className="nav-item">
//                 {authenticated && (
//                   <div className="user-name" style={{ color: "white" }}>
//                     {username}
//                   </div>
//                 )}

//                 {authenticated && (
//                   <button
//                     className="logout-button"
//                     style={{
//                       width: "80px",
//                       fontSize: "16px",
//                       height: "40px",
//                       backgroundColor: "rgba(13, 110, 253, 0.25)",
//                       color: "white",
//                     }}
//                     onClick={() => {
//                       setAuthenticated(false);
//                       localStorage.removeItem("isLoggedIn");
//                       localStorage.removeItem("userName");
//                       localStorage.removeItem("userEmail");
//                       window.location.href = "/";
//                     }}
//                   >
//                     Logout
//                   </button>
//                 )}
//                 {authenticated ? (
//                   ""
//                 ) : (
//                   <NavLink
//                     exact
//                     to="/UserLogin"
//                     activeClassName="active"
//                     className="nav-links"
//                     onClick={handleClick}
//                   >
//                     Login
//                   </NavLink>
//                 )}
//               </li>
//             </ul>
//           </div>
//           <div className="nav-icon" onClick={handleClick}>
//             <i className={click ? "fas fa-times" : "fas fa-bars"}></i>
//             <FontAwesomeIcon icon="fa-sharp fa-solid fa-bars" />
//             <FontAwesomeIcon style={{}} icon={faBars} />
//           </div>
//         </nav>

//         <Routes>
//           <Route exact path="/PostingBox" element={<PostingBox />} />
//           <Route
//             exact
//             path="/UserLogin"
//             element={!authenticated ? <UserLogin loginHandler={loginHandler} /> : <Navigate to='/ViewPage' />}
//           />

//           <Route exact path="/ViewPage" element={authenticated ? <ViewPage /> : <Navigate to="/UserLogin" />} />

//           <Route exact path="/PostingBox" element={authenticated ? < PostingBox /> : <Navigate to="/UserLogin" />} />

//           <Route
//             exact
//             path="/AdminLogin"
//             element={<AdminLogin loginHandler={loginHandler} />}
//           />

//           <Route exact path="/Form" element={<Form />} />


//           <Route
//             exact
//             path="/AdminDashboard"
//             element={<AdminDashboard />}
//           />


//           <Route exact path="/" component={<AdminDashboard />} />
//           <Route path="/SeeMore/:id" element={<SeeMore />} />
//           {/* <Route path="/SeeMore/:id" component={SeeMore} /> */}

//           {/* <Route exact path="/ManagePosts" element={<ManagePosts />} /> */}

//           <Route exact path="/" component={<AdminDashboard />} />
//           {/* <Route path="/Fulldetail/" component={Fulldetail} /> */}

//           {/* <Route exact path="/AdminTable" element={authenticated ?<AdminTable /> :<Navigate to="/UserLogin" />} /> */}
//           <Route exact path="/AdminTable" element={<AdminTable />} />
//         </Routes>


//       </div>
//     </Router>
//   );
// }

// export default Navbar;


import React, { useEffect, useState } from "react";
import {
  Form,
  BrowserRouter as Router,
  Routes,
  Route,
  NavLink,
  Navigate,
  Link,
} from "react-router-dom";
import UserLogin from "../../myFolders/Page/UserLogin/UserLogin";
import ViewPage from "../../ViewPage/ViewPage";
import PostingBox from "../Page/Create Post/PostingBox";
import AdminDashboard from "../../myFolders/Page/AdmunDashboard/AdminDashboard";
import AdminLogin from "../Page/AdminLogin/AdminLogin";
import Fulldetail from "../../myFolders/Page/Fulldetail/Fulldetail";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import SeeMore from "../../myFolders/Page/SeeMore/SeeMore";
import Profile from "../../myFolders/Page/UserLogin/Profile";

import ManagePosts from "../../myFolders/Page/ManagePost/ManagePost";

import AdminTable from "../../myFolders/Page/AdminLogin/AdminTable";

import "./NavBar.css";

function Navbar() {
  const [click, setClick] = useState(false);
  const [authenticated, setAuthenticated] = useState(false);
  const [username, setUsername] = useState("");
  const [showDropdown, setShowDropdown] = useState(false); 


  const [isAdminLoggedIn, setIsAdminLoggedIn] = useState(false);

  const handleAdminLogin = () => {
    setIsAdminLoggedIn(true);
  };

  const handleClick = () => {
    setClick(!click);
  };

  const loginHandler = () => {
    let isLoggedIn = localStorage.getItem("isLoggedIn");
    if (isLoggedIn) {
      setAuthenticated(true);
      setUsername(localStorage.getItem("userName"));
    }
  };

  useEffect(loginHandler, []);

  const toggleDropdown = () => {
    setShowDropdown(!showDropdown);
  };


  return (
    <Router>
      <div>
        <nav className="navbar" style={{ display: "flex", flexWrap: "wrap", backgroundcolor: "rgb(34, 193, 195);" }}>
          <div
            style={{ display: "flex", flexWrap: "wrap" }}
            className="nav-container"
          >
            <NavLink exact to="/" className="nav-logo" style={{fontWeight:"bold"}}>
              EventzWorld
            </NavLink>

            <ul className={click ? "nav-menu active" : "nav-menu"}>
              <li className="nav-item">
                <NavLink
                  exact
                  to="/ViewPage"
                  activeClassName="active"
                  className="nav-links"
                  onClick={handleClick}
                >
                  Home
                </NavLink>
              </li>


              {authenticated ? (
                <li className="nav-item">
                  <NavLink
                    exact
                    to="/PostingBox"
                    activeClassName="active"
                    className="nav-links"
                    onClick={handleClick}
                  >
                    CreatePost
                  </NavLink>
                </li>
              ) : null}


              <li className="nav-item">
            {authenticated && (
              <div className="user-dropdown">
                <div
                  className="user-name"
                  style={{ color: "white", cursor: "pointer" }}
                  onClick={toggleDropdown}
                >
                  {username}
                </div>

                {showDropdown && (
                  <div className="dropdown-content">
                    {/* <NavLink
                      exact
                      to="/Profile"
                      className="nav-links"
                      onClick={() => {
                        setShowDropdown(false); 
                        handleClick(); 
                      }}
                    >
                      Profile
                    </NavLink> */}

           <NavLink exact to="/Profile" activeClassName="active" className="nav-links" onClick={handleClick}>
              Profile
           </NavLink>


                    <button
                      className="logout-button"
                      onClick={() => {
                        setAuthenticated(false);
                        localStorage.removeItem("isLoggedIn");
                        localStorage.removeItem("userName");
                        localStorage.removeItem("userEmail");
                        window.location.href = "/";
                      }}
                    >
                      Logout
                    </button>
                  </div>
                )}
              </div>
            )}

            {!authenticated && (
              <NavLink
                exact
                to="/UserLogin"
                activeClassName="active"
                className="nav-links"
                onClick={handleClick}
              >
                Login
              </NavLink>
            )}
          </li>
        </ul>
          </div>
          <div className="nav-icon" onClick={handleClick}>
            <i className={click ? "fas fa-times" : "fas fa-bars"}></i>
            <FontAwesomeIcon icon="fa-sharp fa-solid fa-bars" />
            <FontAwesomeIcon style={{}} icon={faBars} />
          </div>
        </nav>

        <Routes>
          <Route exact path="/PostingBox" element={<PostingBox />} />
          <Route
            exact
            path="/UserLogin"
            element={!authenticated ? <UserLogin loginHandler={loginHandler} /> : <Navigate to='/ViewPage' />}
          />

          <Route exact path="/ViewPage" element={authenticated ? <ViewPage /> : <Navigate to="/UserLogin" />} />

          <Route exact path="/PostingBox" element={authenticated ? < PostingBox /> : <Navigate to="/UserLogin" />} />

          <Route
            exact
            path="/AdminLogin"
            element={<AdminLogin loginHandler={loginHandler} />}
          />

          <Route exact path="/Form" element={<Form />} />


          <Route
            exact
            path="/AdminDashboard"
            element={<AdminDashboard />}
          />


          <Route exact path="/" component={<AdminDashboard />} />
          <Route path="/SeeMore/:id" element={<SeeMore />} />
          {/* <Route path="/SeeMore/:id" component={SeeMore} /> */}

          {/* <Route exact path="/ManagePosts" element={<ManagePosts />} /> */}

          <Route exact path="/" component={<AdminDashboard />} />
          {/* <Route path="/Fulldetail/" component={Fulldetail} /> */}
          <Route exact path="/Profile" element={<Profile />} />


          {/* <Route exact path="/AdminTable" element={authenticated ?<AdminTable /> :<Navigate to="/UserLogin" />} /> */}
          <Route exact path="/AdminTable" element={<AdminTable />} />
        </Routes>


      </div>
    </Router>
  );
}

export default Navbar;


