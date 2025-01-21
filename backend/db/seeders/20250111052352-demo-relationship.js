'use strict';

let options = {};
if (process.env.NODE_ENV === 'production') {
  options.schema = process.env.SCHEMA;
}

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

  async down (queryInterface, Sequelize) {
    options.tableName = 'Relationships';
    const Op = Sequelize.Op;
    return queryInterface.bulkDelete('Relationships', null, {});
  }
};