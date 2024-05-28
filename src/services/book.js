const db = require("../models");

const createNewBookService = (data) => {
  return new Promise(async (resolve, reject) => {
    try {
      const response = await db.Book.create({
        name: data.name,
        image: data.image,
        sold: data.sold,
        stock: data.stock,
        price: data.price,
        rating: data.rating,
        discount: data.discount,
        sale: data.sale,
        page: data.page,
        description: data.description,
        author_id: data.author_id,
        category_id: data.category_id,
        supplier_id: data.supplier_id,
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
const deleteBookService = (id) => {
  return new Promise(async (resolve, reject) => {
    try {
      const book = await db.Book.findOne({
        where: { id: id },
      });
      if (book) {
        const response = await db.Book.destroy({
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
    } catch (error) {}
  });
};
const updateBookService = (data) => {
  return new Promise(async (resolve, reject) => {
    try {
      const book = await db.Book.findOne({
        where: { id: id },
      });
      if (book) {
        const response = await db.update(
          {
            name: data.name,
            image: data.image,
            sold: data.sold,
            stock: data.stock,
            price: data.price,
            rating: data.rating,
            discount: data.discount,
            sale: data.sale,
            page: data.page,
            description: data.description,
            author_id: data.author_id,
            category_id: data.category_id,
            supplier_id: data.supplier_id,
          },
          {
            where: { id: id },
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
    } catch (error) {}
  });
};
const getAllBookService = () => {
  return new Promise(async (resolve, reject) => {
    try {
      const books = await db.Book.findAll({});
      if (books) {
        resolve({
          data: books,
          message: "get all book",
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
const getOneBookService = (id) => {
  return new Promise(async (resolve, reject) => {
    try {
      const book = await db.Book.findOne({
        where: { id: id },
      });
      if (book) {
        resolve({
          data: book,
          message: "get a book",
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
  createNewBookService,
  deleteBookService,
  updateBookService,
  getAllBookService,
  getOneBookService,
};
