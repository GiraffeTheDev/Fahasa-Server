const {
  createNewOrderService,
  getAllOrderService,
  getOneOrderService,
  updateOrderStatus,
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
module.exports = {
  createNewOrderController,
  getAllOrderController,
  getOneOrderController,
  updateOrderStatusController,
};
