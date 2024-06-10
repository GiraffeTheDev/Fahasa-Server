const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Publisher extends Model {
    static associate(models) {
      Publisher.hasMany(models.Book, {
        foreignKey: "publisher_id",
        as: "Publisher",
      });
    }
  }

  Publisher.init(
    {
      // Model attributes are defined here
      name: {
        type: DataTypes.STRING,
        allowNull: true,
      },
    },
    {
      sequelize,
      modelName: "Publisher",
    }
  );
  return Publisher;
};
