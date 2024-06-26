const {
  createCategoryService,
  deleteCategoryService,
  getAllCategoryServie,
  getOneCategoryService,
  updateCategoryService,
  searchCateByName,
  getAllCategoryVIService,
  getAllCategoryENService,
} = require("../services/category");

const createCategoryController = async (req, res) => {
  try {
    const response = await createCategoryService(req.body);
    res.status(200).json(response);
  } catch (error) {
    res.status(500).json({
      message: "Error from Server",
    });
  }
};
const deleteCategoryController = async (req, res) => {
  try {
    const response = await deleteCategoryService(req.params.id);
    if (!response) {
      res.status(404).json({
        message: "Không tìm thấy danh mục",
      });
    }
    res.status(200).json(response);
  } catch (error) {
    res.status(500).json({
      message: "Error from Server",
    });
  }
};
const getAllCategoryController = async (req, res) => {
  try {
    const response = await getAllCategoryServie();
    if (!response) {
      res.status(404).json({
        message: "Không tìm thấy danh mục",
      });
    }
    res.status(200).json(response);
  } catch (error) {
    res.status(500).json({
      message: "Error from Server",
    });
  }
};
const getOneCategoryController = async (req, res) => {
  try {
    const response = await getOneCategoryService(req.params.id);
    if (!response) {
      res.status(404).json({
        message: "Không tìm thấy danh mục",
      });
    }
    res.status(200).json(response);
  } catch (error) {
    res.status(500).json({
      message: "Error from Server",
    });
  }
};
const updateCategoryController = async (req, res) => {
  try {
    const response = await updateCategoryService(req.body);
    if (!response) {
      res.status(404).json({
        message: "Không tìm thấy danh mục",
      });
    }
    res.status(200).json(response);
  } catch (error) {
    res.status(500).json({
      message: "Error from Server",
    });
  }
};
const searchCateByNameController = async (req, res) => {
  try {
    const response = await searchCateByName(req.query.name);
    res.status(200).json(response);
  } catch (error) {
    res.stats(500).json({
      message: "Error from server",
    });
  }
};
const getAllCategoryVIController = async (req, res) => {
  try {
    const response = await getAllCategoryVIService();
    res.status(200).json(response);
  } catch (error) {
    res.stats(500).json({
      message: "Error from server",
    });
  }
};
const getAllCategoryENController = async (req, res) => {
  try {
    const response = await getAllCategoryENService();
    res.status(200).json(response);
  } catch (error) {
    res.stats(500).json({
      message: "Error from server",
    });
  }
};
module.exports = {
  createCategoryController,
  deleteCategoryController,
  getAllCategoryController,
  updateCategoryController,
  getOneCategoryController,
  searchCateByNameController,
  getAllCategoryVIController,
  getAllCategoryENController,
};
