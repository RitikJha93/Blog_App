const express = require("express");
const User = require("../models/User");
const bcrypt = require("bcrypt");
const Post = require("../models/Post");
const router = express.Router();

// CREATING POST
router.post("/", async (req, res) => {
  const newPost = new Post(req.body);
  try {
    const createdPost = await newPost.save();
    res.status(200).json(createdPost);
  } catch (error) {
    res.status(500).json({ message: error });
  }
});

//UPDATE POST
router.put("/:id", async (req, res) => {
  try {
    const user = await Post.findById(req.params.id);
    if (user.username === req.body.username) {
      try {
        const updatedPost = await Post.findByIdAndUpdate(
          req.params.id,
          { $set: req.body },
          { new: true }
        );
        res.status(200).json(updatedPost);
      } catch (error) {
        res.status(500).json({ message: error });
      }
    } else {
      res.status(500).json({ message: "You can only update your posts" });
    }
  } catch (error) {
    res.status(500).json({ message: error });
  }
});

//DELETNG POST
router.delete("/:id", async (req, res) => {
  try {
    const user = await Post.findById(req.params.id);
    if (user.username === req.body.username) {
      try {
        await Post.findByIdAndDelete(req.params.id);
        res.status(200).json("Post has been deleted successfully");
      } catch (error) {
        res.status(500).json({ message: error });
      }
    } else {
      res.status(500).json({ message: "You can only update your posts" });
    }
  } catch (error) {
    res.status(500).json({ message: error });
  }
});

//GET POST

router.get("/:id", async(req, res) => {
  try {
    const post = await Post.findById(req.params.id);
    res.status(200).json(post);
  } catch (error) {
    res.status(500).json({ message: error });
    console.log(error);
  }
});

//GET ALL POSTS
router.get("/", async (req, res) => {
  const { username, catName } = req.query;
  try {
    let post;
    if (username) {
      post = await Post.find({ username });
    }
    else if (catName) {
      post = await Post.find({
        categories: {
          $in: [catName],
        },
      });
    } else {
      post = await Post.find();
    }
    res.status(200).json(post);
  } catch (error) {
    res.status(500).json({ message: error });
  }
});
module.exports = router;
