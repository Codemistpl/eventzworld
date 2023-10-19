const express = require("express");
const {
  CreatePost,
  Logindata,
  getCreatePost,
  getPostbylocation,
  register,
  login,
  guestlogin,
  aprooveData,
  getDatabyid,
  getCreatePostbyid,
  responseFacebook,
  saveUserData,
  rejectData,
  verifyUser,
  updateProfile,
  getApprovedData,
  getRejectedData
} = require("../controllers/create_postController");
const { upload } = require("../utils/util");
const router = express.Router();
// router.post("/logindata",Logindata);
router.post("/CreatePost", upload, CreatePost)
router.get("/getCreatePost", getCreatePost)
router.post("/register", register)
router.post("/login", login)
router.post("/guestlogin", guestlogin)
router.post('/responseFacebook', responseFacebook)
router.post('/saveUserData',saveUserData);
router.get('/getPostbylocation/:location', getPostbylocation)
router.get('/getCreatePostbyid/:id', getCreatePostbyid);
router.post('/aprooveData', aprooveData)
router.post('/rejectData', rejectData)
router.get('/getDatabyid', getDatabyid)
router.get('/getApprovedData', getApprovedData)
router.get('/getRejectedData', getRejectedData)
router.post('/verifyUser', verifyUser);
router.post('/updateProfile', updateProfile);


module.exports = router;