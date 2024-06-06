const express = require("express");
const {
  getAllCategoryController,
  createCategoryController,
  deleteCategoryController,
  updateCategoryController,
  getOneCategoryController,
  searchCateByNameController,
} = require("../controller/category");
const { searchBookByNameController } = require("../controller/book");

const router = express.Router();
const categoryRoute = (app) => {
  router.post("/api/v1/create-category", createCategoryController);
  router.delete("/api/v1/delete-category/:id", deleteCategoryController);
  router.get("/api/v1/categories", getAllCategoryController);
  router.get("/api/v1/category/:id", getOneCategoryController);
  router.put("/api/v1/update-category", updateCategoryController);
  router.get("/api/v1/search-category", searchCateByNameController);
  return app.use("/", router);
};
module.exports = categoryRoute;
