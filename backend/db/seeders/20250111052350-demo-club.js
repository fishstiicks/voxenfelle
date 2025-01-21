'use strict';

const { Club } = require('../../models');

let options = {};
if (process.env.NODE_ENV === 'production') {
  options.schema = process.env.SCHEMA;
}


module.exports = {
  async up (queryInterface, Sequelize) {
    await Club.bulkCreate([{
      name: 'Abstinence Club',
      creator: 'Lok',
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      name: 'Arts Club',
      creator: 'Lok',
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      name: 'Astronomical Society',
      creator: 'Lok',
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      name: 'Cat Club',
      creator: 'Lok',
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      name: 'Cooking Club',
      creator: 'Lok',
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      name: 'Detective Society',
      creator: 'Lok',
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      name: 'Drama Club',
      creator: 'Lok',
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      name: 'Dueling Club',
      creator: 'Lok',
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      name: 'Engineering Club',
      creator: 'Lok',
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      name: 'Equestrian Club',
      creator: 'Lok',
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      name: 'FBI: Fight Body Improvement Club',
      creator: 'Lok',
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      name: 'Fight Club',
      creator: 'Lok',
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      name: 'Fishing Club',
      creator: 'Lok',
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      name: 'Gaming Club',
      creator: 'Lok',
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      name: 'Gardening Club',
      creator: 'Lok',
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      name: 'GOFUNDME: Fiscal Management Improvement Club',
      creator: 'Lok',
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      name: 'Hible Study Group',
      creator: 'Lok',
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      name: 'MISC: Mental Illness Support Club',
      creator: 'Lok',
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      name: 'Peer Tutoring',
      creator: 'Lok',
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      name: 'Research Club',
      creator: 'Lok',
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      name: 'Tea Club',
      creator: 'Lok',
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      name: 'VOW: Voidpacts Organized for the World',
      creator: 'Lok',
      createdAt: new Date(),
      updatedAt: new Date()
    }], {});
  },

  async down (queryInterface, Sequelize) {
    options.tableName = 'Clubs';
    const Op = Sequelize.Op;
    return queryInterface.bulkDelete('Clubs', null, {});
  }
};
