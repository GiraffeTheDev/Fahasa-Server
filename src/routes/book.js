const express = require("express");
const {
  createNewBookController,
  deleteBookController,
  updateBookController,
} = require("../controller/book");

const router = express.Router();
const bookRoute = (app) => {
  router.post("/api/v1/create-book", createNewBookController);
  router.delete("/api/v1/delete-book", deleteBookController);
  router.put("/api/v1/update-book", updateBookController);
  return app.use("/", router);
};
module.exports = bookRoute;
