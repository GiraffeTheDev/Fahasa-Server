const {
  getAllUserService,
  updateUserInfor,
  getOneUserService,
  updateUserRoleService,
} = require("../services/user");

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
const updateUserInforController = async (req, res) => {
  try {
    const response = await updateUserInfor(req.body);
    res.status(200).json(response);
  } catch (error) {}
};
const getOneUserController = async (req, res) => {
  try {
    const response = await getOneUserService(req.params.id);
    res.status(200).json(response);
  } catch (error) {
    res.status(500).json({
      message: "Error from Server",
    });
  }
};
const updateUserRoleController = async (req, res) => {
  try {
    const response = await updateUserRoleService(req.body);
    res.status(200).json(response);
  } catch (error) {
    res.status(500).json({
      message: "Error from Server",
    });
  }
};
module.exports = {
  getAllUserController,
  updateUserInforController,
  getOneUserController,
  updateUserRoleController,
};
