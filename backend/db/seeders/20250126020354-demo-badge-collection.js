'use strict';

const { BadgeCollection } = require('../models');

let options = {};
if (process.env.NODE_ENV === 'production') {
  options.schema = process.env.SCHEMA;
}

module.exports = {
  async up (queryInterface, Sequelize) {
    await BadgeCollection.bulkCreate([{
      username: `Adina`,
      badgeName: `Void's Eve`,
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      username: `Adina`,
      badgeName: `Flashpoint`,
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      username: `Adina`,
      badgeName: `Treasure Trailblazers`,
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      username: `Adina`,
      badgeName: `Hylia's Grace`,
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      username: `Adina`,
      badgeName: `Edelweiss Ball`,
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      username: `Anya`,
      badgeName: `Hylia's Grace`,
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      username: `Anya`,
      badgeName: `Edelweiss Ball`,
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      username: `Ash`,
      badgeName: `Void's Eve`,
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      username: `Ash`,
      badgeName: `Flashpoint`,
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      username: `Ash`,
      badgeName: `Treasure Trailblazers`,
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      username: `Ash`,
      badgeName: `Hylia's Grace`,
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      username: `Cas`,
      badgeName: `Void's Eve`,
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      username: `Cas`,
      badgeName: `Treasure Trailblazers`,
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      username: `Cas`,
      badgeName: `Hylia's Grace`,
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      username: `Cas`,
      badgeName: `Edelweiss Ball`,
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      username: `Crow`,
      badgeName: `Void's Eve`,
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      username: `Crow`,
      badgeName: `Flashpoint`,
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      username: `Crow`,
      badgeName: `Treasure Trailblazers`,
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      username: `Crow`,
      badgeName: `Hylia's Grace`,
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      username: `Crow`,
      badgeName: `Edelweiss Ball`,
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      username: `Froggo`,
      badgeName: `Void's Eve`,
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      username: `Froggo`,
      badgeName: `Flashpoint`,
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      username: `Froggo`,
      badgeName: `Treasure Trailblazers`,
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      username: `Froggo`,
      badgeName: `Hylia's Grace`,
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      username: `Froggo`,
      badgeName: `Edelweiss Ball`,
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      username: `Gale`,
      badgeName: `Void's Eve`,
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      username: `Gale`,
      badgeName: `Flashpoint`,
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      username: `Gale`,
      badgeName: `Treasure Trailblazers`,
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      username: `Gale`,
      badgeName: `Hylia's Grace`,
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      username: `Gale`,
      badgeName: `Edelweiss Ball`,
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      username: `Geeck`,
      badgeName: `Void's Eve`,
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      username: `Geeck`,
      badgeName: `Hylia's Grace`,
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      username: `Geeck`,
      badgeName: `Edelweiss Ball`,
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      username: `Gildes`,
      badgeName: `Void's Eve`,
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      username: `Gildes`,
      badgeName: `Flashpoint`,
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      username: `Gildes`,
      badgeName: `Treasure Trailblazers`,
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      username: `Gildes`,
      badgeName: `Hylia's Grace`,
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      username: `Gildes`,
      badgeName: `Edelweiss Ball`,
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      username: `Hina`,
      badgeName: `Void's Eve`,
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      username: `Hina`,
      badgeName: `Flashpoint`,
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      username: `Hina`,
      badgeName: `Hylia's Grace`,
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      username: `Hina`,
      badgeName: `Edelweiss Ball`,
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      username: `Hyu`,
      badgeName: `Void's Eve`,
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      username: `Hyu`,
      badgeName: `Flashpoint`,
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      username: `Hyu`,
      badgeName: `Treasure Trailblazers`,
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      username: `Hyu`,
      badgeName: `Hylia's Grace`,
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      username: `Hyu`,
      badgeName: `Edelweiss Ball`,
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      username: `Koo`,
      badgeName: `Void's Eve`,
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      username: `Koo`,
      badgeName: `Flashpoint`,
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      username: `Koo`,
      badgeName: `Diligent Fairy Godmothers`,
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      username: `Koo`,
      badgeName: `Treasure Trailblazers`,
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      username: `Koo`,
      badgeName: `Hylia's Grace`,
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      username: `Koo`,
      badgeName: `Edelweiss Ball`,
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      username: `Lin`,
      badgeName: `Void's Eve`,
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      username: `Lin`,
      badgeName: `Flashpoint`,
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      username: `Lin`,
      badgeName: `Hylia's Grace`,
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      username: `Lin`,
      badgeName: `Edelweiss Ball`,
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      username: `Lok`,
      badgeName: `Void's Eve`,
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      username: `Lok`,
      badgeName: `Flashpoint`,
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      username: `Lok`,
      badgeName: `Treasure Trailblazers`,
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      username: `Lok`,
      badgeName: `Hylia's Grace`,
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      username: `Lok`,
      badgeName: `Edelweiss Ball`,
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      username: `Mei`,
      badgeName: `Void's Eve`,
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      username: `Mei`,
      badgeName: `Flashpoint`,
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      username: `Mei`,
      badgeName: `Diligent Fairy Godmothers`,
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      username: `Mei`,
      badgeName: `Treasure Trailblazers`,
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      username: `Mei`,
      badgeName: `Hylia's Grace`,
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      username: `Mei`,
      badgeName: `Edelweiss Ball`,
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      username: `Mickey`,
      badgeName: `Void's Eve`,
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      username: `Mickey`,
      badgeName: `Hylia's Grace`,
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      username: `Mickey`,
      badgeName: `Edelweiss Ball`,
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      username: `Namako`,
      badgeName: `Void's Eve`,
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      username: `Namako`,
      badgeName: `Hylia's Grace`,
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      username: `Namako`,
      badgeName: `Edelweiss Ball`,
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      username: `Nelle`,
      badgeName: `Void's Eve`,
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      username: `Nelle`,
      badgeName: `Flashpoint`,
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      username: `Nelle`,
      badgeName: `Treasure Trailblazers`,
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      username: `Nelle`,
      badgeName: `Hylia's Grace`,
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      username: `Nelle`,
      badgeName: `Edelweiss Ball`,
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      username: `Nep`,
      badgeName: `Void's Eve`,
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      username: `Nep`,
      badgeName: `Treasure Trailblazers`,
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      username: `Nep`,
      badgeName: `Hylia's Grace`,
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      username: `Nep`,
      badgeName: `Edelweiss Ball`,
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      username: `Nyaph`,
      badgeName: `Void's Eve`,
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      username: `Nyaph`,
      badgeName: `Hylia's Grace`,
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      username: `Nyaph`,
      badgeName: `Edelweiss Ball`,
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      username: `Pour`,
      badgeName: `Hylia's Grace`,
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      username: `Pour`,
      badgeName: `Edelweiss Ball`,
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      username: `Prim`,
      badgeName: `Void's Eve`,
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      username: `Prim`,
      badgeName: `Flashpoint`,
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      username: `Prim`,
      badgeName: `Hylia's Grace`,
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      username: `Prim`,
      badgeName: `Edelweiss Ball`,
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      username: `Puchi`,
      badgeName: `Void's Eve`,
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      username: `Ricky`,
      badgeName: `Void's Eve`,
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      username: `Ricky`,
      badgeName: `Flashpoint`,
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      username: `Ricky`,
      badgeName: `Hylia's Grace`,
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      username: `Ricky`,
      badgeName: `Edelweiss Ball`,
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      username: `Rini`,
      badgeName: `Void's Eve`,
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      username: `Rini`,
      badgeName: `Flashpoint`,
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      username: `Rini`,
      badgeName: `Hylia's Grace`,
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      username: `Roo`,
      badgeName: `Void's Eve`,
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      username: `Roo`,
      badgeName: `Hylia's Grace`,
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      username: `Roo`,
      badgeName: `Edelweiss Ball`,
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      username: `Roy`,
      badgeName: `Void's Eve`,
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      username: `Roy`,
      badgeName: `Flashpoint`,
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      username: `Roy`,
      badgeName: `Hylia's Grace`,
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      username: `Roy`,
      badgeName: `Edelweiss Ball`,
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      username: `Rozen`,
      badgeName: `Void's Eve`,
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      username: `Rozen`,
      badgeName: `Flashpoint`,
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      username: `Rozen`,
      badgeName: `Hylia's Grace`,
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      username: `Rozen`,
      badgeName: `Edelweiss Ball`,
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      username: `Ruth`,
      badgeName: `Flashpoint`,
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      username: `Sachi`,
      badgeName: `Void's Eve`,
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      username: `Sachi`,
      badgeName: `Hylia's Grace`,
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      username: `Sachi`,
      badgeName: `Edelweiss Ball`,
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      username: `Sea`,
      badgeName: `Void's Eve`,
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      username: `Sea`,
      badgeName: `Diligent Fairy Godmothers`,
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      username: `Sea`,
      badgeName: `Treasure Trailblazers`,
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      username: `Sea`,
      badgeName: `Hylia's Grace`,
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      username: `Sea`,
      badgeName: `Edelweiss Ball`,
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      username: `Sen`,
      badgeName: `Void's Eve`,
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      username: `Sen`,
      badgeName: `Flashpoint`,
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      username: `Sen`,
      badgeName: `Treasure Trailblazers`,
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      username: `Sen`,
      badgeName: `Hylia's Grace`,
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      username: `Sen`,
      badgeName: `Edelweiss Ball`,
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      username: `Song`,
      badgeName: `Void's Eve`,
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      username: `Song`,
      badgeName: `Flashpoint`,
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      username: `Song`,
      badgeName: `Treasure Trailblazers`,
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      username: `Song`,
      badgeName: `Hylia's Grace`,
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      username: `Song`,
      badgeName: `Edelweiss Ball`,
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      username: `Sy`,
      badgeName: `Hylia's Grace`,
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      username: `Sy`,
      badgeName: `Edelweiss Ball`,
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      username: `Tara`,
      badgeName: `Void's Eve`,
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      username: `Tara`,
      badgeName: `Flashpoint`,
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      username: `Tara`,
      badgeName: `Treasure Trailblazers`,
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      username: `Tara`,
      badgeName: `Hylia's Grace`,
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      username: `Tara`,
      badgeName: `Edelweiss Ball`,
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      username: `Trin`,
      badgeName: `Flashpoint`,
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      username: `Trin`,
      badgeName: `Hylia's Grace`,
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      username: `Trin`,
      badgeName: `Edelweiss Ball`,
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      username: `Twen`,
      badgeName: `Void's Eve`,
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      username: `Twen`,
      badgeName: `Hylia's Grace`,
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      username: `Twen`,
      badgeName: `Edelweiss Ball`,
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      username: `Vani`,
      badgeName: `Edelweiss Ball`,
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      username: `Yuki`,
      badgeName: `Void's Eve`,
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      username: `Yuki`,
      badgeName: `Flashpoint`,
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      username: `Yuki`,
      badgeName: `Diligent Fairy Godmothers`,
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      username: `Yuki`,
      badgeName: `Hylia's Grace`,
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      username: `Yuki`,
      badgeName: `Edelweiss Ball`,
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      username: `Yuli`,
      badgeName: `Void's Eve`,
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      username: `Yuli`,
      badgeName: `Hylia's Grace`,
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      username: `Yuli`,
      badgeName: `Edelweiss Ball`,
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      username: `Yuni`,
      badgeName: `Void's Eve`,
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      username: `Yuni`,
      badgeName: `Hylia's Grace`,
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      username: `Yuni`,
      badgeName: `Edelweiss Ball`,
      createdAt: new Date(),
      updatedAt: new Date()
    }], {});
  },

  async down (queryInterface, Sequelize) {
    options.tableName = 'BadgeCollections';
    const Op = Sequelize.Op;
    return queryInterface.bulkDelete('BadgeCollections', null, {});
  }
};
