import { useEffect, useState } from "react";
import { useParams } from "react-router";

const SinglePost = () => {
  const params = useParams();
  const [isLoaded, setIsLoaded] = useState(false);
  const [singlePost, setSinglePosts] = useState({});

  useEffect(() => {
    const getSinglePost = async (postId) => {
      const response = await fetch(`/api/posts/${postId}`);
      const data = await response.json();
      console.log(data.posts);
      setSinglePosts(data.posts);
      setIsLoaded(true);
    };
    getSinglePost(+params.id);
  }, []);
  {
    console.log(singlePost);
  }
  return (
    <div>
      {isLoaded ? (
        <div>
          <h1>{singlePost.title}</h1>
          <p>By {singlePost.author.name}</p>
          <h3>{singlePost.content}</h3>
        </div>
      ) : null}
    </div>
  );
};

export default SinglePost;
