const nodemailer = require("nodemailer");

const transporter = nodemailer.createTransport({
  service: "Gmail", // Hoặc sử dụng dịch vụ email khác
  auth: {
    user: process.env.EMAIL_APP,
    pass: process.env.EMAIL_APP_PASS,
  },
});

const sendOtp = async (email, otp) => {
  const mailOptions = {
    from: "vietanhdao883@gmail.com",
    to: email,
    subject: "Your OTP Code",
    text: `Your OTP code is ${otp}`,
  };

  await transporter.sendMail(mailOptions);
};
module.exports = {
  sendOtp,
};
