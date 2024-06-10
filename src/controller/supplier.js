const { updateCategoryService } = require("../services/category");
const {
  createSupplierService,
  deleteSupplierService,
  getAllSupplierServie,
  getOneSupplierService,
  updateSupplierService,
  searchSupplierByName,
  getSupplierEnService,
  getSupplierViService,
} = require("../services/supplier");

const createSupplierController = async (req, res) => {
  try {
    const response = await createSupplierService(req.body);
    res.status(200).json(response);
  } catch (error) {
    res.status(500).json({
      message: "Error from Server",
    });
  }
};
const deleteSupplierController = async (req, res) => {
  try {
    const response = await deleteSupplierService(req.params.id);
    if (!response) {
      res.status(404).json({
        message: "Không tìm thấy nhà cung cấp",
      });
    }
    res.status(200).json(response);
  } catch (error) {
    res.status(500).json({
      message: "Error from Server",
    });
  }
};
const getAllSupplierController = async (req, res) => {
  try {
    const response = await getAllSupplierServie();
    if (!response) {
      res.status(404).json({
        message: "Không tìm thấy nhà cung cấp",
      });
    }
    res.status(200).json(response);
  } catch (error) {
    res.status(500).json({
      message: "Error from Server",
    });
  }
};
const getOneSupplierController = async (req, res) => {
  try {
    const response = await getOneSupplierService(req.params.id);
    return res.status(200).json(response);
  } catch (error) {
    console.log(error);
    res.status(500).json({
      message: "Error from Server",
    });
  }
};
const updateSupplierController = async (req, res) => {
  try {
    const response = await updateSupplierService(req.body);
    return res.status(200).json(response);
  } catch (error) {
    console.log(error);
  }
};
const searchSupplierByNameController = async (req, res) => {
  try {
    const response = await searchSupplierByName(req.query.name);
    res.status(200).json(response);
  } catch (error) {
    res.stats(500).json({
      message: "Error from server",
    });
  }
};
const getEnSupplierController = async (req, res) => {
  try {
    const response = await getSupplierEnService();
    if (!response) {
      res.status(404).json({
        message: "Không tìm thấy nhà cung cấp",
      });
    }
    res.status(200).json(response);
  } catch (error) {
    res.status(500).json({
      message: "Error from Server",
    });
  }
};
const getViSupplierController = async (req, res) => {
  try {
    const response = await getSupplierViService();
    if (!response) {
      res.status(404).json({
        message: "Không tìm thấy nhà cung cấp",
      });
    }
    res.status(200).json(response);
  } catch (error) {
    res.status(500).json({
      message: "Error from Server",
    });
  }
};
module.exports = {
  createSupplierController,
  deleteSupplierController,
  getAllSupplierController,
  updateSupplierController,
  getOneSupplierController,
  searchSupplierByNameController,
  getEnSupplierController,
  getViSupplierController,
};
