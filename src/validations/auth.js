const Joi = require("joi");

const registerValidator = Joi.object({
  email: Joi.string().required("Bạn phải nhập vào địa chỉ Email").email("Địa chỉ E"),
  password: Joi.string().required("Bạn phải nhập vào mật khẩu"),
});

const loginValidator = Joi.object({
  email: Joi.string().required("Bạn phải nhập vào địa chỉ Email").email(),
  password: Joi.string().required("Bạn phải nhập vào mật khẩu"),
});

module.exports = { loginValidator, registerValidator };
