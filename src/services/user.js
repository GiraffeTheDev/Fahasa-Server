const db = require("../models");

const getAllUserService = (data) => {
  return new Promise(async (resolve, reject) => {
    try {
      const response = await db.User.findAll({});
      if (response) {
        resolve({
          data: response,
          message: "Lấy tất cả người dùng",
        });
      }
    } catch (error) {
      console.log(error);
    }
  });
};
module.exports = {
  getAllUserService,
};
