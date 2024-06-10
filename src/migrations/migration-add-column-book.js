module.exports = {
    up: (queryInterface, Sequelize) => {
      return Promise.all([
        queryInterface.addColumn("Books", "publisher_id", {
          type: Sequelize.INTEGER,
        }),
      ]);
    },
  
    down: (queryInterface, Sequelize) => {
      return Promise.all([queryInterface.removeColumn("Books", "publisher_id")]);
    },
  };
  