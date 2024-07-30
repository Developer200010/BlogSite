const router = require("express").Router();
const userModel = require("../models/User.js");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const isLoggedIn = require("../utils/isLoggedIn.js");

router.post("/register", async (req, res) => {
  try {
    let { username, email, password } = req.body;
    bcrypt.genSalt(10, function (err, salt) {
      bcrypt.hash(password, salt, async function (err, hashed) {
        const newUser = new userModel({
          username,
          email,
          password: hashed,
        });
        const user = await newUser.save();
        const token = jwt.sign(
          { email: user.email, userId: user._id },
          "ssshhhshhh"
        );
        res.cookie("token", token);
        res.status(200).json(user);
      });
    });
  } catch (error) {
    res.status(500).json(error);
  }
});

router.post("/login", async (req, res) => {
  try {
    const user = await userModel.findOne({ email: req.body.email });
    !user && res.status(400).json("wrong credentials");
    const validated = await bcrypt.compare(req.body.password, user.password);
    !validated && res.status(400).json("wrong credentials");
    const { password, ...other } = user._doc;
    const token = jwt.sign(
      { email: user.email, userId: user._id },
      "ssshhhshhh"
    );
    res.cookie("token", token);
    res.status(200).json(other);
  } catch (error) {
    res.status(500).json(error);
  }
});

router.get("/logout", (req,res)=>{
  req.cookies("token", "");
  res.redirect('/')
})

module.exports = router;
