const express = require("express");
const mongoose = require("mongoose");

const cors = require("cors");
const Blog = require("./models/Blog");
const subscriptionRoutes = require("./routes/subscriptionRoutes");
const blogRoutes = require("./routes/blog");

const app = express();
app.use(express.json());
app.use(cors());

app.use("/api/blogs", blogRoutes);
app.use("/api", subscriptionRoutes);

mongoose
  .connect("mongodb://localhost:27017/BlogApp", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("MongoDB connected successfully");
  })
  .catch((err) => {
    console.error("MongoDB connection error:", err);
  });

app.get("/read", async (req, res) => {
  Blog.find().then((data) => {
    res.send(data);
  });
});

app.post("/insert", async (req, res) => {
  const { name, email, title, description } = req.body;
  const blog1 = new Blog({ name, email, title, description });

  try {
    await blog1.save();
    res.status(201).send("Data inserted successfully");
  } catch (e) {
    console.error(e);
    res.status(500).send(`Error inserting data: ${e.message}`);
  }
});

app.put("/update", async (req, res) => {
  const { id, newDescription, newTitle } = req.body;

  try {
    const updatedData = await Blog.findById(id);
    if (!updatedData) {
      return res.status(404).send("Data not found");
    }
    updatedData.description = newDescription;
    updatedData.title = newTitle;
    await updatedData.save();
    res.send("Details updated successfully");
  } catch (e) {
    console.error(e);
    res.status(500).send(`Error updating data: ${e.message}`);
  }
});

app.delete("/delete/:id", async (req, res) => {
  const id = req.params.id;
  try {
    const deletedData = await Blog.findOneAndDelete({ _id: id }).exec();
    if (!deletedData) {
      return res.status(405).send("Data not found");
    }
    res.send("Data deleted");
  } catch (e) {
    console.log(e);
    res.status(500).send("Server error");
  }
});

app.listen(5000, () => {
  console.log("Server establish at port 5000");
});
