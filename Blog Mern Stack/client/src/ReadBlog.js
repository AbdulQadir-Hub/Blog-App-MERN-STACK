

import React, { useEffect, useState } from "react";
import Axios from "axios";
import "./App.css";

function ReadBlog() {
  const [data, setdata] = useState([]);
  const [newDescription, setNewdescription] = useState("");
  const [newName, setNewName] = useState("");

  useEffect(() => {
    Axios.get("http://localhost:5000/read").then((res) => {
      setdata(res.data);
    });
  }, []);

  return (
    <>
    
      <div className="r1 r1-1">
        {data.map((value, i) => {
          return (
            <div className="r2 r2-2" key={value._id}>
              <div className="r3 r3-3">
                <h2>{value.title}</h2>
                <h4>{value.description}</h4>
                <h3>{value.name}</h3>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
}

export default ReadBlog;
