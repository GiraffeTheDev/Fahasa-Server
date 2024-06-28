const { updateStockBookService } = require("../services/storage");

const updateStockBookController = async (req, res) => {
  try {
    const response = await updateStockBookService(req.body);
    res.status(200).json(response);
  } catch (error) {
    console.log(error);
    res.status(500).json({
      message: "Error from Server",
    });
  }
};
module.exports = {
  updateStockBookController,
};
