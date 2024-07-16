const {
  createNewOrderService,
  getAllOrderService,
  getOneOrderService,
  updateOrderStatus,
  getRevenuePerMonthService,
  getCountRevenueOrderService,
  getAllOrderWithQuery,
  getAllOrderWithQueryUser,
  getPurchasedBook,
} = require("../services/order");

const createNewOrderController = async (req, res) => {
  try {
    const response = await createNewOrderService(req.body);
    res.status(200).json(response);
  } catch (error) {
    console.log(error);
    res.status(500).json({
      error: 1,
      message: "Error from Server",
    });
  }
};
const getAllOrderController = async (req, res) => {
  try {
    const response = await getAllOrderService();
    res.status(200).json(response);
  } catch (error) {
    res.status(500).json({
      error: 1,
      message: "Error from Server",
    });
  }
};
const getOneOrderController = async (req, res) => {
  try {
    const response = await getOneOrderService(req.params.id);
    res.status(200).json(response);
  } catch (error) {
    res.status(500).json({
      error: 1,
      message: "Error from Server",
    });
  }
};
const updateOrderStatusController = async (req, res) => {
  try {
    const response = await updateOrderStatus(req.body);
    res.status(200).json(response);
  } catch (error) {
    res.status(500).json({
      error: 1,
      message: "Error from Server",
    });
  }
};
const getRevenuePerMonthController = async (req, res) => {
  try {
    const response = await getRevenuePerMonthService();
    res.status(200).json(response);
  } catch (error) {
    res.status(500).json({
      message: "Error from Server",
    });
  }
};
const getCoutRevenueController = async (req, res) => {
  try {
    const response = await getCountRevenueOrderService();
    res.status(200).json(response);
  } catch (error) {
    res.status(500).json({
      message: "Error from server",
    });
  }
};
const getOrderByQueryController = async (req, res) => {
  try {
    const response = await getAllOrderWithQuery(req.query.query);
    res.status(200).json(response);
  } catch (error) {
    res.status(500).json({
      message: "Error from server",
    });
  }
};
const getAllOrderWithQueryUserController = async (req, res) => {
  try {
    const response = await getAllOrderWithQueryUser(req.query);
    res.status(200).json(response);
  } catch (error) {
    console.log(error);
    res.status(500).json({
      message: "Error from Server",
    });
  }
};
const getPurchasedBookController = async (req, res) => {
  try {
  
    const response = await getPurchasedBook(req.query);
    res.status(200).json(response);
  } catch (error) {
    res.status(500).json({
      message: "Error from Server",
    });
  }
};
module.exports = {
  createNewOrderController,
  getAllOrderController,
  getOneOrderController,
  updateOrderStatusController,
  getRevenuePerMonthController,
  getCoutRevenueController,
  getOrderByQueryController,
  getAllOrderWithQueryUserController,
  getPurchasedBookController,
};
