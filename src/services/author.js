const db = require("../models");

const createAuthorService = (data) => {
  return new Promise(async (resolve, reject) => {
    try {
      if (!data) {
        resolve({
          message: "Data khong duoc nhap vao",
        });
      } else {
        const response = db.Author.create({
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
const deleteAuthorService = (id) => {
  return new Promise(async (resolve, reject) => {
    try {
      const response = db.Author.findOne({
        where: { id: id },
      });
      if (!response) {
        resolve({
          message: "Tác giả không tồn tại",
        });
      } else {
        const response = db.Author.destroy({
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
const getAllAuthorServie = () => {
  return new Promise(async (resolve, reject) => {
    try {
      const response = await db.Author.findAll({});
      if (response) {
        resolve({
          message: "Lất tất cả Tác giả thành công!",
          data: response,
        });
      } else {
        resolve({
          message: "Lất tất cả Tác giả thất bại!",
          data: [],
        });
      }
    } catch (error) {
      console.log(error);
    }
  });
};
module.exports = {
  createAuthorService,
  deleteAuthorService,
  getAllAuthorServie,
};
