import React from "react";
import { Form, redirect } from "react-router-dom";
import { posts } from "../posts";

export async function action() {
  await posts.logIn();
  return redirect("/");
}

export const LogIn = () => {
  return (
    <Form method="post" id="log-in-form">
      <label htmlFor="username">
        Email:
        <input type="email" name="username" id="username" required />
      </label>
      <label htmlFor="password">
        Password:
        <input type="password" name="password" id="password" required />
      </label>
      <button>Submit</button>
    </Form>
  );
};
