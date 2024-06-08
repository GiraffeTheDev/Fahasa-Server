const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Genres extends Model {
    static associate(models) {
      Genres.hasMany(models.Book, {
        foreignKey: "genres_id",
        as: "Genres",
      });
      Genres.belongsTo(models.Category, {
        foreignKey: "category_id",
        targetKey: "id",
        as: "CategoryGenres",
      });
    }
  }

  Genres.init(
    {
      // Model attributes are defined here
      name: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      category_id: {
        type: DataTypes.INTEGER,
        allowNull: true,
        references: {
          model: "Category", // Tên bảng trong cơ sở dữ liệu
          key: "id",
        },
      },
    },
    {
      sequelize,
      modelName: "Genres",
    }
  );
  return Genres;
};
