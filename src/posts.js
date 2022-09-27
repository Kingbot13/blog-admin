export const posts = (() => {
  const server = "https://polar-brook-09608.herokuapp.com";
  // get posts
  const getPosts = async () => {
    const results = await fetch(`${server}/api/posts`);
    const data = results.json();
    return data;
  };

  return { getPosts, server };
})();
