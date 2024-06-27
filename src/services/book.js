const db = require("../models");
const { Sequelize, Op } = require("sequelize");
const moment = require("moment");
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
        chapter: data.chapter,
        description: data.description,
        author_id: data.author_id,
        category_id: data.category_id,
        supplier_id: data.supplier_id,
        genres_id: data.genres_id,
        publisher_id: data.publisher_id,
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
    } catch (error) {
      console.log(error);
    }
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
        where: { id: data.id },
      });
      if (book) {
        const response = await db.Book.update(
          {
            name: data.name,
            image: data.image,
            sold: data.sold,
            stock: data.stock,
            price: data.price,
            rating: data.rating,
            discount: data.discount,
            chapter: data.chapter,
            sale: data.sale,
            page: data.page,
            description: data.description,
            author_id: data.author_id,
            category_id: data.category_id,
            supplier_id: data.supplier_id,
            publisher_id: data.publisher_id,
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
        include: [
          {
            model: db.Supplier,
            attributes: ["name"],
            as: "Supplier",
          },
          {
            model: db.Category,
            attributes: ["name"],
            as: "Category",
          },
          {
            model: db.Author,
            attributes: ["name"],
            as: "Author",
          },
          {
            model: db.Genres,
            attributes: ["name"],
            as: "Genres",
          },
          {
            model: db.Publisher,
            attributes: ["name"],
            as: "Publisher",
          },
        ],
        nest: true,
        raw: false,
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
const searchBookByName = (name) => {
  return new Promise(async (resolve, reject) => {
    try {
      if (!name) {
        resolve({
          error: 1,
          message: "Không có tên được nhập vào!",
        });
      }
      const response = await db.Book.findAll({
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
const getAllFlashSaleBook = () => {
  return new Promise(async (resolve, reject) => {
    try {
      const response = await db.Book.findAll({
        where: {
          discount: {
            [Op.gte]: 30,
          },
        },
      });
      if (response) {
        resolve({
          data: response,
        });
      } else {
        resolve({
          error: 1,
          message: "Fail",
          data: [],
        });
      }
    } catch (error) {
      console.log(error);
    }
  });
};
const getFlashSaleBookHightlight = () => {
  return new Promise(async (resolve, reject) => {
    try {
      const response = await db.Book.findAll({
        where: {
          discount: {
            [Op.gte]: 30,
          },
        },
        order: [["createdAt", "DESC"]],
        limit: 5,
      });
      if (response) {
        resolve({
          data: response,
        });
      } else {
        resolve({
          error: 1,
          message: "Fail",
          data: [],
        });
      }
    } catch (error) {
      console.log(error);
    }
  });
};
const getBooksWithSupplier = (name) => {
  return new Promise(async (resolve, reject) => {
    try {
      if (!name) {
        resolve({
          error: 1,
          message: "Not fount Supplier",
        });
      }
      const response = await db.Book.findAll({
        include: [
          {
            model: db.Supplier,
            where: { name: name },
            as: "Supplier",
          },
        ],
        nest: true,
        raw: false,
      });
      resolve({
        message: "Success",
        data: response,
      });
    } catch (error) {
      console.log(error);
    }
  });
};
const getBooksWithCategoryVi = (id) => {
  return new Promise(async (resolve, reject) => {
    try {
      if (!id) {
        const response = await db.Book.findAll({
          include: [
            {
              model: db.Category,
              where: { type: "VI" },
              as: "Category",
            },
          ],
          nest: true,
          raw: false,
        });
        resolve({
          message: "Success",
          data: response,
        });
      } else {
        const response = await db.Book.findAll({
          include: [
            {
              model: db.Category,
              where: { id: id },
              as: "Category",
            },
          ],
          nest: true,
          raw: false,
        });
        resolve({
          message: "Success",
          data: response,
        });
      }
    } catch (error) {
      console.log(error);
    }
  });
};
const getBooksWithCategoryEn = (id) => {
  return new Promise(async (resolve, reject) => {
    try {
      if (!id) {
        const response = await db.Book.findAll({
          include: [
            {
              model: db.Category,
              where: { type: "EN" },
              as: "Category",
            },
          ],
          nest: true,
          raw: false,
        });
        resolve({
          message: "Success",
          data: response,
        });
      } else {
        const response = await db.Book.findAll({
          include: [
            {
              model: db.Category,
              where: { id: id },
              as: "Category",
            },
          ],
          nest: true,
          raw: false,
        });
        resolve({
          message: "Success",
          data: response,
        });
      }
    } catch (error) {
      console.log(error);
    }
  });
};
const queryBookWithMultiCondition = (query) => {
  return new Promise(async (resolve, reject) => {
    const { cateId, supId, priceRange } = query;

    const where = {};
    if (cateId) {
      where.category_id = cateId;
    }
    if (priceRange) {
      const [minPrice, maxPrice] = priceRange.split("-").map(Number);
      where.price = { [Sequelize.Op.between]: [minPrice, maxPrice] };
    }

    if (supId) {
      where.supplier_id = supId;
    }
    // Finding all books that match the 'where' conditions, including supplier details
    const books = await db.Book.findAll({
      where,
      include: [
        {
          model: db.Supplier,
          as: "Supplier",
        },
        {
          model: db.Category,
          as: "Category",
        },
      ],
      nest: true,
      raw: false,
    });

    // Returning the filtered list of books as a JSON response
    if (books) {
      resolve({
        data: books,
        message: "Success",
      });
    } else {
      resolve({
        message: "Fail",
      });
    }
  });
};
const getBooksVI = () => {
  return new Promise(async (resolve, reject) => {
    try {
      const response = await db.Book.findAll({
        attributes: ["name", "id", "image", "price", "discount"],
        include: [
          {
            model: db.Category,
            attributes: ["name"],
            where: { type: "VI" },
            as: "Category",
          },
        ],
        nest: true,
        raw: false,
      });
      resolve({
        message: "Success",
        data: response,
      });
    } catch (error) {
      console.log(error);
    }
  });
};
const getBooksEN = () => {
  return new Promise(async (resolve, reject) => {
    try {
      const response = await db.Book.findAll({
        attributes: ["name", "id", "image", "price", "discount"],
        include: [
          {
            model: db.Category,
            attributes: ["name"],
            where: { type: "EN" },
            as: "Category",
          },
        ],
        nest: true,
        raw: false,
      });
      resolve({
        message: "Success",
        data: response,
      });
    } catch (error) {
      console.log(error);
    }
  });
};
const getBestSellingBookDaily = () => {
  return new Promise(async (resolve, reject) => {
    try {
      const startOfDay = moment().startOf("day").toDate(); // Bắt đầu của ngày hôm nay
      const endOfDay = moment().endOf("day").toDate();
      const response = await db.OrderDetail.findAll({
        attributes: [
          "book_id",
          [
            db.sequelize.fn("SUM", db.sequelize.col("quantity")),
            "totalQuantity",
          ],
        ],
        include: [
          {
            model: db.Order,
            as: "DetailData",
            attributes: [],
            where: {
              order_status: "Đã giao",
              createdAt: {
                [Op.between]: [startOfDay, endOfDay],
              },
            },
          },
          {
            model: db.Book,
            as: "Book",
          },
        ],
        group: ["book_id"],
        order: [[db.sequelize.literal("totalQuantity"), "DESC"]],
        limit: 10,
        nest: true,
        raw: false, // Giả sử bạn muốn lấy top 10 quyển sách
      });

      resolve({
        message: "success",
        data: response,
      });
    } catch (error) {
      console.log(error);
      reject({
        message: "error",
        error,
      });
    }
  });
};
const getBestSellingBookWeek = () => {
  return new Promise(async (resolve, reject) => {
    try {
      const startOfWeek = moment().startOf("isoWeek").toDate();
      const endOfWeek = moment().endOf("isoWeek").toDate();
      const response = await db.OrderDetail.findAll({
        attributes: [
          "book_id",
          [
            db.sequelize.fn("SUM", db.sequelize.col("quantity")),
            "totalQuantity",
          ],
        ],
        include: [
          {
            model: db.Order,
            as: "DetailData",
            attributes: [],
            where: {
              order_status: "Đã giao",
              createdAt: {
                [Op.between]: [startOfWeek, endOfWeek],
              },
            },
          },
          {
            model: db.Book,
            as: "Book",
            include: [
              {
                model: db.Supplier,
                attributes: ["name"],
                as: "Supplier",
              },
              {
                model: db.Category,
                attributes: ["name"],
                as: "Category",
              },
              {
                model: db.Author,
                attributes: ["name"],
                as: "Author",
              },
              {
                model: db.Genres,
                attributes: ["name"],
                as: "Genres",
              },
              {
                model: db.Publisher,
                attributes: ["name"],
                as: "Publisher",
              },
            ],
          },
        ],
        group: ["book_id"],
        order: [[db.sequelize.literal("totalQuantity"), "DESC"]],
        limit: 10,
        nest: true,
        raw: false, // Giả sử bạn muốn lấy top 10 quyển sách
      });

      resolve({
        message: "success",
        data: response,
      });
    } catch (error) {
      console.log(error);
      reject({
        message: "error",
        error,
      });
    }
  });
};
const bookSearchWithMultiQuery = (input) => {
  return new Promise(async (resolve, reject) => {
    try {
      const { query } = input;
      if (!query) {
        resolve({
          data: [],
        });
      }
      // if (name) {
      //   where.name = { [Op.like]: `%${name}%` };
      // }
      // const include = [];
      // if (author) {
      //   include.push({
      //     model: db.Author,
      //     where: { name: { [Op.like]: `%${author}%` } },
      //     as: "Author",
      //   });
      // }

      // if (supplier) {
      //   include.push({
      //     model: db.Supplier,
      //     where: { name: { [Op.like]: `%${supplier}%` } },
      //     as: "Supplier",
      //   });
      // }
      // if (publisher) {
      //   include.push({
      //     model: db.Publisher,
      //     where: { name: { [Op.like]: `%${publisher}%` } },
      //     as: "Publisher",
      //   });
      // }
      const where = {
        [Op.or]: [
          { name: { [Op.like]: `%${query}%` } },
          { "$Author.name$": { [Op.like]: `%${query}%` } },
          { "$Supplier.name$": { [Op.like]: `%${query}%` } },
          { "$Publisher.name$": { [Op.like]: `%${query}%` } },
        ],
      };
      const books = await db.Book.findAll({
        where,
        attributes: ["image", "name", "id"],
        include: [
          {
            model: db.Author,
            as: "Author",
            attributes: ["name"],
          },
          {
            model: db.Supplier,
            as: "Supplier",
            attributes: ["name"],
          },
          {
            model: db.Publisher,
            as: "Publisher",
            attributes: ["name"],
          },
        ],
        limit: 6,
        nest: true,
        raw: false,
      });

      if (books) {
        resolve({
          data: books,
          message: "success",
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
  searchBookByName,
  getAllFlashSaleBook,
  getFlashSaleBookHightlight,
  getBooksWithSupplier,
  getBooksWithCategoryEn,
  getBooksWithCategoryVi,
  queryBookWithMultiCondition,
  getBooksVI,
  getBooksEN,
  getBestSellingBookDaily,
  getBestSellingBookWeek,
  bookSearchWithMultiQuery,
};
