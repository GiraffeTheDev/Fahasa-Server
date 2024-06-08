module.exports = {
    up: (queryInterface, Sequelize) => {
      return Promise.all([
        queryInterface.addColumn("Genres", "category_id", {
          type: Sequelize.INTEGER,
        }),
      ]);
    },
  
    down: (queryInterface, Sequelize) => {
      return Promise.all([queryInterface.removeColumn("Genres", "category_id")]);
    },
  };
  