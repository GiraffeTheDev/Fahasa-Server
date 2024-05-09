const bcrypt = require("bcrypt");
const db = require("../models");
const hashPassword = async (password) => {
  try {
    const salt = bcrypt.genSaltSync(10); // Generate a salt with a cost factor of 10
    const hashedPassword = bcrypt.hashSync(password, salt);
    return hashedPassword;
  } catch (error) {
    throw error;
  }
};
const checkMailExist = (email) => {
  return new Promise(async (resolve, reject) => {
    try {
      const response = await db.User.findOne({ email: email });
      if (response) {
        resolve(true);
      } else {
        resolve(false);
      }
    } catch (error) {
      reject(error);
    }
  });
};
const checkPhoneExist = (phone) => {
  return new Promise(async (resolve, reject) => {
    try {
      const response = await db.User.findOne({ phone: phone });
      if (response) {
        resolve(true);
      } else {
        resolve(false);
      }
    } catch (error) {
      reject(error);
    }
  });
};
module.exports = {
  hashPassword,
  checkMailExist,
  checkPhoneExist,
};
