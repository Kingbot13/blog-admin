import React from "react";
import { useLoaderData } from "react-router-dom";
import { posts } from "../posts";

export async function loader({ params }) {
  const data = await posts.getSinglePost(params.id);
  return { data };
}

export const Post = () => {
  const { data } = useLoaderData();
  return (
    <div>
      <div>
        <h2>{data.post.title}</h2>
      </div>
      <div>
        <p>{data.post.content}</p>
      </div>
    </div>
  );
};
