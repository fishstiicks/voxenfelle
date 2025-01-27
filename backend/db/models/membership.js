'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Membership extends Model {
    static associate(models) {
      Membership.belongsTo(models.Club, { foreignKey: 'club', targetKey: 'name' });
      Membership.belongsTo(models.Character, { foreignKey: 'character', targetKey: 'name' });
    }
  }
  Membership.init({
    club: {
      type: DataTypes.STRING,
      allowNull: false
    },
    character: {
      type: DataTypes.STRING,
      allowNull: false
    }
  }, {
    sequelize,
    modelName: 'Membership',
  });
  return Membership;
};
