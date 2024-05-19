const express = require("express");
const {
  loginController,
  registerController,
  verifyOTPController,
  createAccountController,
} = require("../controller/auth");
const router = express.Router();
const authRoute = (app) => {
  router.post("/api/v1/register", registerController);
  router.post("/api/v1/verify-otp", verifyOTPController);
  router.post("/api/v1/create-account", createAccountController);
  router.post("/api/v1/login", loginController);
  return app.use("/", router);
};
module.exports = authRoute;
