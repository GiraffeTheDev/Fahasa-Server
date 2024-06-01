const db = require("../models");

const createNewGenresService = (data) => {
  return new Promise(async (resolve, reject) => {
    try {
      const response = await db.Genres.create({
        name: data.name,
      });
      if (response) {
        resolve({
          message: "Tạo mới thành công",
        });
      } else {
        resolve({
          message: "Tạo mới thất bại",
        });
      }
    } catch (error) {}
  });
};
const deleteGenresService = (id) => {
  return new Promise(async (resolve, reject) => {
    try {
      const Genres = await db.Genres.findOne({
        where: { id: id },
      });
      if (Genres) {
        const response = await db.Genres.destroy({
          where: {
            id: id,
          },
        });
        if (response) {
          resolve({
            message: "Xóa thành công",
          });
        } else {
          resolve({
            message: "Xóa thất bại",
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
const updateGenresService = (data) => {
  return new Promise(async (resolve, reject) => {
    try {
      const Genres = await db.Genres.findOne({
        where: { id: data.id },
      });
      if (Genres) {
        const response = await db.Genres.update(
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
const getAllGenresService = () => {
  return new Promise(async (resolve, reject) => {
    try {
      const data = await db.Genres.findAll({});
      if (data) {
        resolve({
          data: data,
          message: "get all Genres",
        });
      } else {
        resolve({
          data: [],
          message: "get all fail",
        });
      }
    } catch (error) {
      console.log(error);
    }
  });
};
const getOneGenresService = (id) => {
  return new Promise(async (resolve, reject) => {
    try {
      const data = await db.Genres.findOne({
        where: { id: id },
      });
      if (data) {
        resolve({
          data: data,
          message: "get a Genres",
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
  createNewGenresService,
  deleteGenresService,
  updateGenresService,
  getAllGenresService,
  getOneGenresService,
};
