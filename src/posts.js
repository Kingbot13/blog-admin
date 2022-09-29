export const posts = (() => {
  const server = "https://polar-brook-09608.herokuapp.com";
  // get posts
  const getPosts = async () => {
    try {
      const results = await fetch(`${server}/api/posts`, { mode: "cors" });
      const data = results.json() ?? [];
      return data;
    } catch (err) {
      console.error(err);
    }
  };

  const createUser = async () => {
    try {
      const form = document.getElementById("sign-up-form");
      const formData = new FormData(form);
      console.log([...formData]);
      const formDataObj = Object.fromEntries(formData.entries());
      const formDataJSON = JSON.stringify(formDataObj);
      console.log(formDataJSON);
      const res = await fetch(`${server}/api/sign-in`, {
        method: "post",
        headers: { "Content-Type": "application/JSON" },
        body: formDataJSON,
        mode: "cors",
      });
      const data = await res.json();
      if (!data) {
        console.log(data.message);
      }
      return data;
    } catch (err) {
      console.error(err);
    }
  };

  return { getPosts, server, createUser };
})();
