import React from "react";
import { posts } from "../posts";
import { Form } from "react-router-dom";
import styles from '../styles/PostForm.module.css';

export async function action() {
  await posts.createPost();
}

export const PostForm = () => {
  return (
    <Form method="post" id="post-form" className={styles.form}>
      <label htmlFor="title">
        Title:
        <input type="text" id="title" name="title" />
      </label>
      <label htmlFor="content">
        Content:
        <input type="text" id="content" name="content" />
      </label>
      <label htmlFor="publish">
        Publish: 
        <input type="checkbox" id="publish" name="publish" />
      </label>
      <button>Submit</button>
    </Form>
  );
};
