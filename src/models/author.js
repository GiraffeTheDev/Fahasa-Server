const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Author extends Model {
    static associate(models) {
      // define association here
    }
  }

  Author.init(
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
      modelName: "Author",
    }
  );
  return Author;
};
