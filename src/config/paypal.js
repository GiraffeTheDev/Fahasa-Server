const paypal = require("paypal-rest-sdk");
require("dotenv").config();
paypal.configure({
  mode: "sandbox",
  client_id: process.env.CLIENT_ID,
  client_secret: process.env.SECRET_KEY_PAYPAL,
});

module.exports = { paypal };
