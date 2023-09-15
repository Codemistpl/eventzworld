import React, { useEffect, useState } from "react";
import LoginForm from "../Login/LoginForm";
// import TopNav from "../TopNav";
// import Body from "./Body";
// import Footer from "./Footer";
// import Mapp from "./Mapp";
// import "./navbar.css";
// import Searchbox from "./Searchbox";
// import Container from "react-bootstrap/Container";

// import Footer from "./Footer";

function Home() {
  const [marker, setMarker] = useState({
    lat: 45,
    lng: 76,
  });
  useEffect(() => {
    console.log("shubham", marker);
  }, [marker]);
  // console.log("from search", data);
  return (
    <>
     {/* <LoginForm/> */}


    </>
  );
}

export default Home;