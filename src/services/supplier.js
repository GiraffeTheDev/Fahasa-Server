const db = require("../models");
const { Sequelize } = require("sequelize");
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
          original: data.original,
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
const getOneSupplierService = (id) => {
  return new Promise(async (resolve, reject) => {
    try {
      const response = await db.Supplier.findOne({
        where: { id: id },
      });
      if (response) {
        resolve({
          data: response,
          messgase: "Lấy tất cả nhà cung cấp thành công",
        });
      } else {
        resolve({
          data: [],
          error: 1,
          messgase: "Lấy nhà cung cấp không thành công",
        });
      }
    } catch (error) {
      console.log(error);
    }
  });
};
const updateSupplierService = (data) => {
  return new Promise(async (resolve, reject) => {
    try {
      const supplier = await db.Supplier.findOne({
        where: { id: data.id },
      });
      if (!supplier) {
        resolve({
          error: 1,
          message: "Nhà cung cấp không tồn tại",
        });
      }
      await db.Supplier.update(
        {
          name: data.name,
          image: data.image,
          original: data.original,
        },
        {
          where: { id: data.id },
        }
      );
      resolve({
        message: "Cập nhật thành công",
      });
    } catch (error) {
      console.log(error);
    }
  });
};
const searchSupplierByName = (name) => {
  return new Promise(async (resolve, reject) => {
    try {
      if (!name) {
        resolve({
          error: 1,
          message: "Không có tên được nhập vào!",
        });
      }
      const response = await db.Supplier.findAll({
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
const getSupplierViService = () => {
  return new Promise(async (resolve, reject) => {
    try {
      const response = await db.Supplier.findAll({
        where: { original: "Domestic" },
      });
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
const getSupplierEnService = () => {
  return new Promise(async (resolve, reject) => {
    try {
      const response = await db.Supplier.findAll({
        where: { original: "Foreign" },
      });
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
  updateSupplierService,
  getOneSupplierService,
  searchSupplierByName,
  getSupplierViService,
  getSupplierEnService,
};
