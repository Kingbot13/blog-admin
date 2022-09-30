export const posts = (() => {
  const server = "https://polar-brook-09608.herokuapp.com";
  // get posts
  const storage = localStorage;
  const getPosts = async () => {
    try {
      const results = await fetch(`${server}/api/posts`, { mode: "cors" });
      const data = await results.json();
      return data ?? [];
    } catch (err) {
      console.error(err);
    }
  };

  // get single post
  const getSinglePost = async (id) => {
    try {
      const results = await fetch(`${server}/api/posts/${id}`);
      const data = await results.json();
      return data;
    } catch (err) {
      console.error(err);
    }
  };
  // convert FormData to json
  const _formatData = async (url, form) => {
    const formData = new FormData(form);
    const formDataObj = Object.fromEntries(formData.entries());
    const formDataJSON = JSON.stringify(formDataObj);
    const res = await fetch(url, {
      method: "post",
      headers: {
        "Content-Type": "application/JSON",
        Authorization: `bearer ${storage.getItem("token")}`,
      },
      body: formDataJSON,
      mode: "cors",
    });
    const data = await res.json();
    // check if route is log in route and save token in localStorage
    if (url.split("/").find((item) => item === "log-in")) {
      storage.setItem("token", data.token);
    }
    if (!data) {
      console.log(data.message);
    }
    return data;
  };

  const createUser = async () => {
    try {
      const form = document.getElementById("sign-up-form");
      await _formatData(`${server}/api/sign-in`, form);
    } catch (err) {
      console.error(err);
    }
  };

  const logIn = async () => {
    try {
      const form = document.getElementById("log-in-form");
      await _formatData(`${server}/api/log-in`, form);
    } catch (err) {
      console.error(err);
    }
  };

  const createPost = async () => {
    try {
      const form = document.getElementById("post-form");
      await _formatData(`${server}/api/posts`, form);
    } catch (err) {
      console.error(err);
    }
  };

  return { getPosts, server, createUser, logIn, createPost, getSinglePost };
})();
