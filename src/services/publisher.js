const db = require("../models");
const { Sequelize } = require("sequelize");
const createNewPublisherService = (data) => {
  return new Promise(async (resolve, reject) => {
    try {
      const response = await db.Publisher.create({
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
const deletePublisherService = (id) => {
  return new Promise(async (resolve, reject) => {
    try {
      const Publisher = await db.Publisher.findOne({
        where: { id: id },
      });
      if (Publisher) {
        const response = await db.Publisher.destroy({
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
const updatePublisherService = (data) => {
  return new Promise(async (resolve, reject) => {
    try {
      const Publisher = await db.Publisher.findOne({
        where: { id: data.id },
      });
      if (Publisher) {
        const response = await db.Publisher.update(
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
const getAllPublisherService = () => {
  return new Promise(async (resolve, reject) => {
    try {
      const data = await db.Publisher.findAll({});
      if (data) {
        resolve({
          data: data,
          message: "get all Publisher",
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
const getOnePublisherService = (id) => {
  return new Promise(async (resolve, reject) => {
    try {
      const data = await db.Publisher.findOne({
        where: { id: id },
      });
      if (data) {
        resolve({
          data: data,
          message: "get a Publisher",
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
const searchPublisherByName = (name) => {
  return new Promise(async (resolve, reject) => {
    try {
      if (!name) {
        resolve({
          error: 1,
          message: "Không có tên được nhập vào!",
        });
      }
      const response = await db.Publisher.findAll({
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

module.exports = {
  createNewPublisherService,
  deletePublisherService,
  updatePublisherService,
  getAllPublisherService,
  getOnePublisherService,
  searchPublisherByName,
};
