const db = require("../models");

const createSupplierService = (data) => {
  return new Promise(async (resolve, reject) => {
    try {
      if (!data) {
        resolve({
          message: "Data khong duoc nhap vao",
        });
      } else {
        const response = db.Supplier.create({
          name: data.name,
          image: data.image,
        });
        if (response) {
          resolve({
            message: "Thêm mới thành công!",
          });
        } else {
          resolve({
            message: "Thêm mới thất bại!",
          });
        }
      }
    } catch (error) {
      console.log(error);
    }
  });
};
const deleteSupplierService = (id) => {
  return new Promise(async (resolve, reject) => {
    try {
      const response = db.Supplier.findOne({
        where: { id: id },
      });
      if (!response) {
        resolve({
          message: "Nhà cung cấp không tồn tại",
        });
      } else {
        const response = db.Supplier.destroy({
          where: { id: id },
        });
        if (response) {
          resolve({
            message: "Xóa thành công",
          });
        } else {
          resolve({
            message: "Xóa không thành công",
          });
        }
      }
    } catch (error) {
      console.log(error);
    }
  });
};
const getAllSupplierServie = () => {
  return new Promise(async (resolve, reject) => {
    try {
      const response = await db.Supplier.findAll({});
      if (response) {
        resolve({
          message: "Lất tất cả Nhà cung cấp thành công!",
          data: response,
        });
      } else {
        resolve({
          message: "Lất tất cả Nhà cung cấp thất bại!",
          data: [],
        });
      }
    } catch (error) {
      console.log(error);
    }
  });
};
module.exports = {
  createSupplierService,
  deleteSupplierService,
  getAllSupplierServie,
};
