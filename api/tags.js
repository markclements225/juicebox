const express = require("express");
const tagsRouter = express.Router();
const { getAllTags, getAllPosts } = require("../db");

tagsRouter.get("/", async (req, res) => {
  const tags = await getAllTags();

  res.send({
    tags,
  });
});

module.exports = tagsRouter;
