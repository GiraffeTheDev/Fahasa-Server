const express = require("express");
const {
  createPublisherController,
  deletePublisherController,
  getAllPublisherController,
  getOnePublisherController,
  updatePublisherController,
  searchPublisherByNameController,
} = require("../controller/publisher");

const router = express.Router();
const publisherRoute = (app) => {
  router.post("/api/v1/create-publisher", createPublisherController);
  router.delete("/api/v1/delete-publisher/:id", deletePublisherController);
  router.get("/api/v1/all-publisher", getAllPublisherController);
  router.get("/api/v1/publisher/:id", getOnePublisherController);
  router.put("/api/v1/update-publisher", updatePublisherController);
  router.get("/api/v1/search-publisher", searchPublisherByNameController);

  return app.use("/", router);
};
module.exports = publisherRoute;
