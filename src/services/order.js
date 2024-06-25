const db = require("../models");

const createNewOrderService = (data) => {
  return new Promise(async (resolve, reject) => {
    try {
      const response = await db.Order.create({
        infor_id: parseInt(data.infor_id),
        payment_method: data.payment_method,
        shipping_fee: data.shipping_fee,
        total_price: data.total_price,
        order_status: "Chờ xác nhận",
      });
      const details = data.orderDetails.map((detail) => {
        db.OrderDetail.create({
          order_id: response.id,
          book_id: detail.book_id,
          quantity: detail.quantity,
          price: detail.price,
        });
      });
      await Promise.all(details);
      resolve({
        message: "success",
      });
    } catch (error) {
      console.log(error);
    }
  });
};
const getAllOrderService = () => {
  return new Promise(async (resolve, reject) => {
    try {
      const response = await db.Order.findAll({
        attributes: ["id", "total_price", "createdAt", "order_status"],
      });
      if (response) {
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
const getOneOrderService = (id) => {
  return new Promise(async (resolve, reject) => {
    try {
      const response = await db.Order.findOne({
        where: { id: id },
        attributes: ["id", "total_price", "createdAt", "order_status"],
        include: [
          {
            model: db.OrderDetail,
            as: "DetailData",
            include: [{ model: db.Book, as: "Book" }],
          },
          {
            model: db.UserInformation,
            as: "InforData",
          },
        ],
        nest: true,
        raw: false,
      });
      resolve({
        data: response,
      });
    } catch (error) {
      console.log(error);
    }
  });
};
const updateOrderStatus = (data) => {
  return new Promise(async (resolve, reject) => {
    try {
      const order = await db.Order.findOne({
        where: { id: data.id },
        attributes: ["id", "order_status"],
      });
      if (order) {
        const response = await db.Order.update(
          {
            order_status: data.order_status,
          },
          {
            where: { id: order.id },
          }
        );
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
const getRevenuePerMonthService = () => {
  return new Promise(async (resolve, reject) => {
    try {
      const response = await db.Order.findAll({
        where: { order_status: "Đã giao" },
        attributes: [
          [
            db.sequelize.fn(
              "DATE_FORMAT",
              db.sequelize.col("createdAt"),
              "%m-%Y"
            ),
            "month",
          ],
          [
            db.sequelize.fn("SUM", db.sequelize.col("total_price")),
            "total_revenue",
          ],
        ],
        group: [
          db.sequelize.fn(
            "DATE_FORMAT",
            db.sequelize.col("createdAt"),
            "%m-%Y"
          ),
        ],
        order: [
          [
            db.sequelize.fn(
              "DATE_FORMAT",
              db.sequelize.col("createdAt"),
              "%m-%Y"
            ),
            "ASC",
          ],
        ],
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
const getCountRevenueOrderService = () => {
  return new Promise(async (resolve, reject) => {
    try {
      const totalOrders = await db.Order.findAll({
        attributes: [
          [db.sequelize.fn("COUNT", db.sequelize.col("id")), "total_order"],
        ],
      });

      const totalRevenue = await db.Order.findAll({
        attributes: [
          [
            db.sequelize.fn("SUM", db.sequelize.col("total_price")),
            "total_revenue",
          ],
        ],
        where: {
          order_status: "Đã giao",
        },
      });
      const totalBook = await db.Book.findAll({
        attributes: [
          [db.sequelize.fn("COUNT", db.sequelize.col("id")), "total_book"],
        ],
      });
      const total_order = totalOrders[0].total_order;
      const total_revenue = totalRevenue[0].total_revenue;
      const total_book = totalBook[0].total_book;
      const result = {
        total_order,
        total_revenue,
        total_book,
      };
      resolve({
        data: result,
      });
    } catch (error) {
      console.log(error);
    }
  });
};
const getAllOrderWithQuery = (query) => {
  return new Promise(async (resolve, reject) => {
    try {
      const response = await db.Order.findAll({
        where: { order_status: query },
        //attributes: { exclude: "order_id" },
        attributes: ["id", "order_status", "total_price", "createdAt"],
        include: [
          {
            model: db.OrderDetail,
            as: "DetailData",
          },
        ],
        nest: true,
        raw: false,
      });
      if (response) {
        resolve({
          message: "success",
          data: response,
        });
      } else {
        resolve({
          error: 1,
          message: "failed",
          data: [],
        });
      }
    } catch (error) {
      console.log(error);
    }
  });
};
module.exports = {
  createNewOrderService,
  getAllOrderService,
  getOneOrderService,
  updateOrderStatus,
  getRevenuePerMonthService,
  getCountRevenueOrderService,
  getAllOrderWithQuery,
};
