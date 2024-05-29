const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Comment extends Model {
    static associate(models) {
      // define association here
    }
  }

  Comment.init(
    {
      // Model attributes are defined here
      user_id: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
      book_id: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
      content: {
        type: DataTypes.TEXT,
        allowNull: true,
      },
    },
    {
      sequelize,
      modelName: "Comment",
    }
  );
  return Comment;
};
