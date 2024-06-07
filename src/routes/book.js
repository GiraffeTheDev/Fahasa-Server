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
} = require("../controller/book");

const router = express.Router();
const bookRoute = (app) => {
  router.post("/api/v1/create-book", createNewBookController);
  router.delete("/api/v1/delete-book/:id", deleteBookController);
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
  return app.use("/", router);
};
module.exports = bookRoute;
