const express = require("express");
const Blog = require("../models/Blog");

const router = express.Router();

router.post("/create", async (req, res) => {
  const { name, email, title, description, featured } = req.body;

  try {
    const blog = new Blog({ name, email, title, description, featured });
    await blog.save();
    res.status(201).json({ message: "Blog created successfully", blog });
  } catch (error) {
    res.status(500).json({ message: "Error creating blog", error });
  }
});

router.get("/featured", async (req, res) => {
  try {
    const featuredBlogs = await Blog.find({ featured: true }).sort({
      createdAt: -1,
    });
    res.status(200).json(featuredBlogs);
  } catch (error) {
    res.status(500).json({ message: "Error fetching featured blogs", error });
  }
});

module.exports = router;
