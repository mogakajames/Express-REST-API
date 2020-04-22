const express = require("express");

const router = express.Router();

const Post = require("../models/Post");

//Routes
//gets all the posts
router.get("/", async (req, res) => {
  try {
    const posts = await Post.find();
    res.json(posts);
  } catch (err) {
    res.json({ meg: err });
  }
});

//posts data to database
router.post("/", async (req, res) => {
  const post = new Post({
    title: req.body.title,
    description: req.body.Post,
  });
  try {
    const savedPost = await post.save();
    res.json(savedPost);
  } catch (err) {
    res.json({ msg: err });
  }
});

//gets data of a specific post

router.get("/:id", async (req, res) => {
  try {
    const post = await Post.findById(req.params.id);
    res.json(post);
  } catch (err) {
    res.json({ msg: err });
  }
});

//delete a specific post

router.delete("/:id", async (req, res) => {
  try {
    const deletePost = await Post.remove({ _id: req.params.id });
  } catch (err) {
    res.json({ msg: err });
  }
});

//update post

router.patch("/id", async (req, res) => {
  try {
    const updatePost = await Post.updateOne(
      { _id: req.params.id },
      { $set: { title: req.body.title } }
    );
  } catch (err) {
    res.json({ msg: err });
  }
});
//This is a full REST API for posting, updating, deleting and fetching  blog posts.
//Using cors (cross origin resource sharing) package, we allow for cross domain API calls
//MongoDB database engine is used
module.exports = router;
