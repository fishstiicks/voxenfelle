'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('Clubs', [{
      name: 'Fishing Club',
      creator: 'Lok',
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      name: 'Dueling Club',
      description: 'A club to practice dueling.',
      creator: 'Nelle',
      createdAt: new Date(),
      updatedAt: new Date()
    }], {});
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Clubs', null, {});
  }
};
