const express = require("express");
const User = require("../models/User");
const bcrypt = require("bcrypt");
const router = express.Router();

router.post("/register", async (req, res) => {
  try {
    const { username, email } = req.body;
    const salt = await bcrypt.genSalt(10);
    const hashPassword = await bcrypt.hash(req.body.password, salt);
    if (!username || !email || !req.body.password) {
      res.status(404).json({ message: "Fields cannot be empty" });
      return;
    }
    const newUser = new User({ username, email, password: hashPassword });
    const user = await newUser.save();
    const { password, ...doc } = await user._doc;
    res.status(201).json(doc);
  } catch (error) {
    res.status(500).json({ message: error });
  }
});
 
router.post("/login", async (req, res) => {
  try {
    const { username } = req.body;
    if (!username || !req.body.password) {
      res.status(404).json({ message: "Fields cannot be empty" });
      return;
    }
    const userExists = await User.findOne({ username });
    if (!userExists) {
      res.status(404).json({ message: "Invalid credentials" });
      return;
    }
    const validated = await bcrypt.compare(req.body.password, userExists.password);
    if (!validated) {
      res.status(404).json({ message: "Invalid credentials" });
      return;
    }

    const { password, ...data } = userExists._doc;
    res.status(200).json(data);
  } catch (error) {
    res.status(500).json({ message: error });
  }
});
module.exports = router;
