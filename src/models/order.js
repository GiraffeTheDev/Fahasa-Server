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
        allowNull: false,
      },
      payment_method: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      shipping_address: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      phone_receive: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      order_status: {
        type: DataTypes.STRING,
        allowNull: false,
        defaultValue: "pending",
      },
      shipping_fee: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      total_price: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
    },
    {
      sequelize,
      modelName: "Order",
    }
  );
  return Order;
};
