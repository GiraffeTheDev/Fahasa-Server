const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Genres extends Model {
    static associate(models) {
      // define association here
    }
  }

  Genres.init(
    {
      // Model attributes are defined here
      name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    },
    {
      sequelize,
      modelName: "Genres",
    }
  );
  return Genres;
};
