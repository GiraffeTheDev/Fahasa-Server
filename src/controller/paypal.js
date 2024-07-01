const { convertUSDToVND } = require("../services/common");
const { createNewOrderService } = require("../services/order");
const { executePayment, createPayment } = require("../services/paypal");

const createPaymentController = async (req, res) => {
  const { total, orderDetails } = req.body;

  try {
    const payment = await createPayment(total, orderDetails);
    for (let i = 0; i < payment.links.length; i++) {
      if (payment.links[i].rel === "approval_url") {
        return res.json({ forwardLink: payment.links[i].href });
      }
    }
    res.status(500).send("No approval_url found in PayPal response");
  } catch (error) {
    res.status(500).send(error);
  }
};

const executePaymentController = async (req, res) => {
  const payerId = req.query.PayerID;
  const paymentId = req.query.paymentId;
  const total = req.query.total;
  console.log(req.query);
  try {
    const payment = await executePayment(paymentId, payerId, total);
    const orderData = {
      infor_id: payment.payer.payer_info.payer_id, // Sử dụng ID người trả từ PayPal hoặc thông tin khác
      payment_method: "paypal",
      shipping_fee: 32000, // Cập nhật phí vận chuyển nếu cần
      total_price: total,
      orderDetails: payment.transactions[0].item_list.items.map((item) => ({
        book_id: item.sku, // Sử dụng mã sản phẩm từ PayPal
        quantity: item.quantity,
        price: convertUSDToVND(item.price),
      })),
      order_status: "Chờ xác nhận",
    };
    console.log(orderData);
    await createNewOrderService(orderData);
    res.json({ message: "Payment successful" });
  } catch (error) {
    console.log("error 28", error);
    res.status(500).send(error);
  }
};

const cancelPaymentController = (req, res) => {
  res.status(200).json({ message: "Payment cancelled" });
};

module.exports = {
  createPaymentController,
  executePaymentController,
  cancelPaymentController,
};
