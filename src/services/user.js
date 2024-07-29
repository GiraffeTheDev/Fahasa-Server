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
const updateUserInfor = (data) => {
  return new Promise(async (resolve, reject) => {
    try {
      const user = await db.User.findOne({
        where: { id: data.id },
      });
      if (user) {
        const response = await db.User.update(
          {
            name: data.name,
            phone: data.phone,
          },
          {
            where: { id: user.id },
          }
        );
        if (response) {
          resolve({
            message: "success",
          });
        }
      }
    } catch (error) {
      console.log(error);
    }
  });
};
const getOneUserService = (id) => {
  return new Promise(async (resolve, reject) => {
    try {
      const response = await db.User.findOne({
        where: { id: id },
      });
      if (response) {
        resolve({
          message: "success",
          data: response,
        });
      }
    } catch (error) {
      console.log(error);
    }
  });
};
const updateUserRoleService = (data) => {
  return new Promise(async (resolve, reject) => {
    try {
      if (!data.id || !data.isAdmin) {
        resolve({
          error: 1,
          message: "fail",
        });
      }
      const user = await db.User.findOne({
        where: { id: data.id },
        raw: false,
      });
      if (user) {
        const response = await db.User.update(
          {
            isAdmin: data.isAdmin,
          },
          { where: { id: data.id } }
        );
        if (response) {
          resolve({
            message: "success",
          });
        }
      } else {
        if (response) {
          resolve({
            error: 1,
            message: "fail",
          });
        }
      }
    } catch (error) {
      console.log(error);
    }
  });
};
module.exports = {
  getAllUserService,
  updateUserInfor,
  getOneUserService,
  updateUserRoleService,
};
