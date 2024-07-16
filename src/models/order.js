const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Order extends Model {
    static associate(models) {
      Order.hasMany(models.OrderDetail, {
        foreignKey: "order_id",
        as: "DetailData",
      });
      Order.belongsTo(models.UserInformation, {
        foreignKey: "infor_id",
        targetKey: "id",
        as: "InforData",
      });
      Order.belongsTo(models.User, {
        foreignKey: "user_id",
        targetKey: "id",
        as: "UserOrder",
      });
    }
  }

  Order.init(
    {
      // Model attributes are defined here
      infor_id: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
      user_id: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
      payment_method: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      order_status: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      shipping_fee: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
      total_price: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
    },
    {
      sequelize,
      modelName: "Order",
    }
  );
  return Order;
};
