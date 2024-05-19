const crypto = require("crypto-js");

const generateOTP = () => {
  // Tạo một chuỗi ngẫu nhiên
  const otp = crypto.lib.WordArray.random(4).toString(); // Tạo chuỗi ngẫu nhiên 4 bytes (8 ký tự hexa)
  // Chuyển đổi chuỗi thành số nguyên và lấy 6 chữ số cuối
  const otpNumber = parseInt(otp, 16) % 1000000; // Giới hạn trong phạm vi 6 chữ số
  return otpNumber.toString().padStart(6, "0"); // Đảm bảo có đúng 6 chữ số
};

module.exports = {
  generateOTP,
};
