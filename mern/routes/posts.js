const express = require("express");
const Post = require("../models/posts"); // Corrected import statement

const router = express.Router();

// Save post
router.post("/post/Save", async (req, res) => {
  // give the req
  try {
    const newPost = new Post(req.body); // Use correct model name `Post`
    const savedPost = newPost.save(); // save the users input data
    res.status(201).json({
      success: "Post saved successfully",
      post: savedPost,
    });
  } catch (err) {
    res.status(400).json({
      error: err.message,
    });
  }
});

// Get all posts
router.get('/post/get', async (req, res) => {
    try {
        const posts = await Post.find().exec(); // Execute the query and await the result
        return res.status(200).json({
            success: true,
            existingPosts: posts // Return the fetched posts
        });
    } catch (err) {
        return res.status(400).json({
            error: err.message // Handle errors if any
        });
    }
});

//get a specific post
router.get("/post/get/:id", async (req, res) => {
    let postId = req.params.id;

    try {
        const post = await Post.findById(postId);

        if (!post) {
            return res.status(404).json({ success: false, message: "Post not found" });
        }

        return res.status(200).json({ success: true, post });
    } catch (err) {
        return res.status(400).json({ success: false, error: err.message });
    }
});


// Update post by ID
router.put('/post/update/:id', async (req, res) => {
    try {
        const postId = req.params.id;
        const updatedPost = await Post.findByIdAndUpdate(postId, { $set: req.body }, { new: true });

        if (!updatedPost) {
            return res.status(404).json({ message: "Post not found" });
        }

        return res.status(200).json({ success: "Updated successfully", updatedPost });
    } catch (err) {
        return res.status(400).json({ error: err.message });
    }
});

// Delete post by ID
router.delete('/post/delete/:id', async (req, res) => {
    try {
        const postId = req.params.id;
        const deletedPost = await Post.findByIdAndDelete(postId);

        if (!deletedPost) {
            return res.status(404).json({ message: "Post not found" });
        }

        return res.json({
            message: "Delete successful",
            deletedPost
        });
    } catch (err) {
        return res.status(400).json({
            message: "Delete unsuccessful",
            error: err.message
        });
    }
});

module.exports = router;
