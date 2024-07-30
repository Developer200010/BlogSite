const router = require("express").Router();
const postModel = require("../models/Post.js");

// create post

router.post("/", async (req, res) => {
  const newPost = new postModel(req.body);
  try {
    const savePost = await newPost.save();
    res.status(200).json(savePost);
  } catch (error) {
    res.status(500).json(error);
  }
});

// update post

router.put("/:id", async (req, res) => {
  const post = await postModel.findById(req.params.id);
  if (post.username === req.body.username) {
    try {
      const updatedPost = await postModel.findByIdAndUpdate(
        req.params.id,
        { $set: req.body },
        { new: true }
      );
      res.status(200).json(updatedPost);
    } catch (error) {
      res.status(500).json(error);
    }
  } else {
    res.status(401).json("you can only update your post");
  }
});

//delete post

router.delete("/:id", async (req, res) => {
  const post = await postModel.findById(req.params.id);
  if (post.username === req.body.username) {
    try {
      await postModel.findByIdAndDelete(req.params.id);
      res.status(200).json("post has been deleted");
    } catch (error) {
      res.status(500).json(error);
    }
  } else {
    res.status(401).json("you can only delete your post");
  }
});

// get post

router.get("/:id", async (req, res) => {
  try {
    const post = await postModel.findById(req.params.id);
    res.status(200).json(post)
  } catch (error) {
    res.status(500).json(error)
  }
});

router.get("/", async (req,res)=>{
  const username = req.query.user;
  const catName = req.query.cat;
  try {
    let posts;
    if(username){
      posts = await postModel.find({username});
    }else if(catName){
      posts = await postModel.find({categories:{
        $in:[catName]
      }});
    }else{
      posts = await postModel.find();
    }
    res.status(200).json(posts)
  } catch (error) {
    res.status(500).json(error);
  }
})

module.exports = router;
