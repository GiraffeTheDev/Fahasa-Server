const express = require("express");
const {
  createNewOrderController,
  getAllOrderController,
  getOneOrderController,
  updateOrderStatusController,
} = require("../controller/order");

const router = express.Router();
const orderRoute = (app) => {
  router.post("/api/v1/create-order", createNewOrderController);
  router.get("/api/v1/orders", getAllOrderController);
  router.get("/api/v1/order/:id", getOneOrderController);
  router.put("/api/v1/update-order", updateOrderStatusController);
  return app.use("/", router);
};
module.exports = orderRoute;
