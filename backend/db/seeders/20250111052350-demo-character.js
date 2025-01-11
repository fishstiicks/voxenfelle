'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('Characters', [{
      mun: 'Lok',
      state: 'PC',
      picrew: 'https://i.ibb.co/12x2zgV/transwar.png',
      name: 'War',
      fullName: 'War Santos',
      pronouns: 'He/Any',
      height: 181,
      lineage: 'Civilian',
      source: 'Void',
      hexcode: 'Void',
      weapon: 'Dual Gun Sabres',
      power: "[MIND LINK] Can impose/retrieve memories and thoughts from other sentient things. Reading surface level thoughts doesn't feel like much and may go unnoticed, but digging around for memories definitely feels invasive. Thoughts and memories may also be freely given. Imposing thoughts/memories does not make the other being unaware of reality, but it may blur the lines. Mechanically, imposition may provide boosts in battle by thought manipulation. [OOC: Thoughts/memories will not be read without consent.]",
      reputation: "Trouble, any way you look at them. A vocal activist for voidpact rights and previously part of the void army. Mute and communicates through TTS or imposing thoughts in minds. Crass but sociable.",
      class: '2-A',
      dorm: '105',
      str: 4,
      dex: 0,
      con: 3,
      cha: -1,
      int: 3,
      mag: 2,
      soulbond: false,
      souldrop: true,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      mun: 'Nelle',
      state: 'NPC',
      picrew: 'https://i.imgur.com/T05dJ6N.png',
      name: 'Chou-chou',
      fullName: 'Chou-chou',
      pronouns: 'She/Her',
      height: 154,
      lineage: 'Noble',
      source: 'Aura',
      hexcode: '#0070ff',
      weapon: 'Whip',
      power: 'Voidwalker Taming',
      reputation: "Former Void Army member, as well as their spokesperson during the Felle-Festival attack. Currently a student in class 2-B. Despite her confidence during the Void Army's first appearance, she seems to have a rather anxious personality underneath. Unsuccessfully tried to break out of prison before being offered to attend Voxenfelle. Cries easily, but she's doing her best.",
      class: '2-B',
      dorm: '206',
      str: 2,
      dex: 4,
      con: 3,
      cha: 0,
      int: -1,
      mag: 3,
      soulbond: true,
      souldrop: false,
      createdAt: new Date(),
      updatedAt: new Date()
    }], {});
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Characters', null, {});
  }
};
