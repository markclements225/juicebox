const express = require("express");
const tagsRouter = express.Router();
const { getAllTags, getAllPosts, getPostsByTagName } = require("../db");

tagsRouter.get("/", async (req, res) => {
  const tags = await getAllTags();

  res.send({
    tags,
  });
});

tagsRouter.get("/:tagName/posts", async (req, res, next) => {
  const tagName = req.params.tagName;
  try {
    const matchingPosts = await getPostsByTagName(tagName);
    res.send(matchingPosts);
  } catch ({ name, message }) {
    next({ name, message });
  }
});

module.exports = tagsRouter;
