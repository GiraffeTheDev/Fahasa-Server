const {
  createNewBookService,
  deleteBookService,
  updateBookService,
  getAllBookService,
  getOneBookService,
  searchBookByName,
} = require("../services/book");

const createNewBookController = async (req, res) => {
  try {
    const response = await createNewBookService(req.body);
    res.status(200).json(response);
  } catch (error) {
    console.log("err", error);
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
    res.status(200).json(response);
  } catch (error) {
    console.log(error);
    res.status(500).json({
      message: "Error from Server",
    });
  }
};
const getAllBookController = async (req, res) => {
  try {
    const response = await getAllBookService();
    res.status(200).json(response);
  } catch (error) {
    console.log(error);
    res.status(500).json({
      message: "Error from Server",
    });
  }
};
const getOneBookController = async (req, res) => {
  try {
    const response = await getOneBookService(req.params.id);
    res.status(200).json(response);
  } catch (error) {
    console.log(error);
    res.status(500).json({
      message: "Error from Server",
    });
  }
};
const searchBookByNameController = async (req, res) => {
  try {
    const response = await searchBookByName(req.query.name);
    res.status(200).json(response);
  } catch (error) {
    res.stats(500).json({
      message: "Error from server",
    });
  }
};
module.exports = {
  createNewBookController,
  deleteBookController,
  updateBookController,
  getAllBookController,
  getOneBookController,
  searchBookByNameController,
};
