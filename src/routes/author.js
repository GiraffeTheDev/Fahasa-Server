const express = require("express");
const {
  getAllAuthorController,
  createAuthorController,
  deleteAuthorController,
} = require("../controller/author");

const router = express.Router();
const authorRoute = (app) => {
  router.post("/api/v1/create-author", createAuthorController);
  router.delete("/api/v1/delete-author/:id", deleteAuthorController);
  router.get("/api/v1/authors", getAllAuthorController);
  return app.use("/", router);
};
module.exports = authorRoute;
