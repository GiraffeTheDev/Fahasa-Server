const db = require("../models");
const { Sequelize } = require("sequelize");
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
          type: data.type,
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
      const response = await db.Category.findAll({
        include: [{ model: db.Genres, as: "CategoryGenres" }],
        nest: true,
        raw: false,
      });
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
const getOneCategoryService = (id) => {
  return new Promise(async (resolve, reject) => {
    try {
      const data = await db.Category.findOne({
        where: { id: id },
      });
      if (data) {
        resolve({
          message: "Get one",
          data: data,
        });
      } else {
        resolve({
          message: "fail",
          data: [],
        });
      }
    } catch (error) {
      console.log(error);
    }
  });
};
const updateCategoryService = (data) => {
  return new Promise(async (resolve, reject) => {
    try {
      const res = await db.Category.findOne({
        where: { id: data.id },
        raw: true,
      });
      if (!res) {
        resolve({
          errCode: 1,
          errorMessage: "Cate is not exist!",
        });
      }
      await db.Category.update(
        {
          name: data.name,
          image: data.image,
          type: data.type,
        },
        {
          where: { id: data.id },
        }
      );
      resolve({
        errCode: 0,
        message: "Update cate success",
      });
    } catch (error) {
      console.log(error);
    }
  });
};
const searchCateByName = (name) => {
  return new Promise(async (resolve, reject) => {
    try {
      if (!name) {
        resolve({
          error: 1,
          message: "Không có tên được nhập vào!",
        });
      }
      const response = await db.Category.findAll({
        where: { name: { [Sequelize.Op.like]: `%${name}%` } },
      });

      if (response) {
        resolve({
          data: response,
        });
      }
    } catch (error) {
      console.log(error);
    }
  });
};
const getAllCategoryVIService = () => {
  return new Promise(async (resolve, reject) => {
    try {
      const response = await db.Category.findAll({
        where: { type: "VI" },
        include: [{ model: db.Genres, as: "CategoryGenres" }],
        nest: true,
        raw: false,
      });
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
const getAllCategoryENService = () => {
  return new Promise(async (resolve, reject) => {
    try {
      const response = await db.Category.findAll({
        where: { type: "EN" },
        include: [{ model: db.Genres, as: "CategoryGenres" }],
        nest: true,
        raw: false,
      });
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
  updateCategoryService,
  getOneCategoryService,
  searchCateByName,
  getAllCategoryENService,
  getAllCategoryVIService,
};
