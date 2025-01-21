'use strict';
let options = {};
if (process.env.NODE_ENV === 'production') {
  options.schema = process.env.SCHEMA;
}
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Characters', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      mun: {
        type: Sequelize.STRING
      },
      state: {
        type: Sequelize.STRING
      },
      picrew: {
        type: Sequelize.TEXT
      },
      name: {
        type: Sequelize.STRING
      },
      fullName: {
        type: Sequelize.STRING
      },
      pronouns: {
        type: Sequelize.STRING
      },
      height: {
        type: Sequelize.INTEGER
      },
      lineage: {
        type: Sequelize.STRING
      },
      source: {
        type: Sequelize.STRING
      },
      hexcode: {
        type: Sequelize.STRING
      },
      weapon: {
        type: Sequelize.TEXT
      },
      power: {
        type: Sequelize.TEXT
      },
      reputation: {
        type: Sequelize.TEXT
      },
      class: {
        type: Sequelize.STRING
      },
      dorm: {
        type: Sequelize.STRING
      },
      str: {
        type: Sequelize.INTEGER
      },
      dex: {
        type: Sequelize.INTEGER
      },
      con: {
        type: Sequelize.INTEGER
      },
      cha: {
        type: Sequelize.INTEGER
      },
      int: {
        type: Sequelize.INTEGER
      },
      mag: {
        type: Sequelize.INTEGER
      },
      soulbond: {
        type: Sequelize.BOOLEAN
      },
      souldrop: {
        type: Sequelize.BOOLEAN
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    options.tableName = "Characters";
    await queryInterface.dropTable('Characters');
  }
};