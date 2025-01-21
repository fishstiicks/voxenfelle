'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Relationship extends Model {
    static associate(models) {
      Relationship.belongsTo(models.Character, { foreignKey: 'you', targetKey: 'name' });
    }
  }
  Relationship.init({
    you: {
      type: DataTypes.STRING,
      allowNull: false
    },
    them: {
      type: DataTypes.STRING,
      allowNull: false
    },
    special: DataTypes.STRING,
    description: DataTypes.TEXT
  }, {
    sequelize,
    modelName: 'Relationship',
  });
  return Relationship;
};
