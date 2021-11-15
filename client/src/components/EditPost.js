import { useHistory, useParams } from "react-router";
import React, { useState } from "react";
import SinglePost from "./SinglePost";

const EditPost = ({ isLoggedIn }) => {
  const params = useParams();
  const history = useHistory();
  const [authorId, setAuthorId] = useState("");
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [tags, setTags] = useState("");
  const TOKEN = window.localStorage.getItem("token");

  const handleSubmit = async (event) => {
    try {
      event.preventDefault();
      const response = await fetch(`/api/posts/${+params.id}`, {
        method: "PATCH",
        headers: {
          "Content-Type": "Application/json",
          Authorization: `Bearer ${TOKEN}`,
        },
        body: JSON.stringify({
          title,
          content,
          tags,
        }),
      });
      const data = await response.json();
    } catch (error) {
      console.error(error);
    }
    history.push("/posts");
  };

  return (
    <>
      {isLoggedIn ? (
        <>
          <h2>Edit your post</h2>
          <SinglePost postId={+params.id} />
          <form className="createPostForm" onSubmit={handleSubmit}>
            <label>
              Title:
              <input
                type="text"
                required
                name="title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
              />
            </label>
            <br />
            <label>
              Content:
              <input
                type="text"
                required
                name="content"
                value={content}
                onChange={(e) => setContent(e.target.value)}
              />
            </label>
            <br />
            <label>
              Tags:
              <input
                type="text"
                required
                name="tags"
                value={tags}
                onChange={(e) => setTags(e.target.value)}
              />
            </label>
            <br />
            <input type="submit" value="Create new listing" />
          </form>
        </>
      ) : (
        <h1>You must be logged to edit a new post</h1>
      )}
    </>
  );
};

export default EditPost;
