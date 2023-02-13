const express = require("express");
const User = require("../models/User");
const bcrypt = require("bcrypt");
const router = express.Router();

router.post("/register", async (req, res) => {
  const { username, email, password } = req.body;
  const salt = await bcrypt.genSalt(10);
  const hashPassword = await bcrypt.hash(password, salt);
  if (!username || !email || !password) {
    res.status(404).json({ message: "Fields cannot be empty" });
    return;
  }
  try {
    const newUser = new User({ username, email, password: hashPassword });
    const user = await newUser.save();
    res.status(201).json(user);
  } catch (error) {
    res.status(500).json({ message: error });
  }
});

module.exports = router;
