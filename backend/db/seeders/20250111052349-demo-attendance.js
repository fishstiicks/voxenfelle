'use strict';

let options = {};
if (process.env.NODE_ENV === 'production') {
  options.schema = process.env.SCHEMA;
}


module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('Attendances', [{
      username: 'Lok',
      story: 'An Audience',
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      username: 'Nelle',
      story: 'Candle Ceremony (I)',
      createdAt: new Date(),
      updatedAt: new Date()
    }], {});
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Attendances', null, {});
  }
};
