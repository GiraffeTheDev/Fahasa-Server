const express = require("express");
const {
  getAllSupplierController,
  createSupplierController,
  deleteSupplierController,
  getOneSupplierController,
  updateSupplierController,
  searchSupplierByNameController,
  getViSupplierController,
  getEnSupplierController,
} = require("../controller/supplier");

const router = express.Router();
const supplierRoute = (app) => {
  router.post("/api/v1/create-supplier", createSupplierController);
  router.delete("/api/v1/delete-supplier/:id", deleteSupplierController);
  router.get("/api/v1/suppliers", getAllSupplierController);
  router.get("/api/v1/supplier/:id", getOneSupplierController);
  router.put("/api/v1/update-supplier", updateSupplierController);
  router.get("/api/v1/search-supplier", searchSupplierByNameController);
  router.get("/api/v1/suppliers-vi", getViSupplierController);
  router.get("/api/v1/suppliers-en", getEnSupplierController);
  return app.use("/", router);
};
module.exports = supplierRoute;
