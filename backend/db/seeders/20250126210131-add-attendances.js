'use strict';
const { Attendance } = require('../models');

let options = {};
if (process.env.NODE_ENV === 'production') {
  options.schema = process.env.SCHEMA;
}


module.exports = {
  async up (queryInterface, Sequelize) {
    await Attendance.bulkCreate([
      {
username: `Adina`,
story: `CANDLE CEREMONY (I)`,
createdAt: new Date(),
updatedAt: new Date()
},{
username: `Adina`,
story: `CANDLE CEREMONY (II)`,
createdAt: new Date(),
updatedAt: new Date()
},{
username: `Adina`,
story: `AN AUDIENCE`,
createdAt: new Date(),
updatedAt: new Date()
},{
username: `Adina`,
story: `TWO ROOKS (I)`,
createdAt: new Date(),
updatedAt: new Date()
},{
username: `Adina`,
story: `TWO ROOKS (II)`,
createdAt: new Date(),
updatedAt: new Date()
},{
username: `Anya`,
story: `CANDLE CEREMONY (I)`,
createdAt: new Date(),
updatedAt: new Date()
},{
username: `Anya`,
story: `CANDLE CEREMONY (II)`,
createdAt: new Date(),
updatedAt: new Date()
},{
username: `Anya`,
story: `AN AUDIENCE`,
createdAt: new Date(),
updatedAt: new Date()
},{
username: `Anya`,
story: `TWO ROOKS (I)`,
createdAt: new Date(),
updatedAt: new Date()
},{
username: `Anya`,
story: `TWO ROOKS (II)`,
createdAt: new Date(),
updatedAt: new Date()
},{
username: `Ash`,
story: `CANDLE CEREMONY (I)`,
createdAt: new Date(),
updatedAt: new Date()
},{
username: `Ash`,
story: `CANDLE CEREMONY (II)`,
createdAt: new Date(),
updatedAt: new Date()
},{
username: `Ash`,
story: `AN AUDIENCE`,
createdAt: new Date(),
updatedAt: new Date()
},{
username: `Ash`,
story: `TWO ROOKS (I)`,
createdAt: new Date(),
updatedAt: new Date()
},{
username: `Ash`,
story: `TWO ROOKS (II)`,
createdAt: new Date(),
updatedAt: new Date()
},{
username: `Ash`,
story: `TO SOLSTIA`,
createdAt: new Date(),
updatedAt: new Date()
},{
username: `Ash`,
story: `THE VESSEL`,
createdAt: new Date(),
updatedAt: new Date()
},{
username: `Ash`,
story: `THE ORDAINMENT`,
createdAt: new Date(),
updatedAt: new Date()
},{
username: `Ash`,
story: `ORION'S SHIELD`,
createdAt: new Date(),
updatedAt: new Date()
},{
username: `Cas`,
story: `CANDLE CEREMONY (I)`,
createdAt: new Date(),
updatedAt: new Date()
},{
username: `Cas`,
story: `CANDLE CEREMONY (II)`,
createdAt: new Date(),
updatedAt: new Date()
},{
username: `Cas`,
story: `AN AUDIENCE`,
createdAt: new Date(),
updatedAt: new Date()
},{
username: `Cas`,
story: `TWO ROOKS (I)`,
createdAt: new Date(),
updatedAt: new Date()
},{
username: `Cas`,
story: `TWO ROOKS (II)`,
createdAt: new Date(),
updatedAt: new Date()
},{
username: `Cas`,
story: `TO SOLSTIA`,
createdAt: new Date(),
updatedAt: new Date()
},{
username: `Cas`,
story: `THE VESSEL`,
createdAt: new Date(),
updatedAt: new Date()
},{
username: `Cas`,
story: `THE ORDAINMENT`,
createdAt: new Date(),
updatedAt: new Date()
},{
username: `Crow`,
story: `CANDLE CEREMONY (I)`,
createdAt: new Date(),
updatedAt: new Date()
},{
username: `Crow`,
story: `CANDLE CEREMONY (II)`,
createdAt: new Date(),
updatedAt: new Date()
},{
username: `Crow`,
story: `AN AUDIENCE`,
createdAt: new Date(),
updatedAt: new Date()
},{
username: `Crow`,
story: `TWO ROOKS (I)`,
createdAt: new Date(),
updatedAt: new Date()
},{
username: `Crow`,
story: `TWO ROOKS (II)`,
createdAt: new Date(),
updatedAt: new Date()
},{
username: `Crow`,
story: `TO SOLSTIA`,
createdAt: new Date(),
updatedAt: new Date()
},{
username: `Crow`,
story: `THE VESSEL`,
createdAt: new Date(),
updatedAt: new Date()
},{
username: `Crow`,
story: `THE ORDAINMENT`,
createdAt: new Date(),
updatedAt: new Date()
},{
username: `Crow`,
story: `ORION'S SHIELD`,
createdAt: new Date(),
updatedAt: new Date()
},{
username: `Dodo`,
story: `CANDLE CEREMONY (I)`,
createdAt: new Date(),
updatedAt: new Date()
},{
username: `Dodo`,
story: `CANDLE CEREMONY (II)`,
createdAt: new Date(),
updatedAt: new Date()
},{
username: `Dodo`,
story: `AN AUDIENCE`,
createdAt: new Date(),
updatedAt: new Date()
},{
username: `Durian`,
story: `CANDLE CEREMONY (I)`,
createdAt: new Date(),
updatedAt: new Date()
},{
username: `Froggo`,
story: `CANDLE CEREMONY (I)`,
createdAt: new Date(),
updatedAt: new Date()
},{
username: `Froggo`,
story: `CANDLE CEREMONY (II)`,
createdAt: new Date(),
updatedAt: new Date()
},{
username: `Froggo`,
story: `AN AUDIENCE`,
createdAt: new Date(),
updatedAt: new Date()
},{
username: `Froggo`,
story: `TWO ROOKS (I)`,
createdAt: new Date(),
updatedAt: new Date()
},{
username: `Froggo`,
story: `TWO ROOKS (II)`,
createdAt: new Date(),
updatedAt: new Date()
},{
username: `Gale`,
story: `CANDLE CEREMONY (I)`,
createdAt: new Date(),
updatedAt: new Date()
},{
username: `Gale`,
story: `CANDLE CEREMONY (II)`,
createdAt: new Date(),
updatedAt: new Date()
},{
username: `Gale`,
story: `AN AUDIENCE`,
createdAt: new Date(),
updatedAt: new Date()
},{
username: `Gale`,
story: `TWO ROOKS (I)`,
createdAt: new Date(),
updatedAt: new Date()
},{
username: `Gale`,
story: `TWO ROOKS (II)`,
createdAt: new Date(),
updatedAt: new Date()
},{
username: `Gale`,
story: `TO SOLSTIA`,
createdAt: new Date(),
updatedAt: new Date()
},{
username: `Gale`,
story: `THE VESSEL`,
createdAt: new Date(),
updatedAt: new Date()
},{
username: `Gale`,
story: `THE ORDAINMENT`,
createdAt: new Date(),
updatedAt: new Date()
},{
username: `Gale`,
story: `ORION'S SHIELD`,
createdAt: new Date(),
updatedAt: new Date()
},{
username: `Geeck`,
story: `CANDLE CEREMONY (I)`,
createdAt: new Date(),
updatedAt: new Date()
},{
username: `Geeck`,
story: `CANDLE CEREMONY (II)`,
createdAt: new Date(),
updatedAt: new Date()
},{
username: `Geeck`,
story: `AN AUDIENCE`,
createdAt: new Date(),
updatedAt: new Date()
},{
username: `Geeck`,
story: `TWO ROOKS (I)`,
createdAt: new Date(),
updatedAt: new Date()
},{
username: `Geeck`,
story: `TWO ROOKS (II)`,
createdAt: new Date(),
updatedAt: new Date()
},{
username: `Geeck`,
story: `TO SOLSTIA`,
createdAt: new Date(),
updatedAt: new Date()
},{
username: `Gildes`,
story: `CANDLE CEREMONY (I)`,
createdAt: new Date(),
updatedAt: new Date()
},{
username: `Gildes`,
story: `CANDLE CEREMONY (II)`,
createdAt: new Date(),
updatedAt: new Date()
},{
username: `Gildes`,
story: `AN AUDIENCE`,
createdAt: new Date(),
updatedAt: new Date()
},{
username: `Gildes`,
story: `TWO ROOKS (I)`,
createdAt: new Date(),
updatedAt: new Date()
},{
username: `Gildes`,
story: `TWO ROOKS (II)`,
createdAt: new Date(),
updatedAt: new Date()
},{
username: `Gildes`,
story: `TO SOLSTIA`,
createdAt: new Date(),
updatedAt: new Date()
},{
username: `Gildes`,
story: `THE VESSEL`,
createdAt: new Date(),
updatedAt: new Date()
},{
username: `Gildes`,
story: `THE ORDAINMENT`,
createdAt: new Date(),
updatedAt: new Date()
},{
username: `Gildes`,
story: `ORION'S SHIELD`,
createdAt: new Date(),
updatedAt: new Date()
},{
username: `Hina`,
story: `CANDLE CEREMONY (I)`,
createdAt: new Date(),
updatedAt: new Date()
},{
username: `Hina`,
story: `CANDLE CEREMONY (II)`,
createdAt: new Date(),
updatedAt: new Date()
},{
username: `Hina`,
story: `AN AUDIENCE`,
createdAt: new Date(),
updatedAt: new Date()
},{
username: `Hina`,
story: `TWO ROOKS (I)`,
createdAt: new Date(),
updatedAt: new Date()
},{
username: `Hina`,
story: `TWO ROOKS (II)`,
createdAt: new Date(),
updatedAt: new Date()
},{
username: `Hina`,
story: `TO SOLSTIA`,
createdAt: new Date(),
updatedAt: new Date()
},{
username: `Hina`,
story: `THE VESSEL`,
createdAt: new Date(),
updatedAt: new Date()
},{
username: `Hina`,
story: `THE ORDAINMENT`,
createdAt: new Date(),
updatedAt: new Date()
},{
username: `Hina`,
story: `ORION'S SHIELD`,
createdAt: new Date(),
updatedAt: new Date()
},{
username: `Hyu`,
story: `CANDLE CEREMONY (I)`,
createdAt: new Date(),
updatedAt: new Date()
},{
username: `Hyu`,
story: `CANDLE CEREMONY (II)`,
createdAt: new Date(),
updatedAt: new Date()
},{
username: `Hyu`,
story: `AN AUDIENCE`,
createdAt: new Date(),
updatedAt: new Date()
},{
username: `Hyu`,
story: `TWO ROOKS (I)`,
createdAt: new Date(),
updatedAt: new Date()
},{
username: `Hyu`,
story: `TWO ROOKS (II)`,
createdAt: new Date(),
updatedAt: new Date()
},{
username: `Hyu`,
story: `TO SOLSTIA`,
createdAt: new Date(),
updatedAt: new Date()
},{
username: `Hyu`,
story: `THE VESSEL`,
createdAt: new Date(),
updatedAt: new Date()
},{
username: `Hyu`,
story: `THE ORDAINMENT`,
createdAt: new Date(),
updatedAt: new Date()
},{
username: `Hyu`,
story: `ORION'S SHIELD`,
createdAt: new Date(),
updatedAt: new Date()
},{
username: `Koo`,
story: `CANDLE CEREMONY (I)`,
createdAt: new Date(),
updatedAt: new Date()
},{
username: `Koo`,
story: `CANDLE CEREMONY (II)`,
createdAt: new Date(),
updatedAt: new Date()
},{
username: `Koo`,
story: `AN AUDIENCE`,
createdAt: new Date(),
updatedAt: new Date()
},{
username: `Koo`,
story: `TWO ROOKS (I)`,
createdAt: new Date(),
updatedAt: new Date()
},{
username: `Koo`,
story: `TWO ROOKS (II)`,
createdAt: new Date(),
updatedAt: new Date()
},{
username: `Koo`,
story: `TO SOLSTIA`,
createdAt: new Date(),
updatedAt: new Date()
},{
username: `Koo`,
story: `THE VESSEL`,
createdAt: new Date(),
updatedAt: new Date()
},{
username: `Koo`,
story: `THE ORDAINMENT`,
createdAt: new Date(),
updatedAt: new Date()
},{
username: `Koo`,
story: `ORION'S SHIELD`,
createdAt: new Date(),
updatedAt: new Date()
},{
username: `Lin`,
story: `CANDLE CEREMONY (I)`,
createdAt: new Date(),
updatedAt: new Date()
},{
username: `Lin`,
story: `CANDLE CEREMONY (II)`,
createdAt: new Date(),
updatedAt: new Date()
},{
username: `Lin`,
story: `AN AUDIENCE`,
createdAt: new Date(),
updatedAt: new Date()
},{
username: `Lin`,
story: `TWO ROOKS (I)`,
createdAt: new Date(),
updatedAt: new Date()
},{
username: `Lin`,
story: `TWO ROOKS (II)`,
createdAt: new Date(),
updatedAt: new Date()
},{
username: `Lin`,
story: `TO SOLSTIA`,
createdAt: new Date(),
updatedAt: new Date()
},{
username: `Lin`,
story: `THE VESSEL`,
createdAt: new Date(),
updatedAt: new Date()
},{
username: `Lin`,
story: `THE ORDAINMENT`,
createdAt: new Date(),
updatedAt: new Date()
},{
username: `Lin`,
story: `ORION'S SHIELD`,
createdAt: new Date(),
updatedAt: new Date()
},{
username: `Lok`,
story: `CANDLE CEREMONY (I)`,
createdAt: new Date(),
updatedAt: new Date()
},{
username: `Lok`,
story: `CANDLE CEREMONY (II)`,
createdAt: new Date(),
updatedAt: new Date()
},{
username: `Lok`,
story: `TWO ROOKS (I)`,
createdAt: new Date(),
updatedAt: new Date()
},{
username: `Lok`,
story: `TWO ROOKS (II)`,
createdAt: new Date(),
updatedAt: new Date()
},{
username: `Lok`,
story: `TO SOLSTIA`,
createdAt: new Date(),
updatedAt: new Date()
},{
username: `Lok`,
story: `THE VESSEL`,
createdAt: new Date(),
updatedAt: new Date()
},{
username: `Lok`,
story: `THE ORDAINMENT`,
createdAt: new Date(),
updatedAt: new Date()
},{
username: `Lok`,
story: `ORION'S SHIELD`,
createdAt: new Date(),
updatedAt: new Date()
},{
username: `Mei`,
story: `CANDLE CEREMONY (I)`,
createdAt: new Date(),
updatedAt: new Date()
},{
username: `Mei`,
story: `CANDLE CEREMONY (II)`,
createdAt: new Date(),
updatedAt: new Date()
},{
username: `Mei`,
story: `AN AUDIENCE`,
createdAt: new Date(),
updatedAt: new Date()
},{
username: `Mei`,
story: `TWO ROOKS (I)`,
createdAt: new Date(),
updatedAt: new Date()
},{
username: `Mei`,
story: `TWO ROOKS (II)`,
createdAt: new Date(),
updatedAt: new Date()
},{
username: `Mei`,
story: `THE VESSEL`,
createdAt: new Date(),
updatedAt: new Date()
},{
username: `Mei`,
story: `THE ORDAINMENT`,
createdAt: new Date(),
updatedAt: new Date()
},{
username: `Mei`,
story: `ORION'S SHIELD`,
createdAt: new Date(),
updatedAt: new Date()
},{
username: `Mickey`,
story: `CANDLE CEREMONY (I)`,
createdAt: new Date(),
updatedAt: new Date()
},{
username: `Mickey`,
story: `CANDLE CEREMONY (II)`,
createdAt: new Date(),
updatedAt: new Date()
},{
username: `Mickey`,
story: `AN AUDIENCE`,
createdAt: new Date(),
updatedAt: new Date()
},{
username: `Mickey`,
story: `TWO ROOKS (I)`,
createdAt: new Date(),
updatedAt: new Date()
},{
username: `Mickey`,
story: `TWO ROOKS (II)`,
createdAt: new Date(),
updatedAt: new Date()
},{
username: `Mickey`,
story: `TO SOLSTIA`,
createdAt: new Date(),
updatedAt: new Date()
},{
username: `Mickey`,
story: `THE VESSEL`,
createdAt: new Date(),
updatedAt: new Date()
},{
username: `Namako`,
story: `CANDLE CEREMONY (I)`,
createdAt: new Date(),
updatedAt: new Date()
},{
username: `Namako`,
story: `CANDLE CEREMONY (II)`,
createdAt: new Date(),
updatedAt: new Date()
},{
username: `Namako`,
story: `AN AUDIENCE`,
createdAt: new Date(),
updatedAt: new Date()
},{
username: `Namako`,
story: `TWO ROOKS (I)`,
createdAt: new Date(),
updatedAt: new Date()
},{
username: `Namako`,
story: `TWO ROOKS (II)`,
createdAt: new Date(),
updatedAt: new Date()
},{
username: `Namako`,
story: `THE VESSEL`,
createdAt: new Date(),
updatedAt: new Date()
},{
username: `Namako`,
story: `THE ORDAINMENT`,
createdAt: new Date(),
updatedAt: new Date()
},{
username: `Namako`,
story: `ORION'S SHIELD`,
createdAt: new Date(),
updatedAt: new Date()
},{
username: `Nelle`,
story: `CANDLE CEREMONY (I)`,
createdAt: new Date(),
updatedAt: new Date()
},{
username: `Nelle`,
story: `CANDLE CEREMONY (II)`,
createdAt: new Date(),
updatedAt: new Date()
},{
username: `Nelle`,
story: `AN AUDIENCE`,
createdAt: new Date(),
updatedAt: new Date()
},{
username: `Nelle`,
story: `TWO ROOKS (I)`,
createdAt: new Date(),
updatedAt: new Date()
},{
username: `Nelle`,
story: `TWO ROOKS (II)`,
createdAt: new Date(),
updatedAt: new Date()
},{
username: `Nelle`,
story: `TO SOLSTIA`,
createdAt: new Date(),
updatedAt: new Date()
},{
username: `Nelle`,
story: `THE VESSEL`,
createdAt: new Date(),
updatedAt: new Date()
},{
username: `Nelle`,
story: `THE ORDAINMENT`,
createdAt: new Date(),
updatedAt: new Date()
},{
username: `Nelle`,
story: `ORION'S SHIELD`,
createdAt: new Date(),
updatedAt: new Date()
},{
username: `Nep`,
story: `CANDLE CEREMONY (I)`,
createdAt: new Date(),
updatedAt: new Date()
},{
username: `Nep`,
story: `CANDLE CEREMONY (II)`,
createdAt: new Date(),
updatedAt: new Date()
},{
username: `Nep`,
story: `AN AUDIENCE`,
createdAt: new Date(),
updatedAt: new Date()
},{
username: `Nep`,
story: `TWO ROOKS (I)`,
createdAt: new Date(),
updatedAt: new Date()
},{
username: `Nep`,
story: `TWO ROOKS (II)`,
createdAt: new Date(),
updatedAt: new Date()
},{
username: `Nep`,
story: `TO SOLSTIA`,
createdAt: new Date(),
updatedAt: new Date()
},{
username: `Nep`,
story: `THE VESSEL`,
createdAt: new Date(),
updatedAt: new Date()
},{
username: `Nep`,
story: `THE ORDAINMENT`,
createdAt: new Date(),
updatedAt: new Date()
},{
username: `Nep`,
story: `ORION'S SHIELD`,
createdAt: new Date(),
updatedAt: new Date()
},{
username: `Nyaph`,
story: `CANDLE CEREMONY (I)`,
createdAt: new Date(),
updatedAt: new Date()
},{
username: `Nyaph`,
story: `CANDLE CEREMONY (II)`,
createdAt: new Date(),
updatedAt: new Date()
},{
username: `Nyaph`,
story: `AN AUDIENCE`,
createdAt: new Date(),
updatedAt: new Date()
},{
username: `Nyaph`,
story: `TWO ROOKS (I)`,
createdAt: new Date(),
updatedAt: new Date()
},{
username: `Nyaph`,
story: `TWO ROOKS (II)`,
createdAt: new Date(),
updatedAt: new Date()
},{
username: `Nyaph`,
story: `TO SOLSTIA`,
createdAt: new Date(),
updatedAt: new Date()
},{
username: `Nyaph`,
story: `THE VESSEL`,
createdAt: new Date(),
updatedAt: new Date()
},{
username: `Nyaph`,
story: `THE ORDAINMENT`,
createdAt: new Date(),
updatedAt: new Date()
},{
username: `Nyaph`,
story: `ORION'S SHIELD`,
createdAt: new Date(),
updatedAt: new Date()
},{
username: `Pour`,
story: `CANDLE CEREMONY (I)`,
createdAt: new Date(),
updatedAt: new Date()
},{
username: `Pour`,
story: `CANDLE CEREMONY (II)`,
createdAt: new Date(),
updatedAt: new Date()
},{
username: `Pour`,
story: `AN AUDIENCE`,
createdAt: new Date(),
updatedAt: new Date()
},{
username: `Pour`,
story: `TWO ROOKS (I)`,
createdAt: new Date(),
updatedAt: new Date()
},{
username: `Pour`,
story: `TWO ROOKS (II)`,
createdAt: new Date(),
updatedAt: new Date()
},{
username: `Pour`,
story: `TO SOLSTIA`,
createdAt: new Date(),
updatedAt: new Date()
},{
username: `Pour`,
story: `THE VESSEL`,
createdAt: new Date(),
updatedAt: new Date()
},{
username: `Pour`,
story: `THE ORDAINMENT`,
createdAt: new Date(),
updatedAt: new Date()
},{
username: `Pour`,
story: `ORION'S SHIELD`,
createdAt: new Date(),
updatedAt: new Date()
},{
username: `Prim`,
story: `CANDLE CEREMONY (I)`,
createdAt: new Date(),
updatedAt: new Date()
},{
username: `Prim`,
story: `CANDLE CEREMONY (II)`,
createdAt: new Date(),
updatedAt: new Date()
},{
username: `Prim`,
story: `AN AUDIENCE`,
createdAt: new Date(),
updatedAt: new Date()
},{
username: `Prim`,
story: `TWO ROOKS (I)`,
createdAt: new Date(),
updatedAt: new Date()
},{
username: `Prim`,
story: `TWO ROOKS (II)`,
createdAt: new Date(),
updatedAt: new Date()
},{
username: `Prim`,
story: `TO SOLSTIA`,
createdAt: new Date(),
updatedAt: new Date()
},{
username: `Prim`,
story: `THE VESSEL`,
createdAt: new Date(),
updatedAt: new Date()
},{
username: `Prim`,
story: `THE ORDAINMENT`,
createdAt: new Date(),
updatedAt: new Date()
},{
username: `Prim`,
story: `ORION'S SHIELD`,
createdAt: new Date(),
updatedAt: new Date()
},{
username: `Puchi`,
story: `CANDLE CEREMONY (I)`,
createdAt: new Date(),
updatedAt: new Date()
},{
username: `Puchi`,
story: `CANDLE CEREMONY (II)`,
createdAt: new Date(),
updatedAt: new Date()
},{
username: `Puchi`,
story: `AN AUDIENCE`,
createdAt: new Date(),
updatedAt: new Date()
},{
username: `Puchi`,
story: `TWO ROOKS (I)`,
createdAt: new Date(),
updatedAt: new Date()
},{
username: `Puchi`,
story: `TWO ROOKS (II)`,
createdAt: new Date(),
updatedAt: new Date()
},{
username: `Puchi`,
story: `TO SOLSTIA`,
createdAt: new Date(),
updatedAt: new Date()
},{
username: `Ricky`,
story: `CANDLE CEREMONY (I)`,
createdAt: new Date(),
updatedAt: new Date()
},{
username: `Ricky`,
story: `CANDLE CEREMONY (II)`,
createdAt: new Date(),
updatedAt: new Date()
},{
username: `Ricky`,
story: `AN AUDIENCE`,
createdAt: new Date(),
updatedAt: new Date()
},{
username: `Ricky`,
story: `TWO ROOKS (I)`,
createdAt: new Date(),
updatedAt: new Date()
},{
username: `Ricky`,
story: `TWO ROOKS (II)`,
createdAt: new Date(),
updatedAt: new Date()
},{
username: `Ricky`,
story: `TO SOLSTIA`,
createdAt: new Date(),
updatedAt: new Date()
},{
username: `Ricky`,
story: `THE VESSEL`,
createdAt: new Date(),
updatedAt: new Date()
},{
username: `Ricky`,
story: `ORION'S SHIELD`,
createdAt: new Date(),
updatedAt: new Date()
},{
username: `Rini`,
story: `CANDLE CEREMONY (I)`,
createdAt: new Date(),
updatedAt: new Date()
},{
username: `Rini`,
story: `CANDLE CEREMONY (II)`,
createdAt: new Date(),
updatedAt: new Date()
},{
username: `Rini`,
story: `AN AUDIENCE`,
createdAt: new Date(),
updatedAt: new Date()
},{
username: `Rini`,
story: `TWO ROOKS (I)`,
createdAt: new Date(),
updatedAt: new Date()
},{
username: `Rini`,
story: `TWO ROOKS (II)`,
createdAt: new Date(),
updatedAt: new Date()
},{
username: `Rini`,
story: `TO SOLSTIA`,
createdAt: new Date(),
updatedAt: new Date()
},{
username: `Rini`,
story: `THE VESSEL`,
createdAt: new Date(),
updatedAt: new Date()
},{
username: `Rini`,
story: `THE ORDAINMENT`,
createdAt: new Date(),
updatedAt: new Date()
},{
username: `Rini`,
story: `ORION'S SHIELD`,
createdAt: new Date(),
updatedAt: new Date()
},{
username: `Roo`,
story: `CANDLE CEREMONY (I)`,
createdAt: new Date(),
updatedAt: new Date()
},{
username: `Roo`,
story: `CANDLE CEREMONY (II)`,
createdAt: new Date(),
updatedAt: new Date()
},{
username: `Roo`,
story: `AN AUDIENCE`,
createdAt: new Date(),
updatedAt: new Date()
},{
username: `Roo`,
story: `TWO ROOKS (I)`,
createdAt: new Date(),
updatedAt: new Date()
},{
username: `Roo`,
story: `TWO ROOKS (II)`,
createdAt: new Date(),
updatedAt: new Date()
},{
username: `Roo`,
story: `TO SOLSTIA`,
createdAt: new Date(),
updatedAt: new Date()
},{
username: `Roo`,
story: `THE VESSEL`,
createdAt: new Date(),
updatedAt: new Date()
},{
username: `Roo`,
story: `THE ORDAINMENT`,
createdAt: new Date(),
updatedAt: new Date()
},{
username: `Roo`,
story: `ORION'S SHIELD`,
createdAt: new Date(),
updatedAt: new Date()
},{
username: `Roy`,
story: `CANDLE CEREMONY (I)`,
createdAt: new Date(),
updatedAt: new Date()
},{
username: `Roy`,
story: `CANDLE CEREMONY (II)`,
createdAt: new Date(),
updatedAt: new Date()
},{
username: `Roy`,
story: `AN AUDIENCE`,
createdAt: new Date(),
updatedAt: new Date()
},{
username: `Roy`,
story: `TWO ROOKS (I)`,
createdAt: new Date(),
updatedAt: new Date()
},{
username: `Roy`,
story: `TWO ROOKS (II)`,
createdAt: new Date(),
updatedAt: new Date()
},{
username: `Roy`,
story: `TO SOLSTIA`,
createdAt: new Date(),
updatedAt: new Date()
},{
username: `Roy`,
story: `THE VESSEL`,
createdAt: new Date(),
updatedAt: new Date()
},{
username: `Roy`,
story: `THE ORDAINMENT`,
createdAt: new Date(),
updatedAt: new Date()
},{
username: `Roy`,
story: `ORION'S SHIELD`,
createdAt: new Date(),
updatedAt: new Date()
},{
username: `Rozen`,
story: `CANDLE CEREMONY (I)`,
createdAt: new Date(),
updatedAt: new Date()
},{
username: `Rozen`,
story: `CANDLE CEREMONY (II)`,
createdAt: new Date(),
updatedAt: new Date()
},{
username: `Rozen`,
story: `AN AUDIENCE`,
createdAt: new Date(),
updatedAt: new Date()
},{
username: `Rozen`,
story: `TWO ROOKS (I)`,
createdAt: new Date(),
updatedAt: new Date()
},{
username: `Rozen`,
story: `TWO ROOKS (II)`,
createdAt: new Date(),
updatedAt: new Date()
},{
username: `Rozen`,
story: `TO SOLSTIA`,
createdAt: new Date(),
updatedAt: new Date()
},{
username: `Rozen`,
story: `THE VESSEL`,
createdAt: new Date(),
updatedAt: new Date()
},{
username: `Rozen`,
story: `THE ORDAINMENT`,
createdAt: new Date(),
updatedAt: new Date()
},{
username: `Rozen`,
story: `ORION'S SHIELD`,
createdAt: new Date(),
updatedAt: new Date()
},{
username: `Ruth`,
story: `CANDLE CEREMONY (I)`,
createdAt: new Date(),
updatedAt: new Date()
},{
username: `Ruth`,
story: `CANDLE CEREMONY (II)`,
createdAt: new Date(),
updatedAt: new Date()
},{
username: `Ruth`,
story: `AN AUDIENCE`,
createdAt: new Date(),
updatedAt: new Date()
},{
username: `Ruth`,
story: `TWO ROOKS (I)`,
createdAt: new Date(),
updatedAt: new Date()
},{
username: `Ruth`,
story: `TWO ROOKS (II)`,
createdAt: new Date(),
updatedAt: new Date()
},{
username: `Ruth`,
story: `THE VESSEL`,
createdAt: new Date(),
updatedAt: new Date()
},{
username: `Ruth`,
story: `ORION'S SHIELD`,
createdAt: new Date(),
updatedAt: new Date()
},{
username: `Sachi`,
story: `CANDLE CEREMONY (I)`,
createdAt: new Date(),
updatedAt: new Date()
},{
username: `Sachi`,
story: `CANDLE CEREMONY (II)`,
createdAt: new Date(),
updatedAt: new Date()
},{
username: `Sachi`,
story: `AN AUDIENCE`,
createdAt: new Date(),
updatedAt: new Date()
},{
username: `Sachi`,
story: `TWO ROOKS (I)`,
createdAt: new Date(),
updatedAt: new Date()
},{
username: `Sachi`,
story: `TWO ROOKS (II)`,
createdAt: new Date(),
updatedAt: new Date()
},{
username: `Sea`,
story: `CANDLE CEREMONY (I)`,
createdAt: new Date(),
updatedAt: new Date()
},{
username: `Sea`,
story: `CANDLE CEREMONY (II)`,
createdAt: new Date(),
updatedAt: new Date()
},{
username: `Sea`,
story: `AN AUDIENCE`,
createdAt: new Date(),
updatedAt: new Date()
},{
username: `Sea`,
story: `TWO ROOKS (I)`,
createdAt: new Date(),
updatedAt: new Date()
},{
username: `Sen`,
story: `CANDLE CEREMONY (I)`,
createdAt: new Date(),
updatedAt: new Date()
},{
username: `Sen`,
story: `CANDLE CEREMONY (II)`,
createdAt: new Date(),
updatedAt: new Date()
},{
username: `Sen`,
story: `AN AUDIENCE`,
createdAt: new Date(),
updatedAt: new Date()
},{
username: `Sen`,
story: `TWO ROOKS (I)`,
createdAt: new Date(),
updatedAt: new Date()
},{
username: `Sen`,
story: `TWO ROOKS (II)`,
createdAt: new Date(),
updatedAt: new Date()
},{
username: `Sen`,
story: `TO SOLSTIA`,
createdAt: new Date(),
updatedAt: new Date()
},{
username: `Sen`,
story: `THE VESSEL`,
createdAt: new Date(),
updatedAt: new Date()
},{
username: `Sen`,
story: `THE ORDAINMENT`,
createdAt: new Date(),
updatedAt: new Date()
},{
username: `Sen`,
story: `ORION'S SHIELD`,
createdAt: new Date(),
updatedAt: new Date()
},{
username: `Song`,
story: `CANDLE CEREMONY (I)`,
createdAt: new Date(),
updatedAt: new Date()
},{
username: `Song`,
story: `CANDLE CEREMONY (II)`,
createdAt: new Date(),
updatedAt: new Date()
},{
username: `Song`,
story: `AN AUDIENCE`,
createdAt: new Date(),
updatedAt: new Date()
},{
username: `Song`,
story: `TWO ROOKS (I)`,
createdAt: new Date(),
updatedAt: new Date()
},{
username: `Song`,
story: `TWO ROOKS (II)`,
createdAt: new Date(),
updatedAt: new Date()
},{
username: `Song`,
story: `TO SOLSTIA`,
createdAt: new Date(),
updatedAt: new Date()
},{
username: `Song`,
story: `THE VESSEL`,
createdAt: new Date(),
updatedAt: new Date()
},{
username: `Song`,
story: `THE ORDAINMENT`,
createdAt: new Date(),
updatedAt: new Date()
},{
username: `Sy`,
story: `CANDLE CEREMONY (I)`,
createdAt: new Date(),
updatedAt: new Date()
},{
username: `Sy`,
story: `CANDLE CEREMONY (II)`,
createdAt: new Date(),
updatedAt: new Date()
},{
username: `Sy`,
story: `AN AUDIENCE`,
createdAt: new Date(),
updatedAt: new Date()
},{
username: `Sy`,
story: `TWO ROOKS (I)`,
createdAt: new Date(),
updatedAt: new Date()
},{
username: `Sy`,
story: `TWO ROOKS (II)`,
createdAt: new Date(),
updatedAt: new Date()
},{
username: `Sy`,
story: `THE VESSEL`,
createdAt: new Date(),
updatedAt: new Date()
},{
username: `Sy`,
story: `THE ORDAINMENT`,
createdAt: new Date(),
updatedAt: new Date()
},{
username: `Sy`,
story: `ORION'S SHIELD`,
createdAt: new Date(),
updatedAt: new Date()
},{
username: `Tara`,
story: `CANDLE CEREMONY (I)`,
createdAt: new Date(),
updatedAt: new Date()
},{
username: `Tara`,
story: `CANDLE CEREMONY (II)`,
createdAt: new Date(),
updatedAt: new Date()
},{
username: `Tara`,
story: `AN AUDIENCE`,
createdAt: new Date(),
updatedAt: new Date()
},{
username: `Tara`,
story: `TWO ROOKS (I)`,
createdAt: new Date(),
updatedAt: new Date()
},{
username: `Tara`,
story: `TWO ROOKS (II)`,
createdAt: new Date(),
updatedAt: new Date()
},{
username: `Tara`,
story: `TO SOLSTIA`,
createdAt: new Date(),
updatedAt: new Date()
},{
username: `Tara`,
story: `THE VESSEL`,
createdAt: new Date(),
updatedAt: new Date()
},{
username: `Tara`,
story: `THE ORDAINMENT`,
createdAt: new Date(),
updatedAt: new Date()
},{
username: `Tara`,
story: `ORION'S SHIELD`,
createdAt: new Date(),
updatedAt: new Date()
},{
username: `Trin`,
story: `CANDLE CEREMONY (I)`,
createdAt: new Date(),
updatedAt: new Date()
},{
username: `Trin`,
story: `CANDLE CEREMONY (II)`,
createdAt: new Date(),
updatedAt: new Date()
},{
username: `Trin`,
story: `AN AUDIENCE`,
createdAt: new Date(),
updatedAt: new Date()
},{
username: `Trin`,
story: `TWO ROOKS (I)`,
createdAt: new Date(),
updatedAt: new Date()
},{
username: `Trin`,
story: `TWO ROOKS (II)`,
createdAt: new Date(),
updatedAt: new Date()
},{
username: `Trin`,
story: `TO SOLSTIA`,
createdAt: new Date(),
updatedAt: new Date()
},{
username: `Trin`,
story: `THE VESSEL`,
createdAt: new Date(),
updatedAt: new Date()
},{
username: `Trin`,
story: `THE ORDAINMENT`,
createdAt: new Date(),
updatedAt: new Date()
},{
username: `Trin`,
story: `ORION'S SHIELD`,
createdAt: new Date(),
updatedAt: new Date()
},{
username: `Twen`,
story: `CANDLE CEREMONY (I)`,
createdAt: new Date(),
updatedAt: new Date()
},{
username: `Twen`,
story: `CANDLE CEREMONY (II)`,
createdAt: new Date(),
updatedAt: new Date()
},{
username: `Twen`,
story: `AN AUDIENCE`,
createdAt: new Date(),
updatedAt: new Date()
},{
username: `Twen`,
story: `TWO ROOKS (I)`,
createdAt: new Date(),
updatedAt: new Date()
},{
username: `Twen`,
story: `TWO ROOKS (II)`,
createdAt: new Date(),
updatedAt: new Date()
},{
username: `Twen`,
story: `TO SOLSTIA`,
createdAt: new Date(),
updatedAt: new Date()
},{
username: `Twen`,
story: `THE VESSEL`,
createdAt: new Date(),
updatedAt: new Date()
},{
username: `Twen`,
story: `THE ORDAINMENT`,
createdAt: new Date(),
updatedAt: new Date()
},{
username: `Twen`,
story: `ORION'S SHIELD`,
createdAt: new Date(),
updatedAt: new Date()
},{
username: `Vani`,
story: `CANDLE CEREMONY (I)`,
createdAt: new Date(),
updatedAt: new Date()
},{
username: `Yuki`,
story: `CANDLE CEREMONY (I)`,
createdAt: new Date(),
updatedAt: new Date()
},{
username: `Yuki`,
story: `CANDLE CEREMONY (II)`,
createdAt: new Date(),
updatedAt: new Date()
},{
username: `Yuki`,
story: `AN AUDIENCE`,
createdAt: new Date(),
updatedAt: new Date()
},{
username: `Yuki`,
story: `TWO ROOKS (I)`,
createdAt: new Date(),
updatedAt: new Date()
},{
username: `Yuki`,
story: `TWO ROOKS (II)`,
createdAt: new Date(),
updatedAt: new Date()
},{
username: `Yuki`,
story: `TO SOLSTIA`,
createdAt: new Date(),
updatedAt: new Date()
},{
username: `Yuki`,
story: `THE VESSEL`,
createdAt: new Date(),
updatedAt: new Date()
},{
username: `Yuki`,
story: `THE ORDAINMENT`,
createdAt: new Date(),
updatedAt: new Date()
},{
username: `Yuki`,
story: `ORION'S SHIELD`,
createdAt: new Date(),
updatedAt: new Date()
},{
username: `Yuli`,
story: `CANDLE CEREMONY (I)`,
createdAt: new Date(),
updatedAt: new Date()
},{
username: `Yuli`,
story: `CANDLE CEREMONY (II)`,
createdAt: new Date(),
updatedAt: new Date()
},{
username: `Yuli`,
story: `AN AUDIENCE`,
createdAt: new Date(),
updatedAt: new Date()
},{
username: `Yuli`,
story: `TWO ROOKS (I)`,
createdAt: new Date(),
updatedAt: new Date()
},{
username: `Yuli`,
story: `TWO ROOKS (II)`,
createdAt: new Date(),
updatedAt: new Date()
},{
username: `Yuli`,
story: `TO SOLSTIA`,
createdAt: new Date(),
updatedAt: new Date()
},{
username: `Yuli`,
story: `THE VESSEL`,
createdAt: new Date(),
updatedAt: new Date()
},{
username: `Yuni`,
story: `CANDLE CEREMONY (I)`,
createdAt: new Date(),
updatedAt: new Date()
},{
username: `Yuni`,
story: `CANDLE CEREMONY (II)`,
createdAt: new Date(),
updatedAt: new Date()
},{
username: `Yuni`,
story: `AN AUDIENCE`,
createdAt: new Date(),
updatedAt: new Date()
},{
username: `Yuni`,
story: `TWO ROOKS (I)`,
createdAt: new Date(),
updatedAt: new Date()
},{
username: `Yuni`,
story: `TWO ROOKS (II)`,
createdAt: new Date(),
updatedAt: new Date()
},{
username: `Yuni`,
story: `TO SOLSTIA`,
createdAt: new Date(),
updatedAt: new Date()
},

    ], {});
  },

  async down (queryInterface, Sequelize) {
    options.tableName = 'Attendances';
    const Op = Sequelize.Op;
    return queryInterface.bulkDelete('Attendances', null, {});
  }
};
