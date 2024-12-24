import React, { useState } from "react";
import "./App.css";
import Axios from "axios";

function CreateBlog() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const addData = () => {
    Axios.post("http://localhost:5000/insert", {
      name: name,
      email: email,
      title: title,
      description: description,
    }).then(() => {
      alert("Blog successfully created!");
      setName("");
      setEmail("");
      setTitle("");
      setDescription("");
    });
  };

  return (
    <div className="create-blog-container">
      <div className="create-blog-card">
        <h2>Create a New Blog</h2>
        <div className="input-group">
          <label htmlFor="name">Your Name</label>
          <input
            type="text"
            placeholder="Enter your name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className="input-group">
          <label htmlFor="email">Email Address</label>
          <input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="input-group">
          <label htmlFor="title">Blog Title</label>
          <input
            type="text"
            placeholder="Enter a catchy title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <div className="input-group">
          <label htmlFor="description">Blog Description</label>
          <textarea
            rows="6"
            placeholder="Write your blog content here..."
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          ></textarea>
        </div>
        <button className="btn-submit" onClick={addData}>
          Publish Blog
        </button>
      </div>
    </div>
  );
}

export default CreateBlog;
