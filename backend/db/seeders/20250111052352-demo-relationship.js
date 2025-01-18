'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('Relationships', [{
      you: 'War',
      them: 'Chou-chou',
      special: 'Protective',
      description: 'Annoying pink thing, but I like her.',
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      you: 'Chou-chou',
      them: 'War',
      description: 'Old comrades.',
      createdAt: new Date(),
      updatedAt: new Date()
    }], {});
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Relationships', null, {});
  }
};
