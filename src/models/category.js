const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Category extends Model {
    static associate(models) {
      Category.hasMany(models.Book, {
        foreignKey: "category_id",
        as: "Category",
      });
      Category.hasMany(models.Genres, {
        foreignKey: "category_id",
        as: "CategoryGenres",
      });
    }
  }

  Category.init(
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
      type: {
        type: DataTypes.STRING,
        allowNull: true,
      },
    },
    {
      sequelize,
      modelName: "Category",
    }
  );
  return Category;
};
