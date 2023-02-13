const express = require("express");
const User = require("../models/User");
const bcrypt = require("bcrypt");
const Post = require("../models/Post");
const category = require("../models/Categories");
const router = express.Router();

// CREATING CATEGORIES
router.post("/", async (req, res) => {
  const createdCategory = new category(req.body);
  try {
    const newCategory = await createdCategory.save();
    res.status(200).json(newCategory);
  } catch (error) {
    res.status(500).json({ message: error });
  }
});

//GET CATEGORIES
router.get("/", async (req, res) => {
    try {
      const cats = await category.find();
      res.status(200).json(cats);
    } catch (error) {
      res.status(500).json({ message: error });
    }
  });
module.exports = router;
