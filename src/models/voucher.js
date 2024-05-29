const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Voucher extends Model {
    static associate(models) {
      // define association here
    }
  }

  Voucher.init(
    {
      // Model attributes are defined here
      voucher_code: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      voucher_count: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
      discount_percent: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
      user_id: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
      start_date: {
        type: DataTypes.DATE,
        allowNull: true,
      },
      end_date: {
        type: DataTypes.DATE,
        allowNull: true,
      },
    },
    {
      sequelize,
      modelName: "Voucher",
    }
  );
  return Voucher;
};
