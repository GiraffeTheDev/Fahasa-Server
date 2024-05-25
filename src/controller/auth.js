const db = require("../models");
const { registerService, loginService } = require("../services/auth");
const { checkMailExist, hashPassword } = require("../services/common");

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
      return res.status(400).json({ message: "OTP is invalid" });
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
    console.log("data", req.body);
    if (!email) {
      return res.status(400).json({ messge: "Email is required" });
    }
    if (!password) {
      return res.status(400).json({ messge: "Password is required" });
    }

    // if (password !== repassword) {
    //   return res.status(400).json({
    //     message: "Mật khẩu bạn nhập phải trùng nhau",
    //   });
    // }
    const passhash = await hashPassword(password);
    console.log(passhash);
    const response = await db.User.create({
      email: email,
      password: passhash,
      isAdmin: false,
    });
    console.log("res", response);
    return res
      .status(200)
      .json({ message: "Account created successfully", data: response });
  } catch (error) {
    console.log("err", error);
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
module.exports = {
  loginController,
  registerController,
  verifyOTPController,
  createAccountController,
};
