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
module.exports = {
  createNewOrderService,
  getAllOrderService,
  getOneOrderService,
  updateOrderStatus,
};
