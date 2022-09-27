export const posts = (() => {
  const server = "https://polar-brook-09608.herokuapp.com";
  // get posts
  const getPosts = async () => {
    try {
      const results = await fetch(`${server}/api/posts`, { mode: "cors" });
      const data = results.json() ?? [];
      console.log(data);
      return data;
    } catch (err) {
      console.error(err);
    }
  };

  return { getPosts, server };
})();
