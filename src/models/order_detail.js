const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class OrderDetail extends Model {
    static associate(models) {
      OrderDetail.belongsTo(models.Order, {
        foreignKey: "order_id",
        targetKey: "id",
        as: "DetailData",
      });
      OrderDetail.belongsTo(models.Book, {
        foreignKey: "book_id",
        targetKey: "id",
        as: "Book",
      });
    }
  }

  OrderDetail.init(
    {
      // Model attributes are defined here
      order_id: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
      book_id: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      price: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
      quantity: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
    },
    {
      sequelize,
      modelName: "OrderDetail",
    }
  );
  return OrderDetail;
};
