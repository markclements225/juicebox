import { useEffect, useState } from "react";
import { BrowserRouter as Router, Link, Switch, Route } from "react-router-dom";
import SinglePost from "./SinglePost";

const Posts = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const getAllPosts = async () => {
      const response = await fetch(`/api/posts`);
      const data = await response.json();
      setPosts(data.posts);
      console.log(data.posts);
    };
    getAllPosts();
  }, []);
  return (
    <>
      <div className="postsmain">
        <h1>These posts are JUICY!</h1>
        {posts.map((post) => (
          <Link to={`/posts/${post.id}`}>
            <div key={post.id} className="allposts">
              <h4 className="posttitle">{post.title}</h4>
              <p className="postauthor">By {post.author.name}</p>
            </div>
          </Link>
        ))}
      </div>
    </>
  );
};

export default Posts;
