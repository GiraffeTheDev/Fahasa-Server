const express = require("express");
const {
  createNewCommentController,
  getAllCommentWithProductController,
  getBookExistInCommentController,
  deleteCommentController,
} = require("../controller/comment");

const router = express.Router();
const commentRoute = (app) => {
  router.post("/api/v1/create-comment", createNewCommentController);
  router.get("/api/v1/all-comment/:id", getAllCommentWithProductController);
  router.get("/api/v1/book-comment", getBookExistInCommentController);
  router.delete("/api/v1/delete-comment/:id", deleteCommentController);
  return app.use("/", router);
};
module.exports = commentRoute;
