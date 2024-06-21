const db = require("../models");

const createUserInfor = (data) => {
  return new Promise(async (resolve, reject) => {
    try {
      const response = await db.UserInformation.create({
        user_name: data.user_name,
        user_id: data.user_id,
        phone: data.phone,
        province: data.province,
        district: data.district,
        ward: data.ward,
        address_detail: data.address_detail,
      });
      if (response) {
        resolve({
          message: "Tạo mới thông tin thành công",
        });
      } else {
        resolve({
          error: 1,
          message: "Tạo mới thông tin thất bại",
        });
      }
    } catch (error) {
      console.log(error);
    }
  });
};
const getUserInfor = (id) => {
  return new Promise(async (resolve, reject) => {
    try {
      const response = await db.UserInformation.findAll({
        where: { user_id: id },
      });
      if (response) {
        resolve({
          data: response,
          message: "success",
        });
      } else {
        resolve({
          error: 1,
          message: "fail",
        });
      }
    } catch (error) {
      console.log(error);
    }
  });
};
module.exports = {
  createUserInfor,
  getUserInfor,
};
