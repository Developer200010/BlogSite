import React from "react";
import "./index.css"
import { Link } from "react-router-dom";
const Card = ({post}) => {
  return (
    <>
    <div className="container mb-3">
      <div class="card">
        <div class="card-details">
          <p class="text-title">{post.title}</p>
          <p class="text-body">{post.desc.substring(0,15)}...</p>
          <p class="text-body">{new Date(post.createdAt).toDateString()}</p>

        </div>
        <Link to={`/post/${post._id}`}>
        <button class="card-button">readMore</button>
        </Link>
      </div>
      </div>
    </>
  );
};

export default Card;
