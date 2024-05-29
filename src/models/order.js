const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Order extends Model {
    static associate(models) {
      // define association here
    }
  }

  Order.init(
    {
      // Model attributes are defined here
      user_id: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
      payment_method: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      shipping_address: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      phone_receive: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      order_status: {
        type: DataTypes.STRING,
        allowNull: true,
        defaultValue: "pending",
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
