'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Club extends Model {
    static associate(models) {
      this.belongsTo(models.User, { foreignKey: 'creator', targetKey: 'username' });
      this.hasMany(models.Membership, { foreignKey: 'club', sourceKey: 'name' });
    }
  }
  Club.init({
    name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    description: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Club',
  });
  return Club;
};