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
const updateAuthorService = (data) => {
  return new Promise(async (resolve, reject) => {
    try {
      const Author = await db.Author.findOne({
        where: { id: data.id },
      });
      if (Author) {
        const response = await db.Author.update(
          {
            name: data.name,
          },
          {
            where: { id: data.id },
          }
        );
        if (response) {
          resolve({
            message: "Update thành công",
          });
        } else {
          resolve({
            message: "Update thất bại",
          });
        }
      } else {
        resolve({
          message: "404 not found",
        });
      }
    } catch (error) {
      console.log(error);
    }
  });
};
const getOneAuthorService = (id) => {
  return new Promise(async (resolve, reject) => {
    try {
      const data = await db.Author.findOne({
        where: { id: id },
      });
      if (data) {
        resolve({
          data: data,
          message: "get a Author",
        });
      } else {
        resolve({
          data: [],
          message: "get a fail",
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
  updateAuthorService,
  getOneAuthorService,
};
