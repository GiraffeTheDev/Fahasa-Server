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
        allowNull: false,
      },
      voucher_count: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      discount_percent: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      user_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      start_date: {
        type: DataTypes.DATE,
        allowNull: false,
      },
      end_date: {
        type: DataTypes.DATE,
        allowNull: false,
      },
    },
    {
      sequelize,
      modelName: "Voucher",
    }
  );
  return Voucher;
};
