const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    static associate(models) {
      User.hasMany(models.UserInformation, {
        foreignKey: "user_id",
        as: "UserInfor",
      });
      User.hasMany(models.Comment, {
        foreignKey: "user_id",
        as: "User",
      });
      User.hasMany(models.Order, {
        foreignKey: "user_id",
        as: "UserOrder",
      });
    }
  }

  User.init(
    {
      // Model attributes are defined here
      name: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      email: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      password: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      phone: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      isAdmin: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
      },
    },
    {
      sequelize,
      modelName: "User",
    }
  );
  return User;
};
