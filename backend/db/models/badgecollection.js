'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class BadgeCollection extends Model {
    static associate(models) {
      BadgeCollection.belongsTo(models.User, { foreignKey: 'username', targetKey: 'username' });
      BadgeCollection.belongsTo(models.Badge, { foreignKey: 'badgeName', targetKey: 'name' })
    }
  }
  BadgeCollection.init({
    username: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true
    },
    badgeName: {
      type: DataTypes.STRING,
      allowNull: false
    }
  }, {
    sequelize,
    modelName: 'BadgeCollection',
  });
  return BadgeCollection;
};