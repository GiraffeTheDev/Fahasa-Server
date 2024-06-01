const {
  deleteGenresService,
  updateGenresService,
  getAllGenresService,
  createNewGenresService,
  getOneGenresService,
} = require("../services/genres");

const createGenresController = async (req, res) => {
  try {
    const response = await createNewGenresService(req.body);
    res.status(200).json(response);
  } catch (error) {
    res.status(500).json({
      message: "Error from Server",
    });
  }
};
const deleteGenresController = async (req, res) => {
  try {
    const response = await deleteGenresService(req.params.id);
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
const getAllGenresController = async (req, res) => {
  try {
    const response = await getAllGenresService();
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
const getOneGenresController = async (req, res) => {
  try {
    const response = await getOneGenresService(req.params.id);
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
const updateGenresController = async (req, res) => {
  try {
    const response = await updateGenresService(req.body);
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
module.exports = {
  createGenresController,
  deleteGenresController,
  getAllGenresController,
  updateGenresController,
  getOneGenresController,
};
