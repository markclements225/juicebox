const getPosts = async () => {
  const response = await fetch(`/api/posts`);
  const posts = await response.json();
  return posts;
};

export default getPosts;
