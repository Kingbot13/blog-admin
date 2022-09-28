import React from "react";
import { posts } from "../posts";
import { Form } from "react-router-dom";

export const PostForm = () => {
  return (
    <Form method="post" action={`${posts.server}/api/posts`}>
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
    </Form>
  );
};
