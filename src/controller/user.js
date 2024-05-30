const { getAllUserService } = require("../services/user");

const getAllUserController = async (req, res) => {
  try {
    const response = await getAllUserService();
    res.status(200).json(response);
  } catch (error) {
    res.status(500).json({
      message: "Error from Server",
    });
  }
};
module.exports = {
  getAllUserController,
};
