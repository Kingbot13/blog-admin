import React from "react";
import { Form } from "react-router-dom";

export const LogIn = () => {
  return (
    <Form method="post">
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
