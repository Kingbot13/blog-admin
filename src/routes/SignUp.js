import React from "react";

export const SignUp = () => {
  return (
    <form method="post">
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
    </form>
  );
};
