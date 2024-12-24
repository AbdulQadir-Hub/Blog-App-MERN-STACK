

import React, { useEffect, useState } from "react";
import Axios from "axios";
import "./App.css";

function ChangeBlog() {
  const [data, setData] = useState([]);
  const [newValues, setNewValues] = useState({});

  useEffect(() => {
    Axios.get("http://localhost:5000/read")
      .then((res) => {
        setData(res.data);
      })
      .catch((error) => {
        console.error("There was an error fetching the data!", error);
      });
  }, []);

  const handleChange = (id, field, value) => {
    setNewValues((prevValues) => ({
      ...prevValues,
      [id]: {
        ...prevValues[id],
        [field]: value,
      },
    }));
  };

  const deleted = (id) => {
    Axios.delete(`http://localhost:5000/delete/${id}`)
      .then(() => {
        alert("Data deleted");
        Axios.get("http://localhost:5000/read").then((res) => {
          setData(res.data);
        });
      })
      .catch((error) => {
        console.error("There was an error deleting the data!", error);
      });
  };

  const updated = (id) => {
    const { newTitle, newDescription } = newValues[id] || {};

    if (!newTitle || !newDescription) {
      alert("Please enter both title and description before updating.");
      return;
    }

    Axios.put("http://localhost:5000/update", {
      id: id,
      newTitle: newTitle,
      newDescription: newDescription,
    })
      .then(() => {
        alert("Data updated");
        Axios.get("http://localhost:5000/read").then((res) => {
          setData(res.data);
        });
      })
      .catch((error) => {
        console.error("There was an error updating the data!", error);
      });
  };

  return (
    <div className="blog-page">
      <h1 className="page-title">Manage Blogs</h1>
      <div className="blog-grid">
        {data.map((value) => (
          <div key={value._id} className="blog-card">
            <div className="blog-content">
              <h2 className="blog-title">{value.title}</h2>
              <p className="blog-description">{value.description}</p>
              <p className="blog-author">By: {value.name}</p>
            </div>
            <div className="blog-actions">
              <label htmlFor="title">Edit Title</label>
              <input
                type="text"
                placeholder="Enter new title"
                onChange={(e) =>
                  handleChange(value._id, "newTitle", e.target.value)
                }
              />
              <label htmlFor="description">Edit Description</label>
              <textarea
                rows="3"
                placeholder="Enter new description"
                onChange={(e) =>
                  handleChange(value._id, "newDescription", e.target.value)
                }
              ></textarea>
              <button
                onClick={() => updated(value._id)}
                className="btn update-btn"
              >
                Update
              </button>
              <button
                onClick={() => deleted(value._id)}
                className="btn delete-btn"
              >
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ChangeBlog;
