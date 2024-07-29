const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Book extends Model {
    static associate(models) {
      Book.belongsTo(models.Supplier, {
        foreignKey: "supplier_id",
        targetKey: "id",
        as: "Supplier",
      });
      Book.belongsTo(models.Category, {
        foreignKey: "category_id",
        targetKey: "id",
        as: "Category",
      });
      Book.belongsTo(models.Genres, {
        foreignKey: "genres_id",
        targetKey: "id",
        as: "Genres",
      });
      Book.belongsTo(models.Author, {
        foreignKey: "author_id",
        targetKey: "id",
        as: "Author",
      });
      Book.belongsTo(models.Publisher, {
        foreignKey: "publisher_id",
        targetKey: "id",
        as: "Publisher",
      });
      Book.hasMany(models.OrderDetail, {
        foreignKey: "book_id",
        as: "Book",
      });
      Book.hasMany(models.Comment, {
        foreignKey: "product_id",
        as: "Comment",
      });
    }
  }

  Book.init(
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
      sold: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
      stock: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
      price: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
      rating: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
      discount: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
      sale: {
        type: DataTypes.BOOLEAN,
        allowNull: true,
      },
      page: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
      chapter: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
      description: {
        type: DataTypes.TEXT,
        allowNull: true,
      },
      author_id: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
      category_id: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
      supplier_id: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
      genres_id: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
      publisher_id: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
      deleted: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
    },
    {
      sequelize,
      modelName: "Book",
    }
  );
  return Book;
};
