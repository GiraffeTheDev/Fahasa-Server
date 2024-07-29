const express = require("express");
const {
  createNewBookController,
  deleteBookController,
  updateBookController,
  getOneBookController,
  getAllBookController,
  searchBookByNameController,

  getAllBookFlashSaleController,
  getBookFlashSaleHightlightController,
  getBooksWithSupplierController,
  getBooksWithCategoryController,
  getBooksWithQueryController,
  getBooksVIController,
  getBooksENController,
  getBestSellingBookDailyController,
  getBestSellingBookWeekController,
  getBooksWithCategoryViController,
  getBooksWithCategoryEnController,
  getBookByMultiQueryController,
} = require("../controller/book");

const router = express.Router();
const bookRoute = (app) => {
  router.post("/api/v1/create-book", createNewBookController);
  router.put("/api/v1/delete-book", deleteBookController);
  router.put("/api/v1/update-book", updateBookController);
  router.get("/api/v1/book/:id", getOneBookController);
  router.get("/api/v1/books", getAllBookController);
  router.get("/api/v1/search-books", searchBookByNameController);
  router.get("/api/v1/flashsale-books", getAllBookFlashSaleController);
  router.get(
    "/api/v1/book-flashsale-hightlight",
    getBookFlashSaleHightlightController
  );
  router.get("/api/v1/book-supplier", getBooksWithSupplierController);
  router.get("/api/v1/book-category-vi", getBooksWithCategoryViController);
  router.get("/api/v1/book-category-en", getBooksWithCategoryEnController);
  router.get("/api/v1/book-query", getBooksWithQueryController);
  router.get("/api/v1/book-vi", getBooksVIController);
  router.get("/api/v1/book-en", getBooksENController);
  router.get("/api/v1/best-daily", getBestSellingBookDailyController);
  router.get("/api/v1/best-week", getBestSellingBookWeekController);
  router.get("/api/v1/book-search-query", getBookByMultiQueryController);
  return app.use("/", router);
};
module.exports = bookRoute;
