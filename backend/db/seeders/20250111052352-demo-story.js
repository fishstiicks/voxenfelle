'use strict';

const { Story } = require('../models');

let options = {};
if (process.env.NODE_ENV === 'production') {
  options.schema = process.env.SCHEMA;
}

module.exports = {
  async up (queryInterface, Sequelize) {
    await Story.bulkCreate([{
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

  async down (queryInterface, Sequelize) {
    options.tableName = 'Stories';
    const Op = Sequelize.Op;
    return queryInterface.bulkDelete('Stories', null, {});
  }
};
