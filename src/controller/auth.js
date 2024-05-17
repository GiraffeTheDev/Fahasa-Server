const { registerService, loginService } = require("../services/auth");

const registerController = async (req, res) => {
  try {
    const response = await registerService(req.body);
    res.cookie("otp", response.otp, {
      maxAge: 10 * 60 * 1000,
    });
    return res.status(200).json(response);
  } catch (error) {
    res.status(500).json({
      message: "Error from Server",
    });
  }
};
const verifyOTPController = async (req, res) => {
  try {
  } catch (error) {}
};
const loginController = async (req, res) => {
  try {
    const response = await loginService(req.body);
    res.status(200).json(response);
  } catch (error) {
    res.status(500).json({
      message: "Error from Server",
    });
  }
};
module.exports = {
  loginController,
  registerController,
};
