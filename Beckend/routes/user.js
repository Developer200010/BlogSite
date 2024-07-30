const router = require("express").Router();
const userModel = require("../models/User.js");
const postModel = require("../models/Post.js");
const bcrypt = require("bcrypt");
// UPDATE

router.put("/:id", async (req, res) => {
  if (req.body.userId === req.params.id) {
    if (req.body.password) {
      const salt = await bcrypt.genSalt(10);
      req.body.password = await bcrypt.hash(req.body.password, salt);
    }
    try {
      const updatedUser = await userModel.findByIdAndUpdate(
        req.params.id,
        { $set: req.body },
        { new: true }
      );
      res.status(200).json(updatedUser);
    } catch (error) {
      res.status(500).json(error.message);
    }
  } else {
    res.status(401).json("you can update only your account");
  }
});

router.delete("/:id", async (req, res) => {
  if (req.body.userId === req.params.id) {
    try {
      const user = await userModel.findById(req.params.id);
      try {
        await postModel.deleteMany({ username: user.username });
        await userModel.findByIdAndDelete(
          req.params.id,
          { $set: req.body },
          { new: true }
        );
        res.status(200).json("user has been deleted");
      } catch (error) {
        res.status(500).json(error.message);
      }
    } catch (error) {
      res.status(401).json("user not found");
    }
  } else {
    res.status(401).json("you can delete only your account");
  }
});

router.get("/:id", async (req, res) => {
  try {
    const user = await userModel.findById(req.params.id);
    const { password, ...other } = user._doc;
    res.status(200).json(other);
  } catch (error) {
    res.status(500).json(error)
  }
});
module.exports = router;
