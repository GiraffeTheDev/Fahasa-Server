const db = require("../models");

const createVoucherService = (data) => {
  return new Promise(async (resolve, reject) => {
    try {
      const response = await db.Voucher.create({
        voucher_code: data.voucher_code,
        voucher_count: data.voucher_count,
        discount_percent: data.discount_percent,
        user_id: data.user_id,
        start_date: data.start_date,
        end_date: data.end_date,
      });
      if (response) {
        resolve({
          message: "Tạo mã giảm giá thành công",
        });
      } else {
        resolve({
          message: "Tạo mã giảm giá thất bại",
        });
      }
    } catch (error) {
      console.log(error);
    }
  });
};
const getAllVoucherService = () => {
  return new Promise(async (resolve, reject) => {
    try {
      const response = await db.Voucher.findAll({});
      if (response) {
        resolve({
          message: "Lấy tất cả mã giảm giá thành công!",
          data: response,
        });
      } else {
        resolve({
          message: "Lấy tất cả mã giảm giá thất bại!",
          data: [],
        });
      }
    } catch (error) {
      console.log(error);
    }
  });
};
const deleteVoucherService = (id) => {
  return new Promise(async (resolve, reject) => {
    try {
      const voucher = await db.Voucher.findOne({
        where: { id: id },
      });
      if (!voucher) {
        resolve({
          message: "Voucher không tồn tại",
        });
      } else {
        const response = await db.Voucher.destroy({
          where: { id: id },
        });
        if (response) {
          resolve({
            message: "Xoá thành công",
          });
        } else {
          resolve({
            message: "Xóa thất bại",
          });
        }
      }
    } catch (error) {
      console.log(error);
    }
  });
};
const getAVoucherService = (id) => {
  return new Promise(async (resolve, reject) => {
    try {
      const response = await db.Voucher.findOne({
        where: { id: id },
      });
      if (response) {
        resolve({
          message: "Lấy voucher thành công",
          data: response,
        });
      } else {
        resolve({
          message: "Lấy voucher thất bại",
          data: {},
        });
      }
    } catch (error) {
      console.log(error);
    }
  });
};
const updateVoucherService = (data) => {
  return new Promise(async (resolve, reject) => {
    try {
      const voucher = await db.Voucher.findOne({
        where: { id: data.id },
      });
      if (!voucher) {
        resolve({
          message: "Vouhcer không tồn tại",
        });
      } else {
        const response = await db.Voucher.update(
          {
            voucher_code: data.voucher_code,
            voucher_count: data.voucher_count,
            discount_percent: data.discount_percent,
            user_id: data.user_id,
            start_date: data.start_date,
            end_date: data.end_date,
          },
          {
            where: { id: data.id },
          }
        );
        if (response) {
          resolve({
            message: "Cập nhật voucher thành công",
          });
        } else {
          resolve({
            message: "Cập nhật voucher thất bại",
          });
        }
      }
    } catch (error) {
      console.log(error);
    }
  });
};
module.exports = {
  createVoucherService,
  getAllVoucherService,
  deleteVoucherService,
  updateVoucherService,
  getAVoucherService,
};
