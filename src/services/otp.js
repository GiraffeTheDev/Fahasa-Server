const CryptoJS = require("crypto-js");

const generateOtp = () => {
  const randomBytes = CryptoJS.lib.WordArray.random(16); // Tạo ra 128-bit ngẫu nhiên (16 bytes)
  const hash = CryptoJS.SHA256(randomBytes).toString(); // Băm dữ liệu ngẫu nhiên với SHA-256
  const otp = parseInt(hash.substr(0, 6), 16).toString().padStart(6, "0"); // Chuyển đổi sang số thập phân và lấy 6 chữ số đầu tiên
  return otp;
};
module.exports = {
  generateOtp,
};
