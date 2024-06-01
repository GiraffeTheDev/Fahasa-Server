const express = require("express");
const {
  getAllAuthorController,
  createAuthorController,
  deleteAuthorController,
  updateAuthorController,
  getOneAuthorController,
} = require("../controller/author");

const router = express.Router();
const authorRoute = (app) => {
  router.post("/api/v1/create-author", createAuthorController);
  router.delete("/api/v1/delete-author/:id", deleteAuthorController);
  router.get("/api/v1/authors", getAllAuthorController);
  router.get("/api/v1/author/:id", getOneAuthorController);
  router.put("/api/v1/update-author", updateAuthorController);
  return app.use("/", router);
};
module.exports = authorRoute;
