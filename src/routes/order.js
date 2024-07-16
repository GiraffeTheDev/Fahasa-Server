const express = require("express");
const {
  createNewOrderController,
  getAllOrderController,
  getOneOrderController,
  updateOrderStatusController,
  getRevenuePerMonthController,
  getCoutRevenueController,
  getOrderByQueryController,
  getAllOrderWithQueryUserController,
  getPurchasedBookController,
} = require("../controller/order");

const router = express.Router();
const orderRoute = (app) => {
  router.post("/api/v1/create-order", createNewOrderController);
  router.get("/api/v1/orders", getAllOrderController);
  router.get("/api/v1/order/:id", getOneOrderController);
  router.put("/api/v1/update-order", updateOrderStatusController);
  router.get("/api/v1/revenue-per-month", getRevenuePerMonthController);
  router.get("/api/v1/count-revenue-order", getCoutRevenueController);
  router.get("/api/v1/order-query", getOrderByQueryController);
  router.get("/api/v1/order-query-user", getAllOrderWithQueryUserController);
  router.get("/api/v1/book-purchased", getPurchasedBookController);
  return app.use("/", router);
};
module.exports = orderRoute;
