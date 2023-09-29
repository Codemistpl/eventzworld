const express = require("express");
const app = express();
const path = require('path');

const cors = require("cors");


app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'images')));
app.use((req, res, next) => {
  res.setHeader('Cross-Origin-Opener-Policy', 'same-origin');
  next();
});


const dotenv = require("dotenv");
dotenv.config();

app.get("/api", (req, res)=>{
  res.json("Hello from the Eventzworld");
})

app.get('/api/image/:image', (req, res) => {
    const image = req.params.image;
    // Determine the file path of the image
    const imagePath = path.join(__dirname, 'uploads',image);
  
    // Send the image file
    res.sendFile(imagePath);
  });

  app.get('/api/audio/:audio', (req, res) => {
    const audio = req.params.audio;
    // Determine the file path of the image
    const audioPath = path.join(__dirname, 'uploads',audio);
  
    // Send the image file
    res.sendFile(audioPath);
  });

  app.get('/api/video/:video', (req, res) => {
    const video = req.params.video;
    // Determine the file path of the image
    const videoPath = path.join(__dirname, 'uploads',video);

  });


app.use("/api/create_post",require('./routes/create_post'));
// app.use("facebook", require('./routes/facebook') );
// app.use("/AproovePost",require('./routes/AproovePost'));

app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ error: 'Internal Server Error' });
});


const constant = require("./config/constant");
const port = process.env.PORT || constant.PORT;
app.listen(port, ()=>{
  console.log(port, "This App is now running on Port "+port)
});