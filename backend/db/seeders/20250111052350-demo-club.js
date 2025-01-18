'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('Clubs', [{
      name: 'Abstinence Club',
      createdAt: new Date(),
      updatedAt: new Date()}, {
      name: 'Arts Club',
      createdAt: new Date(),
      updatedAt: new Date()}, {
      name: 'Astronomical Society',
      createdAt: new Date(),
      updatedAt: new Date()}, {
      name: 'Cat Club',
      createdAt: new Date(),
      updatedAt: new Date()}, {
      name: 'Cooking Club',
      createdAt: new Date(),
      updatedAt: new Date()}, {
      name: 'Detective Society',
      createdAt: new Date(),
      updatedAt: new Date()}, {
      name: 'Drama Club',
      createdAt: new Date(),
      updatedAt: new Date()}, {
      name: 'Dueling Club',
      createdAt: new Date(),
      updatedAt: new Date()}, {
      name: 'Engineering Club',
      createdAt: new Date(),
      updatedAt: new Date()}, {
      name: 'Equestrian Club',
      createdAt: new Date(),
      updatedAt: new Date()}, {
      name: 'FBI: Fight Body Improvement Club',
      createdAt: new Date(),
      updatedAt: new Date()}, {
      name: 'Fight Club',
      createdAt: new Date(),
      updatedAt: new Date()}, {
      name: 'Fishing Club',
      createdAt: new Date(),
      updatedAt: new Date()}, {
      name: 'Gaming Club',
      createdAt: new Date(),
      updatedAt: new Date()}, {
      name: 'Gardening Club',
      createdAt: new Date(),
      updatedAt: new Date()}, {
      name: 'GOFUNDME: Fiscal Management Improvement Club',
      createdAt: new Date(),
      updatedAt: new Date()}, {
      name: 'Hible Study Group',
      createdAt: new Date(),
      updatedAt: new Date()}, {
      name: 'MISC: Mental Illness Support Club',
      createdAt: new Date(),
      updatedAt: new Date()}, {
      name: 'Peer Tutoring',
      createdAt: new Date(),
      updatedAt: new Date()}, {
      name: 'Research Club',
      createdAt: new Date(),
      updatedAt: new Date()}, {
      name: 'Tea Club',
      createdAt: new Date(),
      updatedAt: new Date()}, {
      name: 'VOW: Voidpacts Organized for the World',
      createdAt: new Date(),
      updatedAt: new Date()
    }], {});
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Clubs', null, {});
  }
};
