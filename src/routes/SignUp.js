import React from "react";
import { Form, useActionData } from "react-router-dom";
import { posts } from "../posts";

export async function action() {
  await posts.createUser();
}

export const SignUp = () => {
  return (
    <Form method="post" id="sign-up-form">
      <label htmlFor="username">
        Email:
        <input type="email" name="username" id="username" required />
      </label>
      <label htmlFor="password">
        Password:
        <input type="password" name="password" id="password" required />
      </label>
      <label htmlFor="confirmPassword">
        Confirm Password:
        <input
          type="password"
          name="confirmPassword"
          id="confirmPassword"
          required
        />
      </label>
      <label htmlFor="firstName">
        First Name:
        <input type="text" name="firstName" id="firstName" />
      </label>
      <label htmlFor="lastName">
        Last Name:
        <input type="text" name="lastName" id="lastName" />
      </label>
      <button>Submit</button>
    </Form>
  );
};
