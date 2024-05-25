const db = require("../models");
const { checkMailExist, hashPassword } = require("./common");
const { sendOtp } = require("./email");
const { generateOtp, generateOTP } = require("./otp");
const { createAccessToken, createRefreshToken } = require("./token");
const bcrypt = require("bcrypt");
const registerService = (data) => {
  return new Promise(async (resolve, reject) => {
    try {
      if (!data.email) {
        resolve({
          message: "Bạn phải nhập email",
        });
      }

      const checkMail = await checkMailExist(data.email);

      if (checkMail) {
        resolve({
          message: "Email của bạn đã được đăng kí",
        });
      } else {
        const otp = generateOTP();
        await sendOtp(data.email, otp);
        resolve({ message: "OTP sent to your email", otp: otp });
      }
    } catch (error) {
      console.log(error);
    }
  });
};
const loginService = (data) => {
  return new Promise(async (resolve, reject) => {
    try {
      const check = checkMailExist(data.email);
      if (check) {
        const user = await db.User.findOne({
          where: { email: data.email },
        });
        if (user) {
          const payload = {
            isAdmin: user.isAdmin,
            name: user.name,
            email: user.email,
          };
          const access_token = createAccessToken(payload);
          const refresh_token = createRefreshToken(payload);
          const checkPass = bcrypt.compareSync(data.password, user.password);
          if (checkPass) {
            resolve({
              access_token: access_token,
              refresh_token: refresh_token,
              message: "Đăng nhập thành công",
              data: payload,
            });
          } else {
            resolve({
              message: "Đăng nhập không thành công",
            });
          }
        }
      } else {
        resolve({ message: "Tài khoản của bạn chưa được đăng kí" });
      }
    } catch (error) {
      console.log(error);
    }
  });
};
module.exports = { registerService, loginService };
