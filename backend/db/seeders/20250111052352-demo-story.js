'use strict';

let options = {};
if (process.env.NODE_ENV === 'production') {
  options.schema = process.env.SCHEMA;
}

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('Stories', [{
      title: 'Candle Ceremony (I)',
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      title: 'Candle Ceremony (II)',
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      title: 'An Audience',
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      title: 'Two Rooks (I)',
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      title: 'Two Rooks (II)',
      createdAt: new Date(),
      updatedAt: new Date()
    }], {});
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Stories', null, {});
  }
};
