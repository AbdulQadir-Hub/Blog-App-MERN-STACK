import React from "react";
import "./App.css";
import BloggWAb from "./BloggWAB.jpg";

import Subscription from "./Subscription";
function First() {
  return (
    <div>
      <div className="first-page">
        <div className="content-wrapper">
          <h1 className="headline">Welcome to My Professional Blog</h1>
          <p className="subheadline">
            Explore insightful articles, resources, and knowledge that inspire
            growth and innovation.
          </p>

          <img src={BloggWAb} alt="Get Started" className="cta-image" />
        </div>
      </div>

      <Subscription />
    </div>
  );
}

export default First;

