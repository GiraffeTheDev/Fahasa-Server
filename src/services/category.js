const db = require("../models");

const createCategoryService = (data) => {
  return new Promise(async (resolve, reject) => {
    try {
      if (!data) {
        resolve({
          message: "Data khong duoc nhap vao",
        });
      } else {
        const response = db.Category.create({
          name: data.name,
          image: data.image,
        });
        if (response) {
          resolve({
            message: "Thêm mới thành công!",
          });
        } else {
          resolve({
            message: "Thêm mới thất bại!",
          });
        }
      }
    } catch (error) {
      console.log(error);
    }
  });
};
const deleteCategoryService = (id) => {
  return new Promise(async (resolve, reject) => {
    try {
      const response = db.Category.findOne({
        where: { id: id },
      });
      if (!response) {
        resolve({
          message: "Danh mục không tồn tại",
        });
      } else {
        const response = db.Category.destroy({
          where: { id: id },
        });
        if (response) {
          resolve({
            message: "Xóa thành công",
          });
        } else {
          resolve({
            message: "Xóa không thành công",
          });
        }
      }
    } catch (error) {
      console.log(error);
    }
  });
};
const getAllCategoryServie = () => {
  return new Promise(async (resolve, reject) => {
    try {
      const response = await db.Category.findAll({});
      if (response) {
        resolve({
          message: "Lất tất cả Danh mục thành công!",
          data: response,
        });
      } else {
        resolve({
          message: "Lất tất cả Danh mục thất bại!",
          data: [],
        });
      }
    } catch (error) {
      console.log(error);
    }
  });
};
module.exports = {
  createCategoryService,
  deleteCategoryService,
  getAllCategoryServie,
};
