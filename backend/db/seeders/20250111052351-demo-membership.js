'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('Memberships', [{
      club: 'Fishing Club',
      character: 'War',
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      club: 'Fishing Club',
      character: 'Chou-chou',
      createdAt: new Date(),
      updatedAt: new Date()
    }], {});
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Memberships', null, {});
  }
};
