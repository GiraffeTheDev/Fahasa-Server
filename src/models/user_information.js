const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class UserInformation extends Model {
    static associate(models) {
      // define association here
      UserInformation.belongsTo(models.User, {
        foreignKey: "user_id",
        targetKey: "id",
        as: "UserInfor",
      });
    }
  }

  UserInformation.init(
    {
      user_id: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
      user_name: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      phone: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      province: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      district: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      ward: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      address_detail: {
        type: DataTypes.TEXT,
        allowNull: false,
      },
    },
    {
      sequelize,
      modelName: "UserInformation",
    }
  );
  return UserInformation;
};
