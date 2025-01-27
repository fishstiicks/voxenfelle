'use strict';
const { Attendance } = require('../models');

let options = {};
if (process.env.NODE_ENV === 'production') {
  options.schema = process.env.SCHEMA;
}


module.exports = {
  async up (queryInterface, Sequelize) {
    try {
    await Attendance.bulkCreate([
      {
username: `Adina`,
story: `Candle Ceremony I`,
createdAt: new Date(),
updatedAt: new Date()
},{
username: `Adina`,
story: `Candle Ceremony II`,
createdAt: new Date(),
updatedAt: new Date()
},{
username: `Adina`,
story: `An Audience`,
createdAt: new Date(),
updatedAt: new Date()
},{
username: `Adina`,
story: `Two Rooks I`,
createdAt: new Date(),
updatedAt: new Date()
},{
username: `Adina`,
story: `Two Rooks II`,
createdAt: new Date(),
updatedAt: new Date()
},{
username: `Anya`,
story: `Candle Ceremony I`,
createdAt: new Date(),
updatedAt: new Date()
},{
username: `Anya`,
story: `Candle Ceremony II`,
createdAt: new Date(),
updatedAt: new Date()
},{
username: `Anya`,
story: `An Audience`,
createdAt: new Date(),
updatedAt: new Date()
},{
username: `Anya`,
story: `Two Rooks I`,
createdAt: new Date(),
updatedAt: new Date()
},{
username: `Anya`,
story: `Two Rooks II`,
createdAt: new Date(),
updatedAt: new Date()
},{
username: `Ash`,
story: `Candle Ceremony I`,
createdAt: new Date(),
updatedAt: new Date()
},{
username: `Ash`,
story: `Candle Ceremony II`,
createdAt: new Date(),
updatedAt: new Date()
},{
username: `Ash`,
story: `An Audience`,
createdAt: new Date(),
updatedAt: new Date()
},{
username: `Ash`,
story: `Two Rooks I`,
createdAt: new Date(),
updatedAt: new Date()
},{
username: `Ash`,
story: `Two Rooks II`,
createdAt: new Date(),
updatedAt: new Date()
},{
username: `Ash`,
story: `To Solstia`,
createdAt: new Date(),
updatedAt: new Date()
},{
username: `Ash`,
story: `The Vessel`,
createdAt: new Date(),
updatedAt: new Date()
},{
username: `Ash`,
story: `The Ordainment`,
createdAt: new Date(),
updatedAt: new Date()
},{
username: `Ash`,
story: `Orion's Shield`,
createdAt: new Date(),
updatedAt: new Date()
},{
username: `Cas`,
story: `Candle Ceremony I`,
createdAt: new Date(),
updatedAt: new Date()
},{
username: `Cas`,
story: `Candle Ceremony II`,
createdAt: new Date(),
updatedAt: new Date()
},{
username: `Cas`,
story: `An Audience`,
createdAt: new Date(),
updatedAt: new Date()
},{
username: `Cas`,
story: `Two Rooks I`,
createdAt: new Date(),
updatedAt: new Date()
},{
username: `Cas`,
story: `Two Rooks II`,
createdAt: new Date(),
updatedAt: new Date()
},{
username: `Cas`,
story: `To Solstia`,
createdAt: new Date(),
updatedAt: new Date()
},{
username: `Cas`,
story: `The Vessel`,
createdAt: new Date(),
updatedAt: new Date()
},{
username: `Cas`,
story: `The Ordainment`,
createdAt: new Date(),
updatedAt: new Date()
},{
username: `Crow`,
story: `Candle Ceremony I`,
createdAt: new Date(),
updatedAt: new Date()
},{
username: `Crow`,
story: `Candle Ceremony II`,
createdAt: new Date(),
updatedAt: new Date()
},{
username: `Crow`,
story: `An Audience`,
createdAt: new Date(),
updatedAt: new Date()
},{
username: `Crow`,
story: `Two Rooks I`,
createdAt: new Date(),
updatedAt: new Date()
},{
username: `Crow`,
story: `Two Rooks II`,
createdAt: new Date(),
updatedAt: new Date()
},{
username: `Crow`,
story: `To Solstia`,
createdAt: new Date(),
updatedAt: new Date()
},{
username: `Crow`,
story: `The Vessel`,
createdAt: new Date(),
updatedAt: new Date()
},{
username: `Crow`,
story: `The Ordainment`,
createdAt: new Date(),
updatedAt: new Date()
},{
username: `Crow`,
story: `Orion's Shield`,
createdAt: new Date(),
updatedAt: new Date()
},{
username: `Dodo`,
story: `Candle Ceremony I`,
createdAt: new Date(),
updatedAt: new Date()
},{
username: `Dodo`,
story: `Candle Ceremony II`,
createdAt: new Date(),
updatedAt: new Date()
},{
username: `Dodo`,
story: `An Audience`,
createdAt: new Date(),
updatedAt: new Date()
},{
username: `Durian`,
story: `Candle Ceremony I`,
createdAt: new Date(),
updatedAt: new Date()
},{
username: `Froggo`,
story: `Candle Ceremony I`,
createdAt: new Date(),
updatedAt: new Date()
},{
username: `Froggo`,
story: `Candle Ceremony II`,
createdAt: new Date(),
updatedAt: new Date()
},{
username: `Froggo`,
story: `An Audience`,
createdAt: new Date(),
updatedAt: new Date()
},{
username: `Froggo`,
story: `Two Rooks I`,
createdAt: new Date(),
updatedAt: new Date()
},{
username: `Froggo`,
story: `Two Rooks II`,
createdAt: new Date(),
updatedAt: new Date()
},{
username: `Gale`,
story: `Candle Ceremony I`,
createdAt: new Date(),
updatedAt: new Date()
},{
username: `Gale`,
story: `Candle Ceremony II`,
createdAt: new Date(),
updatedAt: new Date()
},{
username: `Gale`,
story: `An Audience`,
createdAt: new Date(),
updatedAt: new Date()
},{
username: `Gale`,
story: `Two Rooks I`,
createdAt: new Date(),
updatedAt: new Date()
},{
username: `Gale`,
story: `Two Rooks II`,
createdAt: new Date(),
updatedAt: new Date()
},{
username: `Gale`,
story: `To Solstia`,
createdAt: new Date(),
updatedAt: new Date()
},{
username: `Gale`,
story: `The Vessel`,
createdAt: new Date(),
updatedAt: new Date()
},{
username: `Gale`,
story: `The Ordainment`,
createdAt: new Date(),
updatedAt: new Date()
},{
username: `Gale`,
story: `Orion's Shield`,
createdAt: new Date(),
updatedAt: new Date()
},{
username: `Geeck`,
story: `Candle Ceremony I`,
createdAt: new Date(),
updatedAt: new Date()
},{
username: `Geeck`,
story: `Candle Ceremony II`,
createdAt: new Date(),
updatedAt: new Date()
},{
username: `Geeck`,
story: `An Audience`,
createdAt: new Date(),
updatedAt: new Date()
},{
username: `Geeck`,
story: `Two Rooks I`,
createdAt: new Date(),
updatedAt: new Date()
},{
username: `Geeck`,
story: `Two Rooks II`,
createdAt: new Date(),
updatedAt: new Date()
},{
username: `Geeck`,
story: `To Solstia`,
createdAt: new Date(),
updatedAt: new Date()
},{
username: `Gildes`,
story: `Candle Ceremony I`,
createdAt: new Date(),
updatedAt: new Date()
},{
username: `Gildes`,
story: `Candle Ceremony II`,
createdAt: new Date(),
updatedAt: new Date()
},{
username: `Gildes`,
story: `An Audience`,
createdAt: new Date(),
updatedAt: new Date()
},{
username: `Gildes`,
story: `Two Rooks I`,
createdAt: new Date(),
updatedAt: new Date()
},{
username: `Gildes`,
story: `Two Rooks II`,
createdAt: new Date(),
updatedAt: new Date()
},{
username: `Gildes`,
story: `To Solstia`,
createdAt: new Date(),
updatedAt: new Date()
},{
username: `Gildes`,
story: `The Vessel`,
createdAt: new Date(),
updatedAt: new Date()
},{
username: `Gildes`,
story: `The Ordainment`,
createdAt: new Date(),
updatedAt: new Date()
},{
username: `Gildes`,
story: `Orion's Shield`,
createdAt: new Date(),
updatedAt: new Date()
},{
username: `Hina`,
story: `Candle Ceremony I`,
createdAt: new Date(),
updatedAt: new Date()
},{
username: `Hina`,
story: `Candle Ceremony II`,
createdAt: new Date(),
updatedAt: new Date()
},{
username: `Hina`,
story: `An Audience`,
createdAt: new Date(),
updatedAt: new Date()
},{
username: `Hina`,
story: `Two Rooks I`,
createdAt: new Date(),
updatedAt: new Date()
},{
username: `Hina`,
story: `Two Rooks II`,
createdAt: new Date(),
updatedAt: new Date()
},{
username: `Hina`,
story: `To Solstia`,
createdAt: new Date(),
updatedAt: new Date()
},{
username: `Hina`,
story: `The Vessel`,
createdAt: new Date(),
updatedAt: new Date()
},{
username: `Hina`,
story: `The Ordainment`,
createdAt: new Date(),
updatedAt: new Date()
},{
username: `Hina`,
story: `Orion's Shield`,
createdAt: new Date(),
updatedAt: new Date()
},{
username: `Hyu`,
story: `Candle Ceremony I`,
createdAt: new Date(),
updatedAt: new Date()
},{
username: `Hyu`,
story: `Candle Ceremony II`,
createdAt: new Date(),
updatedAt: new Date()
},{
username: `Hyu`,
story: `An Audience`,
createdAt: new Date(),
updatedAt: new Date()
},{
username: `Hyu`,
story: `Two Rooks I`,
createdAt: new Date(),
updatedAt: new Date()
},{
username: `Hyu`,
story: `Two Rooks II`,
createdAt: new Date(),
updatedAt: new Date()
},{
username: `Hyu`,
story: `To Solstia`,
createdAt: new Date(),
updatedAt: new Date()
},{
username: `Hyu`,
story: `The Vessel`,
createdAt: new Date(),
updatedAt: new Date()
},{
username: `Hyu`,
story: `The Ordainment`,
createdAt: new Date(),
updatedAt: new Date()
},{
username: `Hyu`,
story: `Orion's Shield`,
createdAt: new Date(),
updatedAt: new Date()
},{
username: `Koo`,
story: `Candle Ceremony I`,
createdAt: new Date(),
updatedAt: new Date()
},{
username: `Koo`,
story: `Candle Ceremony II`,
createdAt: new Date(),
updatedAt: new Date()
},{
username: `Koo`,
story: `An Audience`,
createdAt: new Date(),
updatedAt: new Date()
},{
username: `Koo`,
story: `Two Rooks I`,
createdAt: new Date(),
updatedAt: new Date()
},{
username: `Koo`,
story: `Two Rooks II`,
createdAt: new Date(),
updatedAt: new Date()
},{
username: `Koo`,
story: `To Solstia`,
createdAt: new Date(),
updatedAt: new Date()
},{
username: `Koo`,
story: `The Vessel`,
createdAt: new Date(),
updatedAt: new Date()
},{
username: `Koo`,
story: `The Ordainment`,
createdAt: new Date(),
updatedAt: new Date()
},{
username: `Koo`,
story: `Orion's Shield`,
createdAt: new Date(),
updatedAt: new Date()
},{
username: `Lin`,
story: `Candle Ceremony I`,
createdAt: new Date(),
updatedAt: new Date()
},{
username: `Lin`,
story: `Candle Ceremony II`,
createdAt: new Date(),
updatedAt: new Date()
},{
username: `Lin`,
story: `An Audience`,
createdAt: new Date(),
updatedAt: new Date()
},{
username: `Lin`,
story: `Two Rooks I`,
createdAt: new Date(),
updatedAt: new Date()
},{
username: `Lin`,
story: `Two Rooks II`,
createdAt: new Date(),
updatedAt: new Date()
},{
username: `Lin`,
story: `To Solstia`,
createdAt: new Date(),
updatedAt: new Date()
},{
username: `Lin`,
story: `The Vessel`,
createdAt: new Date(),
updatedAt: new Date()
},{
username: `Lin`,
story: `The Ordainment`,
createdAt: new Date(),
updatedAt: new Date()
},{
username: `Lin`,
story: `Orion's Shield`,
createdAt: new Date(),
updatedAt: new Date()
},{
username: `Lok`,
story: `Candle Ceremony I`,
createdAt: new Date(),
updatedAt: new Date()
},{
username: `Lok`,
story: `Candle Ceremony II`,
createdAt: new Date(),
updatedAt: new Date()
},{
username: `Lok`,
story: `An Audience`,
createdAt: new Date(),
updatedAt: new Date()
},{
username: `Lok`,
story: `Two Rooks I`,
createdAt: new Date(),
updatedAt: new Date()
},{
username: `Lok`,
story: `Two Rooks II`,
createdAt: new Date(),
updatedAt: new Date()
},{
username: `Lok`,
story: `To Solstia`,
createdAt: new Date(),
updatedAt: new Date()
},{
username: `Lok`,
story: `The Vessel`,
createdAt: new Date(),
updatedAt: new Date()
},{
username: `Lok`,
story: `The Ordainment`,
createdAt: new Date(),
updatedAt: new Date()
},{
username: `Lok`,
story: `Orion's Shield`,
createdAt: new Date(),
updatedAt: new Date()
},{
username: `Mei`,
story: `Candle Ceremony I`,
createdAt: new Date(),
updatedAt: new Date()
},{
username: `Mei`,
story: `Candle Ceremony II`,
createdAt: new Date(),
updatedAt: new Date()
},{
username: `Mei`,
story: `An Audience`,
createdAt: new Date(),
updatedAt: new Date()
},{
username: `Mei`,
story: `Two Rooks I`,
createdAt: new Date(),
updatedAt: new Date()
},{
username: `Mei`,
story: `Two Rooks II`,
createdAt: new Date(),
updatedAt: new Date()
},{
username: `Mei`,
story: `The Vessel`,
createdAt: new Date(),
updatedAt: new Date()
},{
username: `Mei`,
story: `The Ordainment`,
createdAt: new Date(),
updatedAt: new Date()
},{
username: `Mei`,
story: `Orion's Shield`,
createdAt: new Date(),
updatedAt: new Date()
},{
username: `Mickey`,
story: `Candle Ceremony I`,
createdAt: new Date(),
updatedAt: new Date()
},{
username: `Mickey`,
story: `Candle Ceremony II`,
createdAt: new Date(),
updatedAt: new Date()
},{
username: `Mickey`,
story: `An Audience`,
createdAt: new Date(),
updatedAt: new Date()
},{
username: `Mickey`,
story: `Two Rooks I`,
createdAt: new Date(),
updatedAt: new Date()
},{
username: `Mickey`,
story: `Two Rooks II`,
createdAt: new Date(),
updatedAt: new Date()
},{
username: `Mickey`,
story: `To Solstia`,
createdAt: new Date(),
updatedAt: new Date()
},{
username: `Mickey`,
story: `The Vessel`,
createdAt: new Date(),
updatedAt: new Date()
},{
username: `Namako`,
story: `Candle Ceremony I`,
createdAt: new Date(),
updatedAt: new Date()
},{
username: `Namako`,
story: `Candle Ceremony II`,
createdAt: new Date(),
updatedAt: new Date()
},{
username: `Namako`,
story: `An Audience`,
createdAt: new Date(),
updatedAt: new Date()
},{
username: `Namako`,
story: `Two Rooks I`,
createdAt: new Date(),
updatedAt: new Date()
},{
username: `Namako`,
story: `Two Rooks II`,
createdAt: new Date(),
updatedAt: new Date()
},{
username: `Namako`,
story: `The Vessel`,
createdAt: new Date(),
updatedAt: new Date()
},{
username: `Namako`,
story: `The Ordainment`,
createdAt: new Date(),
updatedAt: new Date()
},{
username: `Namako`,
story: `Orion's Shield`,
createdAt: new Date(),
updatedAt: new Date()
},{
username: `Nelle`,
story: `Candle Ceremony I`,
createdAt: new Date(),
updatedAt: new Date()
},{
username: `Nelle`,
story: `Candle Ceremony II`,
createdAt: new Date(),
updatedAt: new Date()
},{
username: `Nelle`,
story: `An Audience`,
createdAt: new Date(),
updatedAt: new Date()
},{
username: `Nelle`,
story: `Two Rooks I`,
createdAt: new Date(),
updatedAt: new Date()
},{
username: `Nelle`,
story: `Two Rooks II`,
createdAt: new Date(),
updatedAt: new Date()
},{
username: `Nelle`,
story: `To Solstia`,
createdAt: new Date(),
updatedAt: new Date()
},{
username: `Nelle`,
story: `The Vessel`,
createdAt: new Date(),
updatedAt: new Date()
},{
username: `Nelle`,
story: `The Ordainment`,
createdAt: new Date(),
updatedAt: new Date()
},{
username: `Nelle`,
story: `Orion's Shield`,
createdAt: new Date(),
updatedAt: new Date()
},{
username: `Nep`,
story: `Candle Ceremony I`,
createdAt: new Date(),
updatedAt: new Date()
},{
username: `Nep`,
story: `Candle Ceremony II`,
createdAt: new Date(),
updatedAt: new Date()
},{
username: `Nep`,
story: `An Audience`,
createdAt: new Date(),
updatedAt: new Date()
},{
username: `Nep`,
story: `Two Rooks I`,
createdAt: new Date(),
updatedAt: new Date()
},{
username: `Nep`,
story: `Two Rooks II`,
createdAt: new Date(),
updatedAt: new Date()
},{
username: `Nep`,
story: `To Solstia`,
createdAt: new Date(),
updatedAt: new Date()
},{
username: `Nep`,
story: `The Vessel`,
createdAt: new Date(),
updatedAt: new Date()
},{
username: `Nep`,
story: `The Ordainment`,
createdAt: new Date(),
updatedAt: new Date()
},{
username: `Nep`,
story: `Orion's Shield`,
createdAt: new Date(),
updatedAt: new Date()
},{
username: `Nyaph`,
story: `Candle Ceremony I`,
createdAt: new Date(),
updatedAt: new Date()
},{
username: `Nyaph`,
story: `Candle Ceremony II`,
createdAt: new Date(),
updatedAt: new Date()
},{
username: `Nyaph`,
story: `An Audience`,
createdAt: new Date(),
updatedAt: new Date()
},{
username: `Nyaph`,
story: `Two Rooks I`,
createdAt: new Date(),
updatedAt: new Date()
},{
username: `Nyaph`,
story: `Two Rooks II`,
createdAt: new Date(),
updatedAt: new Date()
},{
username: `Nyaph`,
story: `To Solstia`,
createdAt: new Date(),
updatedAt: new Date()
},{
username: `Nyaph`,
story: `The Vessel`,
createdAt: new Date(),
updatedAt: new Date()
},{
username: `Nyaph`,
story: `The Ordainment`,
createdAt: new Date(),
updatedAt: new Date()
},{
username: `Nyaph`,
story: `Orion's Shield`,
createdAt: new Date(),
updatedAt: new Date()
},{
username: `Pour`,
story: `Candle Ceremony I`,
createdAt: new Date(),
updatedAt: new Date()
},{
username: `Pour`,
story: `Candle Ceremony II`,
createdAt: new Date(),
updatedAt: new Date()
},{
username: `Pour`,
story: `An Audience`,
createdAt: new Date(),
updatedAt: new Date()
},{
username: `Pour`,
story: `Two Rooks I`,
createdAt: new Date(),
updatedAt: new Date()
},{
username: `Pour`,
story: `Two Rooks II`,
createdAt: new Date(),
updatedAt: new Date()
},{
username: `Pour`,
story: `To Solstia`,
createdAt: new Date(),
updatedAt: new Date()
},{
username: `Pour`,
story: `The Vessel`,
createdAt: new Date(),
updatedAt: new Date()
},{
username: `Pour`,
story: `The Ordainment`,
createdAt: new Date(),
updatedAt: new Date()
},{
username: `Pour`,
story: `Orion's Shield`,
createdAt: new Date(),
updatedAt: new Date()
},{
username: `Prim`,
story: `Candle Ceremony I`,
createdAt: new Date(),
updatedAt: new Date()
},{
username: `Prim`,
story: `Candle Ceremony II`,
createdAt: new Date(),
updatedAt: new Date()
},{
username: `Prim`,
story: `An Audience`,
createdAt: new Date(),
updatedAt: new Date()
},{
username: `Prim`,
story: `Two Rooks I`,
createdAt: new Date(),
updatedAt: new Date()
},{
username: `Prim`,
story: `Two Rooks II`,
createdAt: new Date(),
updatedAt: new Date()
},{
username: `Prim`,
story: `To Solstia`,
createdAt: new Date(),
updatedAt: new Date()
},{
username: `Prim`,
story: `The Vessel`,
createdAt: new Date(),
updatedAt: new Date()
},{
username: `Prim`,
story: `The Ordainment`,
createdAt: new Date(),
updatedAt: new Date()
},{
username: `Prim`,
story: `Orion's Shield`,
createdAt: new Date(),
updatedAt: new Date()
},{
username: `Puchi`,
story: `Candle Ceremony I`,
createdAt: new Date(),
updatedAt: new Date()
},{
username: `Puchi`,
story: `Candle Ceremony II`,
createdAt: new Date(),
updatedAt: new Date()
},{
username: `Puchi`,
story: `An Audience`,
createdAt: new Date(),
updatedAt: new Date()
},{
username: `Puchi`,
story: `Two Rooks I`,
createdAt: new Date(),
updatedAt: new Date()
},{
username: `Puchi`,
story: `Two Rooks II`,
createdAt: new Date(),
updatedAt: new Date()
},{
username: `Puchi`,
story: `To Solstia`,
createdAt: new Date(),
updatedAt: new Date()
},{
username: `Ricky`,
story: `Candle Ceremony I`,
createdAt: new Date(),
updatedAt: new Date()
},{
username: `Ricky`,
story: `Candle Ceremony II`,
createdAt: new Date(),
updatedAt: new Date()
},{
username: `Ricky`,
story: `An Audience`,
createdAt: new Date(),
updatedAt: new Date()
},{
username: `Ricky`,
story: `Two Rooks I`,
createdAt: new Date(),
updatedAt: new Date()
},{
username: `Ricky`,
story: `Two Rooks II`,
createdAt: new Date(),
updatedAt: new Date()
},{
username: `Ricky`,
story: `To Solstia`,
createdAt: new Date(),
updatedAt: new Date()
},{
username: `Ricky`,
story: `The Vessel`,
createdAt: new Date(),
updatedAt: new Date()
},{
username: `Ricky`,
story: `Orion's Shield`,
createdAt: new Date(),
updatedAt: new Date()
},{
username: `Rini`,
story: `Candle Ceremony I`,
createdAt: new Date(),
updatedAt: new Date()
},{
username: `Rini`,
story: `Candle Ceremony II`,
createdAt: new Date(),
updatedAt: new Date()
},{
username: `Rini`,
story: `An Audience`,
createdAt: new Date(),
updatedAt: new Date()
},{
username: `Rini`,
story: `Two Rooks I`,
createdAt: new Date(),
updatedAt: new Date()
},{
username: `Rini`,
story: `Two Rooks II`,
createdAt: new Date(),
updatedAt: new Date()
},{
username: `Rini`,
story: `To Solstia`,
createdAt: new Date(),
updatedAt: new Date()
},{
username: `Rini`,
story: `The Vessel`,
createdAt: new Date(),
updatedAt: new Date()
},{
username: `Rini`,
story: `The Ordainment`,
createdAt: new Date(),
updatedAt: new Date()
},{
username: `Rini`,
story: `Orion's Shield`,
createdAt: new Date(),
updatedAt: new Date()
},{
username: `Roo`,
story: `Candle Ceremony I`,
createdAt: new Date(),
updatedAt: new Date()
},{
username: `Roo`,
story: `Candle Ceremony II`,
createdAt: new Date(),
updatedAt: new Date()
},{
username: `Roo`,
story: `An Audience`,
createdAt: new Date(),
updatedAt: new Date()
},{
username: `Roo`,
story: `Two Rooks I`,
createdAt: new Date(),
updatedAt: new Date()
},{
username: `Roo`,
story: `Two Rooks II`,
createdAt: new Date(),
updatedAt: new Date()
},{
username: `Roo`,
story: `To Solstia`,
createdAt: new Date(),
updatedAt: new Date()
},{
username: `Roo`,
story: `The Vessel`,
createdAt: new Date(),
updatedAt: new Date()
},{
username: `Roo`,
story: `The Ordainment`,
createdAt: new Date(),
updatedAt: new Date()
},{
username: `Roo`,
story: `Orion's Shield`,
createdAt: new Date(),
updatedAt: new Date()
},{
username: `Roy`,
story: `Candle Ceremony I`,
createdAt: new Date(),
updatedAt: new Date()
},{
username: `Roy`,
story: `Candle Ceremony II`,
createdAt: new Date(),
updatedAt: new Date()
},{
username: `Roy`,
story: `An Audience`,
createdAt: new Date(),
updatedAt: new Date()
},{
username: `Roy`,
story: `Two Rooks I`,
createdAt: new Date(),
updatedAt: new Date()
},{
username: `Roy`,
story: `Two Rooks II`,
createdAt: new Date(),
updatedAt: new Date()
},{
username: `Roy`,
story: `To Solstia`,
createdAt: new Date(),
updatedAt: new Date()
},{
username: `Roy`,
story: `The Vessel`,
createdAt: new Date(),
updatedAt: new Date()
},{
username: `Roy`,
story: `The Ordainment`,
createdAt: new Date(),
updatedAt: new Date()
},{
username: `Roy`,
story: `Orion's Shield`,
createdAt: new Date(),
updatedAt: new Date()
},{
username: `Rozen`,
story: `Candle Ceremony I`,
createdAt: new Date(),
updatedAt: new Date()
},{
username: `Rozen`,
story: `Candle Ceremony II`,
createdAt: new Date(),
updatedAt: new Date()
},{
username: `Rozen`,
story: `An Audience`,
createdAt: new Date(),
updatedAt: new Date()
},{
username: `Rozen`,
story: `Two Rooks I`,
createdAt: new Date(),
updatedAt: new Date()
},{
username: `Rozen`,
story: `Two Rooks II`,
createdAt: new Date(),
updatedAt: new Date()
},{
username: `Rozen`,
story: `To Solstia`,
createdAt: new Date(),
updatedAt: new Date()
},{
username: `Rozen`,
story: `The Vessel`,
createdAt: new Date(),
updatedAt: new Date()
},{
username: `Rozen`,
story: `The Ordainment`,
createdAt: new Date(),
updatedAt: new Date()
},{
username: `Rozen`,
story: `Orion's Shield`,
createdAt: new Date(),
updatedAt: new Date()
},{
username: `Ruth`,
story: `Candle Ceremony I`,
createdAt: new Date(),
updatedAt: new Date()
},{
username: `Ruth`,
story: `Candle Ceremony II`,
createdAt: new Date(),
updatedAt: new Date()
},{
username: `Ruth`,
story: `An Audience`,
createdAt: new Date(),
updatedAt: new Date()
},{
username: `Ruth`,
story: `Two Rooks I`,
createdAt: new Date(),
updatedAt: new Date()
},{
username: `Ruth`,
story: `Two Rooks II`,
createdAt: new Date(),
updatedAt: new Date()
},{
username: `Ruth`,
story: `The Vessel`,
createdAt: new Date(),
updatedAt: new Date()
},{
username: `Ruth`,
story: `Orion's Shield`,
createdAt: new Date(),
updatedAt: new Date()
},{
username: `Sachi`,
story: `Candle Ceremony I`,
createdAt: new Date(),
updatedAt: new Date()
},{
username: `Sachi`,
story: `Candle Ceremony II`,
createdAt: new Date(),
updatedAt: new Date()
},{
username: `Sachi`,
story: `An Audience`,
createdAt: new Date(),
updatedAt: new Date()
},{
username: `Sachi`,
story: `Two Rooks I`,
createdAt: new Date(),
updatedAt: new Date()
},{
username: `Sachi`,
story: `Two Rooks II`,
createdAt: new Date(),
updatedAt: new Date()
},{
username: `Sea`,
story: `Candle Ceremony I`,
createdAt: new Date(),
updatedAt: new Date()
},{
username: `Sea`,
story: `Candle Ceremony II`,
createdAt: new Date(),
updatedAt: new Date()
},{
username: `Sea`,
story: `An Audience`,
createdAt: new Date(),
updatedAt: new Date()
},{
username: `Sea`,
story: `Two Rooks I`,
createdAt: new Date(),
updatedAt: new Date()
},{
username: `Sen`,
story: `Candle Ceremony I`,
createdAt: new Date(),
updatedAt: new Date()
},{
username: `Sen`,
story: `Candle Ceremony II`,
createdAt: new Date(),
updatedAt: new Date()
},{
username: `Sen`,
story: `An Audience`,
createdAt: new Date(),
updatedAt: new Date()
},{
username: `Sen`,
story: `Two Rooks I`,
createdAt: new Date(),
updatedAt: new Date()
},{
username: `Sen`,
story: `Two Rooks II`,
createdAt: new Date(),
updatedAt: new Date()
},{
username: `Sen`,
story: `To Solstia`,
createdAt: new Date(),
updatedAt: new Date()
},{
username: `Sen`,
story: `The Vessel`,
createdAt: new Date(),
updatedAt: new Date()
},{
username: `Sen`,
story: `The Ordainment`,
createdAt: new Date(),
updatedAt: new Date()
},{
username: `Sen`,
story: `Orion's Shield`,
createdAt: new Date(),
updatedAt: new Date()
},{
username: `Song`,
story: `Candle Ceremony I`,
createdAt: new Date(),
updatedAt: new Date()
},{
username: `Song`,
story: `Candle Ceremony II`,
createdAt: new Date(),
updatedAt: new Date()
},{
username: `Song`,
story: `An Audience`,
createdAt: new Date(),
updatedAt: new Date()
},{
username: `Song`,
story: `Two Rooks I`,
createdAt: new Date(),
updatedAt: new Date()
},{
username: `Song`,
story: `Two Rooks II`,
createdAt: new Date(),
updatedAt: new Date()
},{
username: `Song`,
story: `To Solstia`,
createdAt: new Date(),
updatedAt: new Date()
},{
username: `Song`,
story: `The Vessel`,
createdAt: new Date(),
updatedAt: new Date()
},{
username: `Song`,
story: `The Ordainment`,
createdAt: new Date(),
updatedAt: new Date()
},{
username: `Sy`,
story: `Candle Ceremony I`,
createdAt: new Date(),
updatedAt: new Date()
},{
username: `Sy`,
story: `Candle Ceremony II`,
createdAt: new Date(),
updatedAt: new Date()
},{
username: `Sy`,
story: `An Audience`,
createdAt: new Date(),
updatedAt: new Date()
},{
username: `Sy`,
story: `Two Rooks I`,
createdAt: new Date(),
updatedAt: new Date()
},{
username: `Sy`,
story: `Two Rooks II`,
createdAt: new Date(),
updatedAt: new Date()
},{
username: `Sy`,
story: `The Vessel`,
createdAt: new Date(),
updatedAt: new Date()
},{
username: `Sy`,
story: `The Ordainment`,
createdAt: new Date(),
updatedAt: new Date()
},{
username: `Sy`,
story: `Orion's Shield`,
createdAt: new Date(),
updatedAt: new Date()
},{
username: `Tara`,
story: `Candle Ceremony I`,
createdAt: new Date(),
updatedAt: new Date()
},{
username: `Tara`,
story: `Candle Ceremony II`,
createdAt: new Date(),
updatedAt: new Date()
},{
username: `Tara`,
story: `An Audience`,
createdAt: new Date(),
updatedAt: new Date()
},{
username: `Tara`,
story: `Two Rooks I`,
createdAt: new Date(),
updatedAt: new Date()
},{
username: `Tara`,
story: `Two Rooks II`,
createdAt: new Date(),
updatedAt: new Date()
},{
username: `Tara`,
story: `To Solstia`,
createdAt: new Date(),
updatedAt: new Date()
},{
username: `Tara`,
story: `The Vessel`,
createdAt: new Date(),
updatedAt: new Date()
},{
username: `Tara`,
story: `The Ordainment`,
createdAt: new Date(),
updatedAt: new Date()
},{
username: `Tara`,
story: `Orion's Shield`,
createdAt: new Date(),
updatedAt: new Date()
},{
username: `Trin`,
story: `Candle Ceremony I`,
createdAt: new Date(),
updatedAt: new Date()
},{
username: `Trin`,
story: `Candle Ceremony II`,
createdAt: new Date(),
updatedAt: new Date()
},{
username: `Trin`,
story: `An Audience`,
createdAt: new Date(),
updatedAt: new Date()
},{
username: `Trin`,
story: `Two Rooks I`,
createdAt: new Date(),
updatedAt: new Date()
},{
username: `Trin`,
story: `Two Rooks II`,
createdAt: new Date(),
updatedAt: new Date()
},{
username: `Trin`,
story: `To Solstia`,
createdAt: new Date(),
updatedAt: new Date()
},{
username: `Trin`,
story: `The Vessel`,
createdAt: new Date(),
updatedAt: new Date()
},{
username: `Trin`,
story: `The Ordainment`,
createdAt: new Date(),
updatedAt: new Date()
},{
username: `Trin`,
story: `Orion's Shield`,
createdAt: new Date(),
updatedAt: new Date()
},{
username: `Twen`,
story: `Candle Ceremony I`,
createdAt: new Date(),
updatedAt: new Date()
},{
username: `Twen`,
story: `Candle Ceremony II`,
createdAt: new Date(),
updatedAt: new Date()
},{
username: `Twen`,
story: `An Audience`,
createdAt: new Date(),
updatedAt: new Date()
},{
username: `Twen`,
story: `Two Rooks I`,
createdAt: new Date(),
updatedAt: new Date()
},{
username: `Twen`,
story: `Two Rooks II`,
createdAt: new Date(),
updatedAt: new Date()
},{
username: `Twen`,
story: `To Solstia`,
createdAt: new Date(),
updatedAt: new Date()
},{
username: `Twen`,
story: `The Vessel`,
createdAt: new Date(),
updatedAt: new Date()
},{
username: `Twen`,
story: `The Ordainment`,
createdAt: new Date(),
updatedAt: new Date()
},{
username: `Twen`,
story: `Orion's Shield`,
createdAt: new Date(),
updatedAt: new Date()
},{
username: `Vani`,
story: `Candle Ceremony I`,
createdAt: new Date(),
updatedAt: new Date()
},{
username: `Yuki`,
story: `Candle Ceremony I`,
createdAt: new Date(),
updatedAt: new Date()
},{
username: `Yuki`,
story: `Candle Ceremony II`,
createdAt: new Date(),
updatedAt: new Date()
},{
username: `Yuki`,
story: `An Audience`,
createdAt: new Date(),
updatedAt: new Date()
},{
username: `Yuki`,
story: `Two Rooks I`,
createdAt: new Date(),
updatedAt: new Date()
},{
username: `Yuki`,
story: `Two Rooks II`,
createdAt: new Date(),
updatedAt: new Date()
},{
username: `Yuki`,
story: `To Solstia`,
createdAt: new Date(),
updatedAt: new Date()
},{
username: `Yuki`,
story: `The Vessel`,
createdAt: new Date(),
updatedAt: new Date()
},{
username: `Yuki`,
story: `The Ordainment`,
createdAt: new Date(),
updatedAt: new Date()
},{
username: `Yuki`,
story: `Orion's Shield`,
createdAt: new Date(),
updatedAt: new Date()
},{
username: `Yuli`,
story: `Candle Ceremony I`,
createdAt: new Date(),
updatedAt: new Date()
},{
username: `Yuli`,
story: `Candle Ceremony II`,
createdAt: new Date(),
updatedAt: new Date()
},{
username: `Yuli`,
story: `An Audience`,
createdAt: new Date(),
updatedAt: new Date()
},{
username: `Yuli`,
story: `Two Rooks I`,
createdAt: new Date(),
updatedAt: new Date()
},{
username: `Yuli`,
story: `Two Rooks II`,
createdAt: new Date(),
updatedAt: new Date()
},{
username: `Yuli`,
story: `To Solstia`,
createdAt: new Date(),
updatedAt: new Date()
},{
username: `Yuli`,
story: `The Vessel`,
createdAt: new Date(),
updatedAt: new Date()
},{
username: `Yuni`,
story: `Candle Ceremony I`,
createdAt: new Date(),
updatedAt: new Date()
},{
username: `Yuni`,
story: `Candle Ceremony II`,
createdAt: new Date(),
updatedAt: new Date()
},{
username: `Yuni`,
story: `An Audience`,
createdAt: new Date(),
updatedAt: new Date()
},{
username: `Yuni`,
story: `Two Rooks I`,
createdAt: new Date(),
updatedAt: new Date()
},{
username: `Yuni`,
story: `Two Rooks II`,
createdAt: new Date(),
updatedAt: new Date()
},{
username: `Yuni`,
story: `To Solstia`,
createdAt: new Date(),
updatedAt: new Date()
}
], { validate: true });

console.log('Attendances created successfully!');
} catch (error) {
console.error('Error during seeding:', error);
}
},

  async down (queryInterface, Sequelize) {
    options.tableName = 'Attendances';
    const Op = Sequelize.Op;
    return queryInterface.bulkDelete('Attendances', null, {});
  }
};
