'use strict';
const { Attendance } = require('../models');

let options = {};
if (process.env.NODE_ENV === 'production') {
  options.schema = process.env.SCHEMA;
}


module.exports = {
  async up (queryInterface, Sequelize) {
    await Attendance.bulkCreate([{
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

  async down (queryInterface, Sequelize) {
    options.tableName = 'Attendances';
    const Op = Sequelize.Op;
    return queryInterface.bulkDelete('Attendances', null, {});
  }
};
