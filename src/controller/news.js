const {
  createNewsService,
  deleteNewService,
  getAllNews,
  getOneNews,
  updateNewsService,
  searchNewsByName,
} = require("../services/news");

const createNewsController = async (req, res) => {
  try {
    const response = await createNewsService(req.body);
    res.status(200).json(response);
  } catch (error) {
    res.status(500).json({
      message: "Error from Server",
    });
  }
};
const deleteNewsController = async (req, res) => {
  try {
    const response = await deleteNewService(req.params.id);
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
const getAllNewsController = async (req, res) => {
  try {
    const response = await getAllNews();
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
const getOneNewsController = async (req, res) => {
  try {
    const response = await getOneNews(req.params.id);
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
const updateNewsController = async (req, res) => {
  try {
  
    const response = await updateNewsService(req.body);
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
const searchNewsByNameController = async (req, res) => {
  try {
    const response = await searchNewsByName(req.query.title);
    res.status(200).json(response);
  } catch (error) {
    res.stats(500).json({
      message: "Error from server",
    });
  }
};

module.exports = {
  createNewsController,
  deleteNewsController,
  getAllNewsController,
  updateNewsController,
  getOneNewsController,
  searchNewsByNameController,
};
