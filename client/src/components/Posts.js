import { useEffect, useState } from "react";
import { BrowserRouter as Router, Link, Switch, Route } from "react-router-dom";
import SinglePost from "./SinglePost";

const Posts = () => {
  const [posts, setPosts] = useState([]);
  const [currentId, setCurrentId] = useState("");

  useEffect(() => {
    const getAllPosts = async () => {
      const response = await fetch(`/api/posts`);
      const data = await response.json();
      setPosts(data.posts);
    };
    getAllPosts();
  }, []);

  useEffect(() => {
    const TOKEN = window.localStorage.getItem("token");
    const checkAuth = async () => {
      const response = await fetch(`/api/users/authenticate`, {
        headers: {
          Authorization: `Bearer ${TOKEN}`,
        },
      });
      const data = await response.json();
      setCurrentId(data.user.id);
    };
    checkAuth();
  }, []);

  return (
    <>
      <div className="postsmain">
        <h1>These posts are JUICY!</h1>
        {console.log(posts)}
        {posts.map((post) => (
          <div key={post.id} className="allposts">
            <h4 className="posttitle">{post.title}</h4>
            <p className="postauthor">By {post.author.name}</p>
            <Link to={`/posts/${post.id}`}>
              <p>See more</p>{" "}
            </Link>
            {currentId === post.author.id ? (
              <Link to={`/edit/${post.id}`}>
                <p>Edit post</p>
              </Link>
            ) : null}
          </div>
        ))}
      </div>
    </>
  );
};

export default Posts;
