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
import ManagePosts from "../../myFolders/Page/ManagePost/ManagePost";
import UserDetails from "../../myFolders/Page/UserProfile/UserProfile";
import AdminTable from "../../myFolders/Page/AdminLogin/AdminTable";

import "./NavBar.css";

function Navbar() {
  const [click, setClick] = useState(false);
  const [authenticated, setAuthenticated] = useState(false);



  const [isAdminLoggedIn, setIsAdminLoggedIn] = useState(false);

  const handleAdminLogin = () => {
    setIsAdminLoggedIn(true);
  };

  const handleClick = () => {
    setClick(!click);
  };
  const loginHandler = () => {
    let isLoggedIn = localStorage.getItem("isLoggedIn");
    if (isLoggedIn) setAuthenticated(true);
  };

  useEffect(loginHandler, []);

  return (
    <Router>
      <div>
        <nav className="navbar" style={{ display: "flex", flexWrap: "wrap" }}>
          <div
            style={{ display: "flex", flexWrap: "wrap" }}
            className="nav-container"
          >
            <NavLink exact to="/" className="nav-logo">
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
              {/* {authenticated ? (
              // If the user is authenticated, render UserDetails component with user details
              <li className="nav-item">
                <UserDetails username="JohnDoe" email="" />
              </li> */}
              {/* ) : null} */}

              {/* <li className="nav-item">
                <NavLink
                  exact
                  to="/PostingBox"
                  activeClassName="active"
                  className="nav-links"
                  onClick={handleClick}
                >
                  Create post
                </NavLink>
              </li> */}

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
                  <button
                    className=""
                    style={{
                      width: "80px", fontsize: "50px", height: "55px", backgroundColor: "blue",
                      color: "white",
                      paddingtop: "7px"
                    }}
                    onClick={() => {
                      setAuthenticated(false);
                      localStorage.removeItem("isLoggedIn");
                      localStorage.removeItem("facebookUserData");
                      window.location.href = "/";
                    }}
                  >
                    Logout
                  </button>
                )}
                {authenticated ? (
                  ""
                ) : (
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

              {/* <li className="nav-item">
                <NavLink
                  exact
                  to="/AdminDashboard"
                  activeClassName="active"
                  className="nav-links"
                  onClick={handleClick}
                >
                  Admin Dashboard
                </NavLink>
              </li> */}


              {/* 
              <li className="nav-item">
                <NavLink
                  exact
                  to="/AdminTable"
                  activeClassName="active"
                  className="nav-links"
                  onClick={handleClick}
                >
                  AdminTable
                </NavLink>
                </li> */}


              <li className="nav-item">
                {/* <NavLink
                  exact
                  to="/AdminLogin"
                  activeClassName="active"
                  className="nav-links"
                  onClick={handleClick}
                >
                  AdminLogin
                </NavLink> */}

              </li>
              {/* <li className="nav-item">
                <NavLink
                  exact
                  to="/ManagePosts"
                  activeClassName="active"
                  className="nav-links"
                  onClick={handleClick}
                >
                  Manage Posts
                </NavLink>
              </li> */}
            </ul>
          </div>
          <div className="nav-icon" onClick={handleClick}>
            <i className={click ? "fas fa-times" : "fas fa-bars"}></i>
            <FontAwesomeIcon icon="fa-sharp fa-solid fa-bars" />
            <FontAwesomeIcon icon={faBars} />
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

          <Route exact path="/PostingBox" element={<PostingBox />} />

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

          <Route exact path="/AdminTable" element={<AdminTable />} />
          {/* <Route exact path="/AdminLogin" element={<AdminLogin />} /> */}
        </Routes>


      </div>
    </Router>
  );
}

export default Navbar;
