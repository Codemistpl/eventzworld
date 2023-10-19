const db = require("../models");
const { createToken, tryCatch } = require("../utils/util");
const { getDistance } = require("../services/services")
const bcrypt = require('bcrypt');
const { Op } = require('sequelize');


const User = db.users;


const FacebookData = User;

const responseFacebook = async (req, res) => {
  const { accessToken, name, id } = req.body;

  try {
    console.log("requested body", req.body);
    // Check if a user with the provided ID already exists
    const existingUser = await FacebookData.findOne({ where: { fb_id: id } });
    console.log(existingUser, "exuser")
    if (existingUser) {
      // If user exists, update the access token
      await existingUser.update({ accessToken });

      return res.status(200).json({
        message: 'Access token updated successfully', accessToken,
        name,
        id,
      });
    }

    // Create a new user if not already exists
    await FacebookData.create({
      accessToken,
      name,
      fb_id: id,
    });

    // Send a success response
    res.status(200).json({
      message: 'Facebook data saved successfully',
      accessToken,
      name,
      id,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal server error' });
  }
};

const GoogleData = User;

const saveUserData = async (req, res) => {
  const { clientId, credential, userData } = req.body;
  console.log('Request received:', req.body); // Log the request body


  try {
    if (!clientId) {
      return res.status(400).json({ message: 'Client ID is missing' });
    }

    let existingUser = await User.findOne({ where: { Client_Id: clientId } });

    if (existingUser) {
      await existingUser.update({ credential }); 

      return res.status(200).json({
        message: 'Access token updated successfully',
        credential,
        clientId 
      });
    }

    existingUser = await User.create({
      credential,
      Client_Id: clientId
    });

    res.status(200).json({
      message: 'Google data saved successfully',
      credential,
      clientId
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal server error' });
  }
};



const create_post = db.create_post;

const getDatabyid = async (req, res) => {
  try {
    const sevenDaysFromNow = new Date(
      new Date().getTime() + 7 * 24 * 60 * 60 * 1000
    );
    const Today = new Date(new Date().getTime() - 23 * 60 * 60 * 1000);
    // const userLocation = req.user.addres;
    // console.log(sevenDaysFromNow,'seven')
    // console.log(Today,'today')

    const postData = await create_post.findAll({
      where: {
        status: "1",
        // addres: userLocation,
        eventDate: {
          [Op.between]: [Today, sevenDaysFromNow],
        },
      },
    });

    res.json(postData);
  } catch (error) {
    console.error("Error fetching data:", error);
    res.status(500).json({ error: "Error fetching data" });
  }
};



const aprooveData = async (req, res) => {
  const approvedItems = req.body.selectedItems;

  try {
    
    for (const item of approvedItems) {
      await create_post.update(
        { status: "1" },
        {
          where: {
            id: item.id,
          },
        }
      );
    }

    res.status(201).json({ message: "Items approved successfully!" });
  } catch (error) {
    console.error("Error approving items:", error);
    res.status(500).json({ message: "Error approving items" });
  }
};

const getApprovedData = tryCatch(async (req, res) => {
  try {
    const page = req.query.page || 1; 
    const offset = (page - 1) * ITEMS_PER_PAGE;

    const approvedData = await create_post.findAndCountAll({
      where: { status: 1 },
      order: [['id', 'DESC'], ['name', 'ASC']],
      limit: ITEMS_PER_PAGE,
      offset: offset
    });

    const totalPages = Math.ceil(approvedData.count / ITEMS_PER_PAGE);

    res.status(200).json({ approvedData: approvedData.rows, totalPages });
  } catch (error) {
    console.error("Error fetching approved data:", error);
    res.status(500).json({ message: "Error fetching approved data" });
  }
});


const rejectData = async (req, res) => {
  const rejectedItems = req.body.selectedItems;

  try {
    for (const item of rejectedItems) {
      await create_post.update(
        { status: "2" }, 
        {
          where: {
            id: item.id,
          },
        }
      );
    }

    res.status(201).json({ message: "Items rejected successfully!" });
  } catch (error) {
    console.error("Error rejecting items:", error);
    res.status(500).json({ message: "Error rejecting items" });
  }
};


const getRejectedData = tryCatch(async (req, res) => {
  try {
    const rejectedData = await create_post.findAll({
      where: { status: 2 }, 
      
      order: [
        ['id', 'DESC'],
        ['name', 'ASC'],
      ],
    });

    res.status(200).json(rejectedData);
  } catch (error) {
    console.error("Error fetching rejected data:", error);
    res.status(500).json({ message: "Error fetching rejected data" });
  }
});



const Logindata = async (req, res) => {
  console.log(req.body);
  const playerdata = req.body.formData;
  const playerinputs = req.body.inputs;

  try {
    const newPlayer = await create_post.create(playerdata);
    console.log(playerdata);
    res.status(201).json(newPlayer);
  } catch (error) {
    console.error("Error creating player:", error);
    res.status(500).json({ message: "Error creating player" });
  }
};


const CreatePost = async (req, res) => {
  console.log(req.body.data, "body");
  let form = JSON.parse(req.body.data);
  let eventDate = form.eventDate;
  let eventTime = form.eventTime;

  let image = null;
  let audio = null;
  let video = null;

  // Check if the files have been uploaded
  if (req.files.image) {
    image = req.files.image[0].filename;
  }

  if (req.files.audio) {
    audio = req.files.audio[0].filename;
  }

  if (req.files.video) {
    video = req.files.video[0].filename;
  }

  const postdata = {
    name: form.name,
    eventVenue: form.eventVenue,
    category: form.category,
    image: image,
    audio: audio,
    video: video,
    eventDate: eventDate,
    eventTime: eventTime,
    addres: form.formatted_address,
    _lat: form.latitude,
    _lng: form.longitude,
    text: form.text,
  };

  try {
    const newdata = await create_post.create(postdata);
    console.log("newdata");
    res.status(201).json(newdata);
  } catch (error) {
    console.error("Error creating post:", error);
    res.status(500).json({ message: "Error creating Post" });
  }
};



const getPostbylocation = async (req, res) => {
  // const id = req.params.id;
  try {
    const distance = 25;
    const currentLocation = JSON.parse(req.params.location);
    console.log(currentLocation.lat)
    const lat = currentLocation.lat;
    const lng = currentLocation.lng;
    const getPostdata = await create_post.findAll({
      where: { status: 1 },
      //  where:{id:id},
      order: [
        ['id', 'DESC'],
        ['name', 'ASC'],
      ],
    });
    let filteredPosts = getPostdata.filter((it) => {
      return getDistance(parseFloat(it._lat), parseFloat(it._lng), lat, lng) <= distance;
    });
    res.status(200).json(filteredPosts);

  } catch (error) { console.log(error) }
} 



const ITEMS_PER_PAGE = 10; 

const getCreatePost = tryCatch(async (req, res) => {
  const page = req.query.page || 1; 
  
  const offset = (page - 1) * ITEMS_PER_PAGE;

  const getPostdata = await create_post.findAndCountAll({
    order: [['created_at', 'DESC']],
    limit: ITEMS_PER_PAGE,
    offset: offset
  });

  const totalPages = Math.ceil(getPostdata.count / ITEMS_PER_PAGE);

  res.status(200).json({ posts: getPostdata.rows, totalPages });
});



const getCreatePostbyid = async (req, res) => {
  const id = req.params.id;
  const getPostdata = await create_post.findAll({
    where: { id: id },
  }); 
  res.status(200).json(getPostdata); 
};


const register = async (req, res) => {
  const { name, email, password } = req.body;
  console.log("IN REGISTER");

  if (!name || !email || !password) {
    return res
      .status(400)
      .json({ error: "Name, email, and password are required fields." });
  }

  try {
    // Check if the user is already registered based on the email
    const existingUser = await User.findOne({ where: { email } });

    if (existingUser) {
      return res
        .status(409)
        .json({ error: "User with this email already exists." });
    }

    // Save the user data in the database
    const user = await User.create({ name, email, password });

    if (user) {
      res.json({ message: "User registered successfully." });
    } else {
      res.status(500).json({ error: "Failed to register user." });
    }
  } catch (error) {
    console.log(error);
    res
      .status(500)
      .json({ error: "An error occurred while registering the user." });
  }
};

const login = tryCatch(async (req, res) => {
  const { email, password } = req.body;
  console.log("IN LOGIN", email, password);

  if (!email || !password) {
    return res.status(400).json({ error: 'Email and password are required fields.' });
  }

  const user = await User.findOne({ where: { email } });

  if (!user) {
    return res.status(401).json({ error: 'Invalid email or password.' });
  }

  if (user.password !== password) {
    return res.status(401).json({ error: 'Invalid email or password.' });
  }

  const { name, Role } = user;

  return res.status(200).json({ message: 'success', Role: user.Role, Role, name, email: user.email });
});



const guestlogin = async (req, res) => {
  try {

    console.log("guest login")
    const guestUser = await User.findOne({ where: { name: 'guest' } });

    if (!guestUser) {
      return res.status(404).json({ error: "Guest user not found." });
    }
    console.log(req.body.password)
    if (req.body.password === 'guest@123') {
      const token = await createToken(guestUser);
      return res.json({ message: "Login successful.", token: token, Role: guestUser.role });
    } else {
      return res.status(401).json({ error: "Invalid password for guest user." });
    }
  } catch (error) {
    console.error("Error during guest login:", error);
    res.status(500).json({ error: "An error occurred during guest login." });
  }
};

const verifyUser = async (req, res) => {
  const { userId, oldPassword } = req.body;

  try {
    const user = await User.findByPk(userId);

    if (!user) {
      return res.status(404).json({ error: 'User not found' });
    }

    if (user.password !== oldPassword) {
      return res.status(401).json({ error: 'Invalid old password' });
    }

    return res.status(200).json({ message: 'User verified' });
  } catch (error) {
    console.error('Error:', error);
    return res.status(500).json({ error: 'Internal server error' });
  }
};

const updateProfile = async (req, res) => {
  const { userId, updatedData } = req.body;

  try {
    const user = await User.findByPk(userId);

    if (!user) {
      return res.status(404).json({ error: 'User not found' });
    }

    await user.update(updatedData);

    return res.status(200).json({ message: 'Profile updated successfully' });
  } catch (error) {
    console.error('Error:', error);
    return res.status(500).json({ error: 'Internal server error' });
  }
};




module.exports = {
  register,
  login,
  Logindata,
  guestlogin,
  responseFacebook,
  getApprovedData,
  getRejectedData,
  saveUserData,
  CreatePost,
  getCreatePost,
  getPostbylocation,
  getCreatePostbyid,
  aprooveData,
  rejectData,
  getDatabyid,
  verifyUser,
  updateProfile
};