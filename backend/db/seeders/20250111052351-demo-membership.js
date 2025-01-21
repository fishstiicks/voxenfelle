'use strict';

const { Membership } = require('../models');

let options = {};
if (process.env.NODE_ENV === 'production') {
  options.schema = process.env.SCHEMA;
}

module.exports = {
  async up (queryInterface, Sequelize) {
    await Membership.bulkCreate([{
      club: 'Abstinence Club',
      character: 'Ione',
      createdAt: new Date(),
      updatedAt: new Date()}, {
      club: 'Abstinence Club',
      character: 'Adrian',
      createdAt: new Date(),
      updatedAt: new Date()}, {
      club: 'Abstinence Club',
      character: 'Seraphina',
      createdAt: new Date(),
      updatedAt: new Date()}, {
      club: 'Abstinence Club',
      character: 'Ridley',
      createdAt: new Date(),
      updatedAt: new Date()}, {
      club: 'Abstinence Club',
      character: 'Fen',
      createdAt: new Date(),
      updatedAt: new Date()}, {
      club: 'Abstinence Club',
      character: 'Lucina',
      createdAt: new Date(),
      updatedAt: new Date()}, {
      club: 'Drama Club',
      character: 'Eris',
      createdAt: new Date(),
      updatedAt: new Date()}, {
      club: 'Drama Club',
      character: 'Dingo',
      createdAt: new Date(),
      updatedAt: new Date()}, {
      club: 'Drama Club',
      character: 'Renzhi',
      createdAt: new Date(),
      updatedAt: new Date()}, {
      club: 'Drama Club',
      character: 'Gwen',
      createdAt: new Date(),
      updatedAt: new Date()}, {
      club: 'Drama Club',
      character: 'Phedras',
      createdAt: new Date(),
      updatedAt: new Date()}, {
      club: 'Drama Club',
      character: 'Kit',
      createdAt: new Date(),
      updatedAt: new Date()}, {
      club: 'Drama Club',
      character: 'Fen',
      createdAt: new Date(),
      updatedAt: new Date()}, {
      club: 'Drama Club',
      character: 'Jay',
      createdAt: new Date(),
      updatedAt: new Date()}, {
      club: 'Drama Club',
      character: 'Gemini',
      createdAt: new Date(),
      updatedAt: new Date()}, {
      club: 'Drama Club',
      character: 'Danny',
      createdAt: new Date(),
      updatedAt: new Date()}, {
      club: 'Drama Club',
      character: 'Hong',
      createdAt: new Date(),
      updatedAt: new Date()}, {
      club: 'Drama Club',
      character: 'Deacon',
      createdAt: new Date(),
      updatedAt: new Date()}, {
      club: 'Drama Club',
      character: 'Felix',
      createdAt: new Date(),
      updatedAt: new Date()}, {
      club: 'Fishing Club',
      character: 'War',
      createdAt: new Date(),
      updatedAt: new Date()}, {
      club: 'Fishing Club',
      character: 'Erin',
      createdAt: new Date(),
      updatedAt: new Date()}, {
      club: 'Fishing Club',
      character: 'Ridley',
      createdAt: new Date(),
      updatedAt: new Date()}, {
      club: 'Fishing Club',
      character: 'Eden',
      createdAt: new Date(),
      updatedAt: new Date()}, {
      club: 'Fishing Club',
      character: 'Areve',
      createdAt: new Date(),
      updatedAt: new Date()}, {
      club: 'Fishing Club',
      character: 'Ione',
      createdAt: new Date(),
      updatedAt: new Date()}, {
      club: 'Fishing Club',
      character: 'Xen',
      createdAt: new Date(),
      updatedAt: new Date()}, {
      club: 'Fishing Club',
      character: 'Ashley',
      createdAt: new Date(),
      updatedAt: new Date()}, {
      club: 'Peer Tutoring',
      character: 'Areve',
      createdAt: new Date(),
      updatedAt: new Date()}, {
      club: 'Peer Tutoring',
      character: 'The Keeper',
      createdAt: new Date(),
      updatedAt: new Date()}, {
      club: 'Peer Tutoring',
      character: 'Areve',
      createdAt: new Date(),
      updatedAt: new Date()}, {
      club: 'Peer Tutoring',
      character: 'Jay',
      createdAt: new Date(),
      updatedAt: new Date()}, {
      club: 'Peer Tutoring',
      character: 'Adam',
      createdAt: new Date(),
      updatedAt: new Date()}, {
      club: 'Peer Tutoring',
      character: 'Ashley',
      createdAt: new Date(),
      updatedAt: new Date()}, {
      club: 'Peer Tutoring',
      character: 'Haydee',
      createdAt: new Date(),
      updatedAt: new Date()}, {
      club: 'Peer Tutoring',
      character: 'Makoto',
      createdAt: new Date(),
      updatedAt: new Date()}, {
      club: 'Arts Club',
      character: 'Ione',
      createdAt: new Date(),
      updatedAt: new Date()}, {
      club: 'Arts Club',
      character: 'Phedras',
      createdAt: new Date(),
      updatedAt: new Date()}, {
      club: 'Arts Club',
      character: 'Adrian',
      createdAt: new Date(),
      updatedAt: new Date()}, {
      club: 'Arts Club',
      character: 'Areve',
      createdAt: new Date(),
      updatedAt: new Date()}, {
      club: 'Arts Club',
      character: 'Fen',
      createdAt: new Date(),
      updatedAt: new Date()}, {
      club: 'Arts Club',
      character: 'Jay',
      createdAt: new Date(),
      updatedAt: new Date()}, {
      club: 'Arts Club',
      character: 'Idony',
      createdAt: new Date(),
      updatedAt: new Date()}, {
      club: 'Dueling Club',
      character: 'Ione',
      createdAt: new Date(),
      updatedAt: new Date()}, {
      club: 'Dueling Club',
      character: 'War',
      createdAt: new Date(),
      updatedAt: new Date()}, {
      club: 'Dueling Club',
      character: 'The Keeper',
      createdAt: new Date(),
      updatedAt: new Date()}, {
      club: 'Dueling Club',
      character: 'Llewellyn',
      createdAt: new Date(),
      updatedAt: new Date()}, {
      club: 'Gaming Club',
      character: 'Erin',
      createdAt: new Date(),
      updatedAt: new Date()}, {
      club: 'Gaming Club',
      character: 'War',
      createdAt: new Date(),
      updatedAt: new Date()}, {
      club: 'Gaming Club',
      character: 'Renzhi',
      createdAt: new Date(),
      updatedAt: new Date()}, {
      club: 'Gaming Club',
      character: 'Cynric',
      createdAt: new Date(),
      updatedAt: new Date()}, {
      club: 'Gaming Club',
      character: 'Taeyong',
      createdAt: new Date(),
      updatedAt: new Date()}, {
      club: 'Gaming Club',
      character: 'Pomme',
      createdAt: new Date(),
      updatedAt: new Date()}, {
      club: 'Gaming Club',
      character: 'Kit',
      createdAt: new Date(),
      updatedAt: new Date()}, {
      club: 'Gaming Club',
      character: 'Xen',
      createdAt: new Date(),
      updatedAt: new Date()}, {
      club: 'Gaming Club',
      character: 'Haydee',
      createdAt: new Date(),
      updatedAt: new Date()}, {
      club: 'Gaming Club',
      character: 'Akira',
      createdAt: new Date(),
      updatedAt: new Date()}, {
      club: 'Research Club',
      character: 'The Keeper',
      createdAt: new Date(),
      updatedAt: new Date()}, {
      club: 'Research Club',
      character: 'Renzhi',
      createdAt: new Date(),
      updatedAt: new Date()}, {
      club: 'Research Club',
      character: 'Pomme',
      createdAt: new Date(),
      updatedAt: new Date()}, {
      club: 'Research Club',
      character: 'Jay',
      createdAt: new Date(),
      updatedAt: new Date()}, {
      club: 'Research Club',
      character: 'Tomoya',
      createdAt: new Date(),
      updatedAt: new Date()}, {
      club: 'Research Club',
      character: 'Adam',
      createdAt: new Date(),
      updatedAt: new Date()}, {
      club: 'Research Club',
      character: 'Ashley',
      createdAt: new Date(),
      updatedAt: new Date()}, {
      club: 'Astronomical Society',
      character: 'Oma',
      createdAt: new Date(),
      updatedAt: new Date()}, {
      club: 'Astronomical Society',
      character: 'War',
      createdAt: new Date(),
      updatedAt: new Date()}, {
      club: 'Astronomical Society',
      character: 'The Keeper',
      createdAt: new Date(),
      updatedAt: new Date()}, {
      club: 'Astronomical Society',
      character: 'Phedras',
      createdAt: new Date(),
      updatedAt: new Date()}, {
      club: 'Astronomical Society',
      character: 'Pomme',
      createdAt: new Date(),
      updatedAt: new Date()}, {
      club: 'Astronomical Society',
      character: 'Kit',
      createdAt: new Date(),
      updatedAt: new Date()}, {
      club: 'Astronomical Society',
      character: 'Jay',
      createdAt: new Date(),
      updatedAt: new Date()}, {
      club: 'Engineering Club',
      character: 'Chidori',
      createdAt: new Date(),
      updatedAt: new Date()}, {
      club: 'Engineering Club',
      character: 'Oma',
      createdAt: new Date(),
      updatedAt: new Date()}, {
      club: 'Engineering Club',
      character: 'Hong',
      createdAt: new Date(),
      updatedAt: new Date()}, {
      club: 'Engineering Club',
      character: 'Renzhi',
      createdAt: new Date(),
      updatedAt: new Date()}, {
      club: 'Engineering Club',
      character: 'Jay',
      createdAt: new Date(),
      updatedAt: new Date()}, {
      club: 'Engineering Club',
      character: 'Eris',
      createdAt: new Date(),
      updatedAt: new Date()}, {
      club: 'Engineering Club',
      character: 'Xen',
      createdAt: new Date(),
      updatedAt: new Date()}, {
      club: 'Engineering Club',
      character: 'Maeval',
      createdAt: new Date(),
      updatedAt: new Date()}, {
      club: 'Engineering Club',
      character: 'War',
      createdAt: new Date(),
      updatedAt: new Date()}, {
      club: 'Engineering Club',
      character: 'Pomme',
      createdAt: new Date(),
      updatedAt: new Date()}, {
      club: 'Engineering Club',
      character: 'Areve',
      createdAt: new Date(),
      updatedAt: new Date()}, {
      club: 'Engineering Club',
      character: 'Juniper',
      createdAt: new Date(),
      updatedAt: new Date()}, {
      club: 'Engineering Club',
      character: 'Haydee',
      createdAt: new Date(),
      updatedAt: new Date()}, {
      club: 'Engineering Club',
      character: 'Ashley',
      createdAt: new Date(),
      updatedAt: new Date()}, {
      club: 'Gardening Club',
      character: 'Eden',
      createdAt: new Date(),
      updatedAt: new Date()}, {
      club: 'Gardening Club',
      character: 'Ione',
      createdAt: new Date(),
      updatedAt: new Date()}, {
      club: 'Gardening Club',
      character: 'Dingo',
      createdAt: new Date(),
      updatedAt: new Date()}, {
      club: 'Gardening Club',
      character: 'Areve',
      createdAt: new Date(),
      updatedAt: new Date()}, {
      club: 'Gardening Club',
      character: 'Juniper',
      createdAt: new Date(),
      updatedAt: new Date()}, {
      club: 'Gardening Club',
      character: 'Tomoko',
      createdAt: new Date(),
      updatedAt: new Date()}, {
      club: 'Tea Club',
      character: 'Aina',
      createdAt: new Date(),
      updatedAt: new Date()}, {
      club: 'Tea Club',
      character: 'Renzhi',
      createdAt: new Date(),
      updatedAt: new Date()}, {
      club: 'Tea Club',
      character: 'Vanessa',
      createdAt: new Date(),
      updatedAt: new Date()}, {
      club: 'Tea Club',
      character: 'Tomoya',
      createdAt: new Date(),
      updatedAt: new Date()}, {
      club: 'Tea Club',
      character: 'Areve',
      createdAt: new Date(),
      updatedAt: new Date()}, {
      club: 'Tea Club',
      character: 'Emily',
      createdAt: new Date(),
      updatedAt: new Date()}, {
      club: 'Tea Club',
      character: 'Haydee',
      createdAt: new Date(),
      updatedAt: new Date()}, {
      club: 'Tea Club',
      character: 'Tomoko',
      createdAt: new Date(),
      updatedAt: new Date()}, {
      club: 'Cat Club',
      character: 'Yitian',
      createdAt: new Date(),
      updatedAt: new Date()}, {
      club: 'Cat Club',
      character: 'War',
      createdAt: new Date(),
      updatedAt: new Date()}, {
      club: 'Cat Club',
      character: 'Phedras',
      createdAt: new Date(),
      updatedAt: new Date()}, {
      club: 'Cat Club',
      character: 'Adrian',
      createdAt: new Date(),
      updatedAt: new Date()}, {
      club: 'Cat Club',
      character: 'Pomme',
      createdAt: new Date(),
      updatedAt: new Date()}, {
      club: 'Cat Club',
      character: 'Dingo',
      createdAt: new Date(),
      updatedAt: new Date()}, {
      club: 'Cat Club',
      character: 'Fia',
      createdAt: new Date(),
      updatedAt: new Date()}, {
      club: 'Equestrian Club',
      character: 'Renzhi',
      createdAt: new Date(),
      updatedAt: new Date()}, {
      club: 'Equestrian Club',
      character: 'Aina',
      createdAt: new Date(),
      updatedAt: new Date()}, {
      club: 'Equestrian Club',
      character: 'Gwen',
      createdAt: new Date(),
      updatedAt: new Date()}, {
      club: 'Equestrian Club',
      character: 'Vanessa',
      createdAt: new Date(),
      updatedAt: new Date()}, {
      club: 'Equestrian Club',
      character: 'Tomoya',
      createdAt: new Date(),
      updatedAt: new Date()}, {
      club: 'Equestrian Club',
      character: 'Eden',
      createdAt: new Date(),
      updatedAt: new Date()}, {
      club: 'Equestrian Club',
      character: 'Idony',
      createdAt: new Date(),
      updatedAt: new Date()}, {
      club: 'Equestrian Club',
      character: 'Hong',
      createdAt: new Date(),
      updatedAt: new Date()}, {
      club: 'Equestrian Club',
      character: 'Emily',
      createdAt: new Date(),
      updatedAt: new Date()}, {
      club: 'GOFUNDME: Fiscal Management Improvement Club',
      character: 'Eun',
      createdAt: new Date(),
      updatedAt: new Date()}, {
      club: 'GOFUNDME: Fiscal Management Improvement Club',
      character: 'Crimson',
      createdAt: new Date(),
      updatedAt: new Date()}, {
      club: 'GOFUNDME: Fiscal Management Improvement Club',
      character: 'Adrian',
      createdAt: new Date(),
      updatedAt: new Date()}, {
      club: 'GOFUNDME: Fiscal Management Improvement Club',
      character: 'Chidori',
      createdAt: new Date(),
      updatedAt: new Date()}, {
      club: 'GOFUNDME: Fiscal Management Improvement Club',
      character: 'Ridley',
      createdAt: new Date(),
      updatedAt: new Date()}, {
      club: 'GOFUNDME: Fiscal Management Improvement Club',
      character: 'Dingo',
      createdAt: new Date(),
      updatedAt: new Date()}, {
      club: 'GOFUNDME: Fiscal Management Improvement Club',
      character: 'Damir',
      createdAt: new Date(),
      updatedAt: new Date()}, {
      club: 'VOW: Voidpacts Organized for the World',
      character: 'Pomme',
      createdAt: new Date(),
      updatedAt: new Date()}, {
      club: 'VOW: Voidpacts Organized for the World',
      character: 'Beatrix',
      createdAt: new Date(),
      updatedAt: new Date()}, {
      club: 'VOW: Voidpacts Organized for the World',
      character: 'The Keeper',
      createdAt: new Date(),
      updatedAt: new Date()}, {
      club: 'VOW: Voidpacts Organized for the World',
      character: 'Scottie',
      createdAt: new Date(),
      updatedAt: new Date()}, {
      club: 'VOW: Voidpacts Organized for the World',
      character: 'Ridley',
      createdAt: new Date(),
      updatedAt: new Date()}, {
      club: 'VOW: Voidpacts Organized for the World',
      character: 'Eden',
      createdAt: new Date(),
      updatedAt: new Date()}, {
      club: 'VOW: Voidpacts Organized for the World',
      character: 'Kit',
      createdAt: new Date(),
      updatedAt: new Date()}, {
      club: 'VOW: Voidpacts Organized for the World',
      character: 'Oma',
      createdAt: new Date(),
      updatedAt: new Date()}, {
      club: 'Cooking Club',
      character: 'Areve',
      createdAt: new Date(),
      updatedAt: new Date()}, {
      club: 'Cooking Club',
      character: 'Fia',
      createdAt: new Date(),
      updatedAt: new Date()}, {
      club: 'Cooking Club',
      character: 'Juniper',
      createdAt: new Date(),
      updatedAt: new Date()}, {
      club: 'FBI: Fight/Body Improvement Club',
      character: 'Gwen',
      createdAt: new Date(),
      updatedAt: new Date()}, {
      club: 'FBI: Fight/Body Improvement Club',
      character: 'Yitian',
      createdAt: new Date(),
      updatedAt: new Date()}, {
      club: 'FBI: Fight/Body Improvement Club',
      character: 'Xen',
      createdAt: new Date(),
      updatedAt: new Date()}, {
      club: 'FBI: Fight/Body Improvement Club',
      character: 'Scottie',
      createdAt: new Date(),
      updatedAt: new Date()}, {
      club: 'FBI: Fight/Body Improvement Club',
      character: 'Dingo',
      createdAt: new Date(),
      updatedAt: new Date()}, {
      club: 'FBI: Fight Body Improvement Club',
      character: 'The Keeper',
      createdAt: new Date(),
      updatedAt: new Date()}, {
      club: 'FBI: Fight Body Improvement Club',
      character: 'Jay',
      createdAt: new Date(),
      updatedAt: new Date()}, {
      club: 'FBI: Fight Body Improvement Club',
      character: 'Pomme',
      createdAt: new Date(),
      updatedAt: new Date()}, {
      club: 'FBI: Fight Body Improvement Club',
      character: 'Ashley',
      createdAt: new Date(),
      updatedAt: new Date()}, {
      club: 'FBI: Fight Body Improvement Club',
      character: 'Akira',
      createdAt: new Date(),
      updatedAt: new Date()}, {
      club: 'Hible Study Group',
      character: 'Adrian',
      createdAt: new Date(),
      updatedAt: new Date()}, {
      club: 'Hible Study Group',
      character: 'Juniper',
      createdAt: new Date(),
      updatedAt: new Date()}, {
      club: 'Detective Society',
      character: 'Felix',
      createdAt: new Date(),
      updatedAt: new Date()}, {
      club: 'Detective Society',
      character: 'Dingo',
      createdAt: new Date(),
      updatedAt: new Date()}, {
      club: 'Detective Society',
      character: 'Adrian',
      createdAt: new Date(),
      updatedAt: new Date()}, {
      club: 'Detective Society',
      character: 'Chidori',
      createdAt: new Date(),
      updatedAt: new Date()}, {
      club: 'Detective Society',
      character: 'Citron',
      createdAt: new Date(),
      updatedAt: new Date()}, {
      club: 'Detective Society',
      character: 'Kit',
      createdAt: new Date(),
      updatedAt: new Date()}, {
      club: 'Detective Society',
      character: 'Gwen',
      createdAt: new Date(),
      updatedAt: new Date()}, {
      club: 'Detective Society',
      character: 'The Keeper',
      createdAt: new Date(),
      updatedAt: new Date()}, {
      club: 'Detective Society',
      character: 'Llewellyn',
      createdAt: new Date(),
      updatedAt: new Date()}, {
      club: 'Fight Club',
      character: 'Crimson',
      createdAt: new Date(),
      updatedAt: new Date()}, {
      club: 'Fight Club',
      character: 'War',
      createdAt: new Date(),
      updatedAt: new Date()}, {
      club: 'Fight Club',
      character: 'Yitian',
      createdAt: new Date(),
      updatedAt: new Date()}, {
      club: 'Fight Club',
      character: 'Pomme',
      createdAt: new Date(),
      updatedAt: new Date()}, {
      club: 'Fight Club',
      character: 'Dingo',
      createdAt: new Date(),
      updatedAt: new Date()}, {
      club: 'Fight Club',
      character: 'Jay',
      createdAt: new Date(),
      updatedAt: new Date()}, {
      club: 'Fight Club',
      character: 'Llewellyn',
      createdAt: new Date(),
      updatedAt: new Date()}, {
      club: 'Fight Club',
      character: 'Ashley',
      createdAt: new Date(),
      updatedAt: new Date()}, {
      club: 'MISC: Mental Illness Support Club',
      character: 'War',
      createdAt: new Date(),
      updatedAt: new Date()}, {
      club: 'MISC: Mental Illness Support Club',
      character: 'Phedras',
      createdAt: new Date(),
      updatedAt: new Date()}, {
      club: 'MISC: Mental Illness Support Club',
      character: 'Damir',
      createdAt: new Date(),
      updatedAt: new Date()}, {
      club: 'MISC: Mental Illness Support Club',
      character: 'Yitian',
      createdAt: new Date(),
      updatedAt: new Date()}, {
      club: 'MISC: Mental Illness Support Club',
      character: 'Rider',
      createdAt: new Date(),
      updatedAt: new Date()}, {
      club: 'MISC: Mental Illness Support Club',
      character: 'Tomoya',
      createdAt: new Date(),
      updatedAt: new Date()}, {
      club: 'MISC: Mental Illness Support Club',
      character: 'Idony',
      createdAt: new Date(),
      updatedAt: new Date()}, {
      club: 'MISC: Mental Illness Support Club',
      character: 'Emily',
      createdAt: new Date(),
      updatedAt: new Date()}, {
      club: 'MISC: Mental Illness Support Club',
      character: 'Tomoya',
      createdAt: new Date(),
      updatedAt: new Date()}, {
      club: 'MISC: Mental Illness Support Club',
      character: 'Jay',
      createdAt: new Date(),
      updatedAt: new Date()
    }], {});
  },

  async down (queryInterface, Sequelize) {
    options.tableName = 'Memberships';
    const Op = Sequelize.Op;
    return queryInterface.bulkDelete('Memberships', null, {});
  }
};
