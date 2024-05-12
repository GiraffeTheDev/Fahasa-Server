const {
  createAuthorService,
  deleteAuthorService,
  getAllAuthorServie,
} = require("../services/author");

const createAuthorController = async (req, res) => {
  try {
    const response = await createAuthorService(req.body);
    res.status(200).json(response);
  } catch (error) {
    res.status(500).json({
      message: "Error from Server",
    });
  }
};
const deleteAuthorController = async (req, res) => {
  try {
    const response = await deleteAuthorService(req.params.id);
    if (!response) {
      res.status(404).json({
        message: "Không tìm thấy tác giả",
      });
    }
    res.status(200).json(response);
  } catch (error) {
    res.status(500).json({
      message: "Error from Server",
    });
  }
};
const getAllAuthorController = async (req, res) => {
  try {
    const response = await getAllAuthorServie();
    if (!response) {
      res.status(404).json({
        message: "Không tìm thấy tác giả",
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
  createAuthorController,
  deleteAuthorController,
  getAllAuthorController,
};
