const {
  deletePublisherService,
  updatePublisherService,
  getAllPublisherService,
  createNewPublisherService,
  getOnePublisherService,
  searchPublisherByName,
} = require("../services/publisher");

const createPublisherController = async (req, res) => {
  try {
    const response = await createNewPublisherService(req.body);
    res.status(200).json(response);
  } catch (error) {
    res.status(500).json({
      message: "Error from Server",
    });
  }
};
const deletePublisherController = async (req, res) => {
  try {
    const response = await deletePublisherService(req.params.id);
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
const getAllPublisherController = async (req, res) => {
  try {
    const response = await getAllPublisherService();
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
const getOnePublisherController = async (req, res) => {
  try {
    const response = await getOnePublisherService(req.params.id);
    if (!response) {
      res.status(404).json({
        message: "Không tìm thấy danh mục",
      });
    }
    res.status(200).json(response);
  } catch (error) {
    console.log(error);
    res.status(500).json({
      message: "Error from Server",
    });
  }
};
const updatePublisherController = async (req, res) => {
  try {
    const response = await updatePublisherService(req.body);
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
const searchPublisherByNameController = async (req, res) => {
  try {
    const response = await searchPublisherByName(req.query.name);
    res.status(200).json(response);
  } catch (error) {
    res.stats(500).json({
      message: "Error from server",
    });
  }
};

module.exports = {
  createPublisherController,
  deletePublisherController,
  getAllPublisherController,
  updatePublisherController,
  getOnePublisherController,
  searchPublisherByNameController,
};
