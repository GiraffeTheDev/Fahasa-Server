const db = require("../models");

const updateStockBookService = (data) => {
  return new Promise(async (resolve, reject) => {
    try {
      const id = parseInt(data.id);
      const stockData = parseInt(data.stock);
      if (stockData === NaN) return;
      const response = await db.Book.findOne({
        where: { id: id },
        attributes: ["id", "stock"],
      });
      if (!response) {
        resolve({
          error: 1,
          message: "Không tìm thấy sản phẩm",
        });
      } else {
        const responseBook = await db.Book.update(
          {
            stock: response.stock + stockData,
          },
          {
            where: { id: id },
          }
        );

        resolve({
          message: "success",
        });
      }
    } catch (error) {}
  });
};
module.exports = {
  updateStockBookService,
};
