const db = require("../models");
const { checkMailExist, hashPassword } = require("./common");
const { sendOtp } = require("./email");
const { generateOtp } = require("./otp");
const { createAccessToken, createRefreshToken } = require("./token");

const registerService = (data) => {
  return new Promise(async (resolve, reject) => {
    try {
      if (!data.email) {
        resolve({
          message: "Bạn phải nhập email",
        });
      }

      const checkMail = checkMailExist(data.email);
      if (checkMail) {
        resolve({
          message: "Email của bạn đã được đăng kí",
        });
      } else {
        const otp = generateOtp();
        await sendOtp(data.email, otp);
        resolve({ message: "OTP sent to your email", otp : otp });
      }
    } catch (error) {
      console.log(error);
    }
  });
};
const verifyEmailService = (data) => {
return new Promise(async (resolve , reject) => {
  try {
    if()
  } catch (error) {
    
  }
})
}
const loginService = (data) => {
  return new Promise(async (resolve, reject) => {
    try {
      const check = checkPhoneExist(data.phone);
      if (check) {
        const user = db.User.findOne({
          phone: data.phone,
        });
        if (user) {
          const payload = {
            isAdmin: user.isAdmin,
            name: user.name,
            phone: user.phone,
          };
          const access_token = createAccessToken(payload);
          const refresh_token = createRefreshToken(payload);
          const check = bcrypt.compareSync(data.password, user.password);
          if (check) {
            resolve({
              access_token: access_token,
              refresh_token: refresh_token,
              message: "Đăng nhập thành công",
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
