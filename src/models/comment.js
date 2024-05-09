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
        allowNull: false,
      },
      book_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      content: {
        type: DataTypes.TEXT,
        allowNull: false,
      },

    },
    {
      sequelize,
      modelName: "Comment",
    }
  );
  return Comment;
};
