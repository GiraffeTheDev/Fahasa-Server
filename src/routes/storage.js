const express = require("express");
const { updateStockBookController } = require("../controller/storage");

const router = express.Router();
const storageRoute = (app) => {
  router.put("/api/v1/storage-book", updateStockBookController);
  return app.use("/", router);
};
module.exports = storageRoute;
