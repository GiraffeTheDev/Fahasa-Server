const {
  createVoucherService,
  deleteVoucherService,
  getAVoucherService,
  getAllVoucherService,
} = require("../services/voucher");

const createVoucherController = async (req, res) => {
  try {
    const response = await createVoucherService(req.body);
    res.status(200).json(response);
  } catch (error) {
    res.status(500).json({
      message: "Error from Server",
    });
  }
};
const deleteVoucherController = async (req, res) => {
  try {
    const response = await deleteVoucherService(req.params.id);
    res.status(200).json(response);
  } catch (error) {
    res.status(500).json({
      message: "Error from Server",
    });
  }
};
const updateVoucherController = async (req, res) => {
  try {
    const response = await updateVoucherController(req.body);
    res.status(200).json(response);
  } catch (error) {
    console.log(error);
  }
};
const getAllVoucherController = async (req, res) => {
  try {
    const response = await getAllVoucherService();
    res.status(200).json(response);
  } catch (error) {
    res.status(200).json({
      message: "Error from Server",
    });
  }
};
const getAVoucherController = async (req, res) => {
  try {
    const response = await getAVoucherService(req.params.id);
    res.status(200).json(response);
  } catch (error) {
    res.status(500).json({
      message: "Error from Server",
    });
  }
};
module.exports = {
  getAVoucherController,
  getAllVoucherController,
  createVoucherController,
  deleteVoucherController,
  updateVoucherController,
};
