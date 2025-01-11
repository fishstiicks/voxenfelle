'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('Relationships', [{
      you: 'War',
      them: 'Chou-chou',
      special: 'Soulbond',
      description: 'Annoying pink thing, but I like her.',
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      you: 'Chou-chou',
      them: 'War',
      special: 'N/A',
      description: 'Old comrades.',
      createdAt: new Date(),
      updatedAt: new Date()
    }], {});
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Relationships', null, {});
  }
};
