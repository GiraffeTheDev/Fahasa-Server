const express = require("express");
const {
  loginController,
  registerController,
  verifyOTPController,
  createAccountController,
  logoutController,
  sendOTPController,
  updatePasswordController,
} = require("../controller/auth");
const {
  getAllUserController,
  getOneUserController,
  updateUserRoleController,
} = require("../controller/user");
const router = express.Router();
const authRoute = (app) => {
  router.post("/api/v1/register", registerController);
  router.post("/api/v1/send-otp", sendOTPController);
  router.post("/api/v1/verify-otp", verifyOTPController);
  router.post("/api/v1/create-account", createAccountController);
  router.post("/api/v1/login", loginController);
  router.post("/api/v1/logout", logoutController);
  router.put("/api/v1/update-password", updatePasswordController);
  router.get("/api/v1/users", getAllUserController);
  router.get("/api/v1/user/:id", getOneUserController);
  router.put("/api/v1/update-role", updateUserRoleController);
  return app.use("/", router);
};
module.exports = authRoute;
