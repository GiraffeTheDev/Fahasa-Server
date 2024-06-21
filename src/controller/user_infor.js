const { createUserInfor, getUserInfor } = require("../services/user_infor");

const createUserInforController = async (req, res) => {
  try {
    const response = await createUserInfor(req.body);
    return res.status(200).json(response);
  } catch (error) {
    res.status(500).json({
      message: "Error from server",
    });
  }
};
const getUserInforController = async (req, res) => {
  try {
    const response = await getUserInfor(req.params.id);
    return res.status(200).json(response);
  } catch (error) {
    return res.status(500).json({
      message: "Error from server",
    });
  }
};
module.exports = {
  createUserInforController,
  getUserInforController,
};
