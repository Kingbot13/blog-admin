import React from "react";
import { Link } from "react-router-dom";

export const Sidebar = ({ posts }) => {
  return (
    <ul>
      {posts.length ? (
        posts.map((post) => (
          <li>
            <Link to={post.url}></Link>
          </li>
        ))
      ) : (
        <li>No posts</li>
      )}
    </ul>
  );
};
