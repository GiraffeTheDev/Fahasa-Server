const express = require("express");
const {
  createNewsController,
  deleteNewsController,
  getAllNewsController,
  getOneNewsController,
  updateNewsController,
  searchNewsByNameController,
} = require("../controller/news");
const { searchCateByNameController } = require("../controller/category");

const router = express.Router();
const newsRoute = (app) => {
  router.post("/api/v1/create-news", createNewsController);
  router.delete("/api/v1/delete-news/:id", deleteNewsController);
  router.get("/api/v1/news", getAllNewsController);
  router.get("/api/v1/new/:id", getOneNewsController);
  router.put("/api/v1/update-news", updateNewsController);
  router.get("/api/v1/search-news", searchNewsByNameController);
  return app.use("/", router);
};
module.exports = newsRoute;
