const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Supplier extends Model {
    static associate(models) {
      // define association here
    }
  }

  Supplier.init(
    {
      // Model attributes are defined here
      name: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      image: {
        type: DataTypes.STRING,
        allowNull: true,
      },
    },
    {
      sequelize,
      modelName: "Supplier",
    }
  );
  return Supplier;
};
