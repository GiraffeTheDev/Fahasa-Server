const crypto = require("crypto-js");
const { checkMailExist } = require("./common");
const { sendOtp } = require("./email");

const generateOTP = () => {
  // Tạo một chuỗi ngẫu nhiên
  const otp = crypto.lib.WordArray.random(4).toString(); // Tạo chuỗi ngẫu nhiên 4 bytes (8 ký tự hexa)
  // Chuyển đổi chuỗi thành số nguyên và lấy 6 chữ số cuối
  const otpNumber = parseInt(otp, 16) % 1000000; // Giới hạn trong phạm vi 6 chữ số
  return otpNumber.toString().padStart(6, "0"); // Đảm bảo có đúng 6 chữ số
};
const sendOTP = (email) => {
  return new Promise(async (resolve, reject) => {
    try {
      const checkMail = await checkMailExist(email);
      if (checkMail) {
        const otp = generateOTP();
        await sendOtp(email, otp);
        resolve({ message: "OTP sent to your email", otp: otp });
      } else {
        resolve({
          error: 1,
          messagemail: "Email của bạn chưa được đăng kí",
        });
      }
    } catch (error) {
      console.log(error);
    }
  });
};
module.exports = {
  generateOTP,
  sendOTP,
};
