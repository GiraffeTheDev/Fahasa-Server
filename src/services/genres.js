const db = require("../models");
const { Sequelize } = require("sequelize");
const createNewGenresService = (data) => {
  return new Promise(async (resolve, reject) => {
    try {
      const response = await db.Genres.create({
        name: data.name,
        category_id: data.category_id,
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
            category_id: data.category_id,
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
        include: [
          {
            model: db.Category,
            as: "CategoryGenres",
          },
        ],
        nest: true,
        raw: false,
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
const searchGenresByName = (name) => {
  return new Promise(async (resolve, reject) => {
    try {
      if (!name) {
        resolve({
          error: 1,
          message: "Không có tên được nhập vào!",
        });
      }
      const response = await db.Genres.findAll({
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
const getAllGenresViService = () => {
  return new Promise(async (resolve, reject) => {
    try {
      const data = await db.Genres.findAll({
        include: [
          {
            model: db.Category,
            where: { type: "VI" },
            as: "CategoryGenres",
          },
        ],
        nest: true,
        raw: false,
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
const getAllGenresEnService = () => {
  return new Promise(async (resolve, reject) => {
    try {
      const data = await db.Genres.findAll({
        include: [
          {
            model: db.Category,
            where: { type: "EN" },
            as: "CategoryGenres",
          },
        ],
        nest: true,
        raw: false,
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
  searchGenresByName,
  getAllGenresViService,
  getAllGenresEnService,
};
