import React from "react";
import { Link } from "react-router-dom";
import styles from '../styles/Sidebar.module.css';

export const Sidebar = ({ posts }) => {
  return (
    <ul className={styles.ul}>
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
