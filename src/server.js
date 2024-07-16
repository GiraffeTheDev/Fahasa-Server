const express = require("express");
const app = express();
require("dotenv").config();
const cookieParser = require("cookie-parser");
const cors = require("cors");
const connection = require("./config/connectDB");
const authRoute = require("./routes/auth");
const supplierRoute = require("./routes/supplier");
const authorRoute = require("./routes/author");
const categoryRoute = require("./routes/category");
const voucherRoute = require("./routes/voucher");
const bookRoute = require("./routes/book");
const genresRoute = require("./routes/genres");
const userinforRoute = require("./routes/userinfor");
const orderRoute = require("./routes/order");
const publisherRoute = require("./routes/publisher");
const storageRoute = require("./routes/storage");
const paypalRoute = require("./routes/paypal");
const newsRoute = require("./routes/news");
const commentRoute = require("./routes/comment");
const corsOptions = {
  origin: true,
  credentials: true,
  optionSuccessStatus: 200,
};
app.use(cookieParser());
app.use(cors(corsOptions));
app.use(express.json({ limit: "50mb" }));
app.use(express.urlencoded({ limit: "50mb", extended: true }));
const port = process.env.PORT || 8000;
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", process.env.PORT_FRONT);
  res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE");
  res.header("Access-Control-Allow-Headers", "Content-Type, Authorization");
  // Trường hợp của preflight request
  if (req.method === "OPTIONS") {
    res.sendStatus(200);
  } else {
    next();
  }
});
authRoute(app);
supplierRoute(app);
authorRoute(app);
categoryRoute(app);
voucherRoute(app);
bookRoute(app);
genresRoute(app);
userinforRoute(app);
orderRoute(app);
publisherRoute(app);
storageRoute(app);
paypalRoute(app);
newsRoute(app);
commentRoute(app);
connection();
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
