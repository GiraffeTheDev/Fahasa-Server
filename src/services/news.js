const db = require("../models");

const createNewsService = (data) => {
  return new Promise(async (resolve, reject) => {
    try {
      const response = await db.News.create({
        title: data.title,
        image: data.image,
        content: data.content,
      });
      if (response) {
        resolve({
          message: "success",
        });
      }
    } catch (error) {
      console.log(error);
    }
  });
};
const getOneNews = (id) => {
  return new Promise(async (resolve, reject) => {
    try {
      const response = await db.News.findOne({
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
const getAllNews = () => {
  return new Promise(async (resolve, reject) => {
    try {
      const response = await db.News.findAll({});
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
const deleteNewService = (id) => {
  return new Promise(async (resolve, reject) => {
    try {
      const response = await db.News.findOne({
        where: { id: id },
      });
      if (response) {
        const news = await db.News.destroy({
          where: { id: id },
        });
        if (news) {
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
const updateNewsService = (data) => {
  return new Promise(async (resolve, reject) => {
    try {
      const res = await db.News.findOne({
        where: { id: data.id },
        raw: true,
      });
      if (!res) {
        resolve({
          errCode: 1,
          errorMessage: "News is not exist!",
        });
      }
      await db.News.update(
        {
          title: data.title,
          image: data.image,
          content: data.content,
        },
        {
          where: { id: data.id },
        }
      );
      resolve({
        errCode: 0,
        message: "Update news success",
      });
    } catch (error) {
      console.log(error);
    }
  });
};
const searchNewsByName = (title) => {
  return new Promise(async (resolve, reject) => {
    try {
      if (!title) {
        resolve({
          error: 1,
          message: "Không có tên được nhập vào!",
        });
      }

      const response = await db.News.findAll({
        where: { title: { [db.Sequelize.Op.like]: `%${title}%` } },
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
  getOneNews,
  getAllNews,
  createNewsService,
  updateNewsService,
  deleteNewService,
  searchNewsByName,
};
