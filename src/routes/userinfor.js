const express = require("express");
const {
  createUserInforController,
  getUserInforController,
} = require("../controller/user_infor");

const router = express.Router();
const userinforRoute = (app) => {
  router.post("/api/v1/create-infor", createUserInforController);
  router.get("/api/v1/get-infor/:id", getUserInforController);
  return app.use("/", router);
};
module.exports = userinforRoute;
