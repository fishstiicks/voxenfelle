'use strict';

let options = {};
if (process.env.NODE_ENV === 'production') {
  options.schema = process.env.SCHEMA;
}

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
      },
      {
        mun: 'Mei',
        url: 'https://pbs.twimg.com/media/GX-IDYJaUAMQqgd?format=jpg&name=4096x4096',
        character: 'Idony',
        reference: true,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        mun: 'Nyaph',
        url: 'https://i.ibb.co/qRmJ6wF/vfa-ss.png',
        character: 'Danny',
        reference: false,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        mun: 'Prim',
        url: 'https://i.ibb.co/C5B7XQ2/VFADoodlings1.png',
        character: 'Idony',
        reference: false,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        mun: 'Lok',
        url: 'https://i.ibb.co/30MDC6c/image.png',
        character: 'The Keeper',
        reference: false,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        mun: 'Prim',
        url: 'https://i.ibb.co/zVyPT93/Sickness-Gift.png',
        character: 'The Keeper',
        reference: false,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        mun: 'Pour',
        url: 'https://i.ibb.co/QvQ04Qv/satella-bday-piece.png',
        character: 'Satella',
        reference: false,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        mun: 'Nyaph',
        url: 'https://i.ibb.co/GQQZPgV/ancient.png',
        character: 'The Keeper',
        reference: false,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        mun: 'Froggo',
        url: 'https://i.ibb.co/qmmj4WR/thegrind2.png',
        character: 'Tao',
        reference: false,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        mun: 'Crow',
        url: 'https://i.ibb.co/dg9WFb2/122124-ss-eden.png',
        character: 'Eden',
        reference: false,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        mun: 'Roy',
        url: 'https://i.ibb.co/jW303LR/fen-ss.png',
        character: 'Fen',
        reference: false,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        mun: 'Tara',
        url: 'https://i.ibb.co/r5VH7sq/IMG-8240.png',
        character: 'Aina',
        reference: false,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        mun: 'Nyaph',
        url: 'https://i.ibb.co/RSDfkh6/SPOILER-image.png',
        character: 'Mavis',
        reference: false,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        mun: 'Hina',
        url: 'https://i.ibb.co/GH0D7PY/VFA-Secret-Santa.png',
        character: 'Seraphina',
        reference: false,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        mun: 'Nelle',
        url: 'https://i.ibb.co/JjQhYZ6/Illustration12.png',
        character: 'Caelius',
        reference: false,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        mun: 'Twen',
        url: 'https://i.ibb.co/dp4BXFw/IMG-9158.png',
        character: 'The Keeper',
        reference: false,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        mun: 'Namako',
        url: 'https://i.ibb.co/rmhxDPm/IMG-2020.jpg',
        character: 'Makoto',
        reference: false,
        createdAt: new Date(),
        updatedAt: new Date()
      },
    ], { validate: true });
  },

  async down (queryInterface, Sequelize) {
    options.tableName = 'Arts';
    const Op = Sequelize.Op;
    return queryInterface.bulkDelete('Arts', null, {});
  }
};
