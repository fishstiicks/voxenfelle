'use strict';

const { User } = require('../models');
const bcrypt = require("bcryptjs");

let options = {};
if (process.env.NODE_ENV === 'production') {
  options.schema = process.env.SCHEMA;
}

module.exports = {
  async up (queryInterface, Sequelize) {
    try {
      await User.bulkCreate([
        {
          username: 'Demo-lition',
          hashedPassword: bcrypt.hashSync('password')
        },
        {
          username: 'FakeUser1',
          hashedPassword: bcrypt.hashSync('password2')
        },
        {
          username: 'FakeUser2',
          hashedPassword: bcrypt.hashSync('password3')
        },
        {
          username: 'Lok',
          hashedPassword: bcrypt.hashSync('password')
        },
        {
          username: 'Nelle',
          hashedPassword: bcrypt.hashSync('password')
        }
      ], { validate: true });

      console.log('Users created successfully!');
    } catch (error) {
      console.error('Error during seeding:', error);
    }
  },

  async down (queryInterface, Sequelize) {
    options.tableName = 'Users';
    const Op = Sequelize.Op;
    return queryInterface.bulkDelete('Users', {
      username: { [Op.in]: ['Demo-lition', 'FakeUser1', 'FakeUser2', 'Lok', 'Nelle'] }
    }, {});
  }
};
