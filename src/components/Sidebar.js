import React from "react";
import { Link } from "react-router-dom";

export const Sidebar = ({ posts }) => {
  return (
    <ul>
      {posts.length ? (
        posts.map((post) => (
          <li key={post._id}>
            <Link to={`/posts/${post._id}`}>{post.title}</Link>
          </li>
        ))
      ) : (
        <li>No posts</li>
      )}
    </ul>
  );
};
