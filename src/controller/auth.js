const db = require("../models");
const {
  registerService,
  loginService,
  updatePasswordService,
} = require("../services/auth");
const { checkMailExist, hashPassword } = require("../services/common");
const { sendOTP } = require("../services/otp");

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
    const { otp } = req.body;
    const storedOTP = req.cookies.otp;
    if (!storedOTP || storedOTP !== otp) {
      return res.status(200).json({ error: 1, message: "OTP is invalid" });
    } else {
      res.clearCookie("otp");
      return res.status(200).json({
        message: "OTP is verified",
      });
    }
  } catch (error) {}
};
const createAccountController = async (req, res) => {
  try {
    const { email, password } = req.body;
    if (!email) {
      return res.status(400).json({ messge: "Email is required" });
    }
    if (!password) {
      return res.status(400).json({ messge: "Password is required" });
    }
    const checkMail = await checkMailExist(email);
    if (checkMail) {
      res.status(400).json({
        message: "Email đã được đăng kí",
      });
    } else {
      const passhash = await hashPassword(password);
      const response = await db.User.create({
        email: email,
        password: passhash,
        isAdmin: false,
      });
      return res
        .status(200)
        .json({ message: "Account created successfully", data: response });
    }
  } catch (error) {
    console.log( error);
  }
};
const loginController = async (req, res) => {
  try {
    const response = await loginService(req.body);
    res.cookie("access_token", response.access_token, {
      maxAge: 2 * 60 * 60 * 1000,
    });
    res.cookie("refresh_token", response.refresh_token, {
      maxAge: 15 * 24 * 60 * 60 * 1000,
    });
    res.status(200).json(response);
  } catch (error) {
    res.status(500).json({
      message: "Error from Server",
    });
  }
};
const sendOTPController = async (req, res) => {
  try {
    const response = await sendOTP(req.body.email);
    res.cookie("otp", response.otp, {
      maxAge: 10 * 60 * 1000,
    });
    return res.status(200).json(response);
  } catch (error) {}
};
const updatePasswordController = async (req, res) => {
  try {
    const response = await updatePasswordService(req.body);
    res.status(200).json(response);
  } catch (error) {
    res.status(500).json({
      error: 1,
      message: "Error from Server",
    });
  }
};
const logoutController = async (req, res) => {
  try {
    res.clearCookie("access_token");
    res.clearCookie("refresh_token");
    res.status(200).json({
      message: "Logout success!",
    });
  } catch (err) {
    console.log(err);
  }
};
module.exports = {
  loginController,
  registerController,
  verifyOTPController,
  createAccountController,
  logoutController,
  sendOTPController,
  updatePasswordController,
};
