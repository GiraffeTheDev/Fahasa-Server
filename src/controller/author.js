const {
  createAuthorService,
  deleteAuthorService,
  getAllAuthorServie,
  updateAuthorService,
  getOneAuthorService,
  searchAuthorByName,
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
const getOneAuthorController = async (req, res) => {
  try {
    const response = await getOneAuthorService(req.params.id);
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
const updateAuthorController = async (req, res) => {
  try {
    const response = await updateAuthorService(req.body);
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
const searchAuthorByNameController = async (req, res) => {
  try {
    const response = await searchAuthorByName(req.query.name);
    res.status(200).json(response);
  } catch (error) {
    res.stats(500).json({
      message: "Error from server",
    });
  }
};
module.exports = {
  createAuthorController,
  deleteAuthorController,
  getAllAuthorController,
  getOneAuthorController,
  updateAuthorController,
  searchAuthorByNameController,
};
