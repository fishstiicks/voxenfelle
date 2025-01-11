'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Arts', [
      {
        mun: 'Lok',
        url: 'https://i.ibb.co/zHLtkB0/image.png',
        character: 'War',
        reference: false,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        mun: 'Nelle',
        url: 'https://i.ibb.co/K0JRxfZ/chouchou.png',
        character: 'Chou-chou',
        reference: true,
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ], { validate: true });
  },

  async down (queryInterface, Sequelize) {
    return queryInterface.bulkDelete('Arts', null, {});
  }
};
