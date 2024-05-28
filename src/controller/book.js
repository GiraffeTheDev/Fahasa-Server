const {
  createNewBookService,
  deleteBookService,
  updateBookService,
  getAllBookService,
  getOneBookService,
} = require("../services/book");

const createNewBookController = async (req, res) => {
  try {
    const response = await createNewBookService(req.body);
    res.status(200).json(response);
  } catch (error) {
    res.status(500).json({
      message: "Error from Server",
    });
  }
};
const deleteBookController = async (req, res) => {
  try {
    const response = await deleteBookService(req.params.id);
    res.status(200).json(response);
  } catch (error) {
    res.status(500).json({ message: "Error from Server" });
  }
};
const updateBookController = async (req, res) => {
  try {
    const response = await updateBookService(req.body);
    res.status(200).json(message);
  } catch (error) {
    res.status(500).json({
      message: "Error from Server",
    });
  }
};
const getAllBookController = async (req, res) => {
  try {
    const response = await getAllBookService();
    res.status(200).json(message);
  } catch (error) {
    res.status(500).json({
      message: "Error from Server",
    });
  }
};
const getOneBookController = async (req, res) => {
  try {
    const response = await getOneBookService(req.params.id);
    res.status(200).json(message);
  } catch (error) {
    res.status(500).json({
      message: "Error from Server",
    });
  }
};
module.exports = {
  createNewBookController,
  deleteBookController,
  updateBookController,
  getAllBookController,
  getOneBookController,
};
