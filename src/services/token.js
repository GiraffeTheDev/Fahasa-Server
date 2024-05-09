const jwt = require("jsonwebtoken");
require("dotenv").config();
const createAccessToken = (payload) => {
  let token = "";
  try {
    token = jwt.sign(payload, process.env.JWT_SECRET, { expiresIn: "30m" });
  } catch (error) {
    console.log(error);
  }
  return token;
};
const createRefreshToken = (payload) => {
  let token = "";
  try {
    token = jwt.sign(payload, process.env.JWT_REFRESH, { expiresIn: "365d" });
  } catch (error) {
    console.log(error);
  }
  return token;
};
const verifyToken = (token) => {
  let data = null;
  try {
    let decoded = jwt.verify(token, process.env.JWT_SECRET);
    data = decoded;
  } catch (error) {
    console.log(error);
  }
  return data;
};
const checkToken = (req, res, next) => {
  if (nonSecurePaths.includes(req.path)) return next();
  let cookies = req.cookies;
  if (cookies && cookies.access_token) {
    const access_token = cookies.access_token;
    const decoded = verifyToken(access_token);
    if (decoded) {
      req.user = decoded;
      next();
    } else {
      return res.status(401).json({
        message: "No Authentication ? You must be login!",
      });
    }
  } else {
    return res.status(401).json({
      message: "No Authentication ? You must be login!",
    });
  }
};

module.exports = {
  createAccessToken,
  checkToken,
  verifyToken,
  createRefreshToken,
};
