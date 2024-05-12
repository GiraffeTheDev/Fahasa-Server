const express = require("express");
const {
  getAllVoucherController,
  createVoucherController,
  deleteVoucherController,
  getAVoucherController,
  updateVoucherController,
} = require("../controller/voucher");

const router = express.Router();
const voucherRoute = (app) => {
  router.post("/api/v1/create-voucher", createVoucherController);
  router.delete("/api/v1/delete-voucher/:id", deleteVoucherController);
  router.get("/api/v1/vouchers", getAllVoucherController);
  router.get("/api/v1/voucher/:id", getAVoucherController);
  router.put("/api/v1/update-voucher", updateVoucherController);
  return app.use("/", router);
};
module.exports = voucherRoute;
