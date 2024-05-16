const db = require("../models");
const { checkMailExist, hashPassword } = require("./common");
const { generateOtp } = require("./otp");
const { createAccessToken, createRefreshToken } = require("./token");
let otps = {};
const registerService = (data) => {
  return new Promise(async (resolve, reject) => {
    try {
      if (!data.email) {
        resolve({
          message: "Bạn phải nhập email",
        });
      }
      const otp = generateOtp();
      otps.email = otp;
      const checkMail = checkMailExist(data.email);
      if (checkMail) {
        resolve({
          message: "Email của bạn đã được đăng kí",
        });
      } else {
        if (data.password !== data.repassword) {
          resolve({
            message: "Bạn phải nhập mật khẩu trùng nhau",
          });
        } else {
          const passhash = hashPassword(data.password);
          const response = await db.User.create({
            name: data.name,
            phone: data.phone,
            password: passhash,
            isAdmin: false,
          });
          if (response) {
            resolve({
              message: "Đăng kí thành công",
            });
          } else {
            resolve({
              message: "Đăng kí thất bại",
            });
          }
        }
      }
    } catch (error) {
      console.log(error);
    }
  });
};
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
