import React from "react";
import { Form } from "react-router-dom";
import { posts } from "../posts";

export const SignUp = () => {
  return (
    <Form method="post" action={`${posts.server}/api/sign-in`}>
      <label htmlFor="username">
        <input type="email" name="username" id="username" />
      </label>
      <label htmlFor="password">
        <input type="email" name="password" id="password" />
      </label>
      <label htmlFor="confirmPassword">
        <input type="password" name="confirmPassword" id="confirmPassword" />
      </label>
      <label htmlFor="firstName">
        <input type="text" name="firstName" id="firstName" />
      </label>
      <label htmlFor="lastName">
        <input type="text" name="lastName" id="lastName" />
      </label>
      <button>Submit</button>
    </Form>
  );
};
