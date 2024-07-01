const { paypal } = require("../config/paypal");

const convertVNDToUSD = (amountVND) => {
  const exchangeRate = parseInt(23000);
  return (parseInt(amountVND) / exchangeRate).toFixed(2);
};
function calculateTotalItemsPrice(orderDetails) {
  let total = 0;
  for (let detail of orderDetails) {
    total +=
      (detail.price - (detail.price * detail.discount) / 100) * detail.quantity;
  }
  return total;
}
const createPayment = async (total, orderDetails) => {
  const totalUSD = convertVNDToUSD(total);
  const create_payment_json = {
    intent: "sale",
    payer: {
      payment_method: "paypal",
    },
    redirect_urls: {
      return_url: "http://localhost:5173/paypal-confirm",
      cancel_url: "http://localhost:5173/paypal-fail",
    },
    transactions: [
      {
        item_list: {
          items: orderDetails.map((detail) => ({
            name: "Product",
            sku: `${detail.book_id}`, // ID sản phẩm
            price: `${convertVNDToUSD(
              detail.price - (detail.price * detail.discount) / 100
            )}`, // Giá sản phẩm chuyển từ VND sang USD
            currency: "USD",
            quantity: detail.quantity, // Số lượng sản phẩm
          })),
        },
        amount: {
          currency: "USD",
          total: `${totalUSD}`, // Tổng tiền thanh toán
        },
        description: "Payment description", // Mô tả thanh toán
      },
    ],
  };

  return new Promise((resolve, reject) => {
    paypal.payment.create(create_payment_json, (error, payment) => {
      if (error) {
        reject(error);
      } else {
        resolve(payment);
      }
    });
  });
};

const executePayment = async (paymentId, payerId, total) => {
  const totalUSD = convertVNDToUSD(total);
  const execute_payment_json = {
    payer_id: payerId,
    transactions: [
      {
        amount: {
          currency: "USD",
          total: totalUSD,
        },
      },
    ],
  };

  return new Promise((resolve, reject) => {
    paypal.payment.execute(
      paymentId,
      execute_payment_json,
      (error, payment) => {
        if (error) {
          reject(error);
        } else {
          resolve(payment);
        }
      }
    );
  });
};

module.exports = {
  createPayment,
  executePayment,
};
