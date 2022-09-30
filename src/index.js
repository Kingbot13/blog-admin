import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App, { loader as rootLoader } from "./App";
import { SignUp, action as signUpAction } from "./routes/SignUp";
import { PostForm, action as postAction } from "./routes/PostForm";
import { LogIn, action as logInAction } from "./routes/LogIn";
import { Post, loader as postLoader } from "./components/Post";
import reportWebVitals from "./reportWebVitals";
import { createBrowserRouter, RouterProvider, Route } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    loader: rootLoader,
    children: [
      {
        path: "/sign-up",
        element: <SignUp />,
        action: signUpAction,
      },
      {
        path: "/create-post",
        element: <PostForm />,
        action: postAction,
      },
      {
        path: "/log-in",
        element: <LogIn />,
        action: logInAction,
      },
      {
        path: "/posts/:id",
        element: <Post />,
        loader: postLoader,
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
