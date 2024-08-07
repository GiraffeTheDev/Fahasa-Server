const {
  createNewBookService,
  deleteBookService,
  updateBookService,
  getAllBookService,
  getOneBookService,
  searchBookByName,
  getAllFlashSaleBook,
  getFlashSaleBookHightlight,
  getBooksWithSupplier,
  getBooksWithCategory,
  queryBookWithMultiCondition,
  getBooksVI,
  getBooksEN,
  getBestSellingBookDaily,
  getBestSellingBookWeek,
  getBooksWithCategoryVi,
  getBooksWithCategoryEn,
  bookSearchWithMultiQuery,
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
    const response = await deleteBookService(req.body);
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
const getBookFlashSaleHightlightController = async (req, res) => {
  try {
    const response = await getFlashSaleBookHightlight();
    res.status(200).json(response);
  } catch (error) {
    console.log(error);
    res.status(500).json({
      message: "Error from Server",
    });
  }
};
const getAllBookFlashSaleController = async (req, res) => {
  try {
    const response = await getAllFlashSaleBook();
    res.status(200).json(response);
  } catch (error) {
    console.log(error);
    res.status(500).json({
      message: "Error from Server",
    });
  }
};
const getBooksWithSupplierController = async (req, res) => {
  try {
    const response = await getBooksWithSupplier(req.query.name);
    res.status(200).json(response);
  } catch (error) {
    console.log(error);
    res.status(500).json({
      message: "Error from Server",
    });
  }
};
const getBooksWithCategoryViController = async (req, res) => {
  try {
    const response = await getBooksWithCategoryVi(req.query.id);
    res.status(200).json(response);
  } catch (error) {
    console.log(error);
    res.status(500).json({
      message: "Error from Server",
    });
  }
};
const getBooksWithCategoryEnController = async (req, res) => {
  try {
    const response = await getBooksWithCategoryEn(req.query.id);
    res.status(200).json(response);
  } catch (error) {
    console.log(error);
    res.status(500).json({
      message: "Error from Server",
    });
  }
};
const getBooksWithQueryController = async (req, res) => {
  try {
    const response = await queryBookWithMultiCondition(req.query);
    res.status(200).json(response);
  } catch (error) {
    console.log(error);
    res.status(500).json({
      message: "Error from Server",
    });
  }
};
const getBooksVIController = async (req, res) => {
  try {
    const response = await getBooksVI();
    res.status(200).json(response);
  } catch (error) {
    console.log(error);
    res.status(500).json({
      message: "Error from Server",
    });
  }
};
const getBooksENController = async (req, res) => {
  try {
    const response = await getBooksEN();
    res.status(200).json(response);
  } catch (error) {
    console.log(error);
    res.status(500).json({
      message: "Error from Server",
    });
  }
};
const getBestSellingBookDailyController = async (req, res) => {
  try {
    const response = await getBestSellingBookDaily();
    res.status(200).json(response);
  } catch (error) {
    res.status(500).json({
      message: "Error from Server",
    });
  }
};
const getBestSellingBookWeekController = async (req, res) => {
  try {
    const response = await getBestSellingBookWeek();
    res.status(200).json(response);
  } catch (error) {
    res.status(500).json({
      message: "Error from Server",
    });
  }
};
const getBookByMultiQueryController = async (req, res) => {
  try {
    const response = await bookSearchWithMultiQuery(req.query);
    res.status(200).json(response);
  } catch (error) {
    console.log(error);
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
  searchBookByNameController,
  getBookFlashSaleHightlightController,
  getAllBookFlashSaleController,
  getBooksWithSupplierController,
  getBooksWithCategoryEnController,
  getBooksWithCategoryViController,
  getBooksWithQueryController,
  getBooksVIController,
  getBooksENController,
  getBestSellingBookDailyController,
  getBestSellingBookWeekController,
  getBookByMultiQueryController,
};
