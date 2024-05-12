const express = require("express");
const {
  getAllCategoryController,
  createCategoryController,
  deleteCategoryController,
} = require("../controller/category");

const router = express.Router();
const categoryRoute = (app) => {
  router.post("/api/v1/create-category", createCategoryController);
  router.delete("/api/v1/delete-category/:id", deleteCategoryController);
  router.get("/api/v1/categories", getAllCategoryController);
  return app.use("/", router);
};
module.exports = categoryRoute;
