const express = require("express");
const router = express.Router();
const cloudinary = require("cloudinary").v2;
const dotenv = require("dotenv");
dotenv.config();

cloudinary.config({
  cloud_name: process.env.CLOUD_NAME,
  api_key: process.env.CLOUD_API_KEY,
  api_secret: process.env.CLOUD_SECRET_KEY,
});

router.post("/", async (req, res) => {
  const { image } = req.body;
  console.log(image);
  try {
    const result = await cloudinary.uploader.upload(image, {
      folder: "blog_app",
    });
    console.log(result.secure_url);
    res.status(200).json({ url: result.secure_url });
  } catch (error) {
    console.log(error);
  }
});

module.exports = router;
