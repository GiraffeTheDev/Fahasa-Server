const express = require("express");
const {
  createPaymentController,
  executePaymentController,
  cancelPaymentController,
} = require("../controller/paypal");

const router = express.Router();
const paypalRoute = (app) => {
  router.post("/api/v1/create-payment", createPaymentController);
  router.get("/api/v1/success-checkout", executePaymentController);
  router.get("/api/v1/cancel-checkout", cancelPaymentController);
  return app.use("/", router);
};
module.exports = paypalRoute;
