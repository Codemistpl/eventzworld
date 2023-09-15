
// import './App.css';
// import Form from "./Components/Form"
import { GoogleOAuthProvider } from '@react-oauth/google';
import 'bootstrap/dist/css/bootstrap.min.css';

import NavBar from '../src/components/myFolders//Navbar/NavBar'
// import LoginForm from "./Components/Login/LoginForm"
import React from "react";
// import Home from "./Components/Page/Home";
// import Signup from "./Components/Sign up/Signup"

// import CreatePost from '../src/Components/Page/Create Post/CreatePost'
// import CreatePost from '../src/components/myFolders/Page/Create Post/CreatePost'
// import Search from "./Components/Search"
// import Signup from './Components/Sign up/Signup'
// import PostFeed from '../src/Components/PostFeed/PostFeed'
// import NavBar from '../src/components/NavBar
import PostingBox from './components/myFolders/Page/Create Post/PostingBox'
import ViewPage from '../src/components/ViewPage/ViewPage'
// import FilterForm from './components/myFolders/Page/FilterForm/FilterForm';
import Search from '../src/components/myFolders/Google Search/Search'
// import { UserProvider } from "./UserContext"
import Userlogin from '../src/components/myFolders/Page/UserLogin/UserLogin'
import ManagePosts from '../src/components/myFolders/Page/ManagePost/ManagePost'
import AdminDashboard from './components/myFolders/Page/AdmunDashboard/AdminDashboard';
import AdminTable from '../src/components/myFolders/Page/AdminLogin/AdminTable'
import Main from '../src/components/myFolders/Main'
import AdminLogin from './components/myFolders/Page/AdminLogin/AdminLogin';
import PostBox from './components/myFolders/Page/Create Post/PostingBox';
// import AdminTable from './components/myFolders/Page/AdminLogin/AdminTable';

function App() {
  return (
    <>
    <GoogleOAuthProvider clientId="148618350247-ad4j5njo6ke6cop11v68qi9necnbo3df.apps.googleusercontent.com">
    <NavBar/>
    {/* <PostingBox/> */}
    {/* <ViewPage/> */}
    {/* <ViewPage/> */}
    
    {/* <Search/> */}
    {/* <Userlogin/> */}
    {/* <ManagePosts/> */}
    {/* <AdminDashboard/> */}
    {/* <AdminTable/> */}
    {/* <Main/> */}
    {/* <AdminLogin/>    */}
    {/* <PostBox/> */}
    
    
    
    </GoogleOAuthProvider>
    {/* <Demo/> */}
    {/* <PostFeed/> */}
    {/* <FilterForm/> */}
    
    
   
    </>
  );
}

export default App;






// import "./App.css";
// import  NavBar  from "./components/NavBar";
// import { BrowserRouter as Router,  Routes,  Route } from "react-router-dom";
// import { Home } from "./components/Pages/Home";
// import { About } from "./components/Pages/About";
// import { Blog } from "./components/Pages/Blog";
// import { Contact } from "./components/Pages/Contact";
// // import Form from './components/Form';
// import Login from '../src/components/Pages/Login/LoginForm'
// import PostingBox from './components/Pages/PostingBox';
// import Footer from './components/Footer';
// import ViewPage from "./components/ViewPage/ViewPage";
// import ImageuUpoload from './components/ImageUpoload'
// import Navbar from "../src/components/myFolders/Navbar/Navbar";
// // import ViewPage from './ViewPage';
// import { GoogleOAuthProvider } from '@react-oauth/google';
// function App() {
//   return (
//     <>
//     <GoogleOAuthProvider clientId="148618350247-ad4j5njo6ke6cop11v68qi9necnbo3df.apps.googleusercontent.com">
      
//         <NavBar />
      
     
      

//       </GoogleOAuthProvider>;
//   </>
//   );
// }

// export default App;