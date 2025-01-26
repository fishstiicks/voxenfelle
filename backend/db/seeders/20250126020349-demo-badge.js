'use strict';

const { Badge } = require('../models');

let options = {};
if (process.env.NODE_ENV === 'production') {
  options.schema = process.env.SCHEMA;
}

module.exports = {
  async up (queryInterface, Sequelize) {
    await Badge.bulkCreate([{
      username: `Nelle`,
      name: `Void's Eve`,
      badgeUrl: `https://file.garden/Ze8jJVucmRDZDhDo/Voxenfelle/badges/voids_eve.png`,
      description: `Earned 10 tokens during the Void's Eve festival.`,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      username: `Nelle`,
      name: `Flashpoint`,
      badgeUrl: `https://file.garden/ZvdEiabDvGKGr36j/VOIDS%20EVE%20MEDAL%202.png`,
      description: `Participate in all plot roleplays during the Defense Ministry arc.`,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      username: `Sen, Crow`,
      name: `Diligent Fairy Godmothers`,
      badgeUrl: `https://file.garden/Ze8jJVucmRDZDhDo/Voxenfelle/badges/godmothers_2.png`,
      description: `Participate in the Fairy Godmother's Pop-up shop missions.`,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      username: `Sen, Crow`,
      name: `Treasure Trailblazers`,
      badgeUrl: `https://file.garden/Ze8jJVucmRDZDhDo/Voxenfelle/badges/godmother_1.png`,
      description: `Unlock the secret map for Fairy Godmother's Pop-up shop mission.`,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      username: `Cas`,
      name: `Hylia's Grace`,
      badgeUrl: `https://file.garden/Ze8jJVucmRDZDhDo/Voxenfelle/badges/hylias_grace.png`,
      description: `Earn 70 points or more (combined student scores) and PASS the Winter Final Exams.`,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      username: `Cas`,
      name: `Edelweiss Ball`,
      badgeUrl: `https://file.garden/Ze8jJVucmRDZDhDo/Voxenfelle/badges/edelweiss_ball.png`,
      description: `Submit an entry to the Edelweiss Ball Karneval ED parody video.`,
      createdAt: new Date(),
      updatedAt: new Date()
    }
  ], {});
  },

  async down (queryInterface, Sequelize) {
    options.tableName = 'Badges';
    const Op = Sequelize.Op;
    return queryInterface.bulkDelete('Badges', null, {});
  }
};
