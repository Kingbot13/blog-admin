import logo from "./logo.svg";
import "./App.css";
import { Nav } from "./components/Nav";
import { Sidebar } from "./components/Sidebar";
import { Outlet, useLoaderData } from "react-router-dom";
import { posts } from "./posts";

export async function loader() {
  const getPosts = await posts.getPosts();
  return { getPosts };
}

function App() {
  const { getPosts } = useLoaderData();
  return (
    <div className="App">
      <Nav />
      <Sidebar posts={getPosts.posts} />
      <Outlet />
    </div>
  );
}

export default App;
