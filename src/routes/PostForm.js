import React from "react";
import { posts } from "../posts";

export const PostForm = () => {
  return (
    <form method="post" action={`${posts.server}/api/posts`}>
      <label htmlFor="title">
        <input type="text" id="title" name="title" />
      </label>
      <label htmlFor="content">
        <input type="text" id="content" name="content" />
      </label>
      <label htmlFor="publish">
        <input type="checkbox" id="publish" name="publish" />
      </label>
      <button>Submit</button>
    </form>
  );
};
