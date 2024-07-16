const db = require("../models");

const createNewComment = (data) => {
  return new Promise(async (resolve, reject) => {
    try {
      const response = await db.Comment.create({
        product_id: parseInt(data.product_id),
        name: data.name,
        content: data.content,
        user_id: data.user_id,
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
const getAllCommentWithProduct = (product) => {
  return new Promise(async (resolve, reject) => {
    try {
      const response = await db.Comment.findAll({
        where: { product_id: product },
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
const deleteCommentService = (id) => {
  return new Promise(async (resolve, reject) => {
    try {
      const comment = await db.Comment.findOne({
        where: { id: id },
      });
      if (comment) {
        const response = await db.Comment.destroy({
          where: { id: id },
        });
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

module.exports = {
  createNewComment,
  getAllCommentWithProduct,
  deleteCommentService,
};
