var jwt = require("jsonwebtoken");
var config = require("../config/constant");
const bycrypt = require("bcrypt");
const { check } = require("express-validator");
const multer = require("multer");
const { diskStorage } = require("multer");

const winston = require('winston');

const logger = winston.createLogger({
  level: 'error',
  format: winston.format.json(),
  transports: [
    new winston.transports.File({ filename: 'logs/error.log', level: 'error' }),
  ],
});

const createToken = (user) => {
	var token = jwt.sign({ sub: user.email }, config.JWT_SECRET, {
		expiresIn: 172800, // expires in 24 hours
	});
	return token;
};
const verifyToken = (token) =>{
	var decoded = jwt.verify(token, config.JWT_SECRET);
	// console.log(decoded.foo) 
  if (decoded){
	return true
  }
  else{
	return false
  }
}


const verifyPassword = async (userpass, password) => {
	let match = await bycrypt.compare(password, userpass);
	if (match) {
		return true;
	} else {
		return false;
	}
};

const formValidator = ()=>{
[
	check("email").trim().isEmail().withMessage("must be a valid email"),
	check("password")
		.trim()
		.isLength({ min: 4, max: 20 })
		.withMessage("must be between 4 to 20 characters"),
	check("cpassword")
		.trim()
		.isLength({ min: 4, max: 20 })
		.withMessage("must be between 4 to 20 characters"),
	check("name").not().isEmpty(),
	check("mobile").not().isEmpty().isLength({ min: 10 }),
	check("username").not().isEmpty(),
	check("role").not().isEmpty(),
	check("status").not().isEmpty(),
]};

const createHash = async (myPlaintextPassword) => {
	saltRounds = 5;
	let hash = await bycrypt.hash(myPlaintextPassword, saltRounds);
	return hash;
};

const storage = multer.diskStorage({
	destination: function (req, file, cb) {
		cb(null, "uploads");
		
	},
	
	filename: function (req, file, cb ) {
		
		const uniqueSuffix =
			Date.now() + "-" + Math.round(Math.random() * 1e9) + fileType(file.fieldname);
		cb(null, file.fieldname + "-" + uniqueSuffix);
	},

});
const fileType = (fieldname)=>{
	if(fieldname== "video")
	{
		return  ".mp4"
	}
	if(fieldname== "image")
	{
		return ".jpg"
	}
	if(fieldname== "audio")
	{
		return ".mp3"
	}
}

const calculateDistance = (lat1, lon1, lat2, lon2) => {
    const R = 6371; 
    const dLat = (lat2 - lat1) * (Math.PI / 180);
    const dLon = (lon2 - lon1) * (Math.PI / 180);
    const a =
      Math.sin(dLat / 2) * Math.sin(dLat / 2) +
      Math.cos(lat1 * (Math.PI / 180)) *
      Math.cos(lat2 * (Math.PI / 180)) *
      Math.sin(dLon / 2) *
      Math.sin(dLon / 2);
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    const distance = R * c; 
    return distance;
  };

const upload = multer({ storage: storage }).fields([{ name: 'audio' }, { name: 'image' }, { name: 'video' }])

const tryCatch = (controller) => {
	return async (req, res) => {
		try {
			await controller(req, res);
		} catch (error) {
			
			logger.error('An error occurred:', error);
			res.status(500).json({
				success: false,
				message: "Something Went Wrong",
				error: error,
			});
		}
	};
};

module.exports = {
	createToken,
	verifyPassword,
	calculateDistance,
	formValidator,
	createHash,
	upload,
	tryCatch,
	verifyToken,
	logger
};