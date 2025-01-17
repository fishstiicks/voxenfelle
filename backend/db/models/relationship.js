'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Relationship extends Model {
    static associate(models) {
      this.belongsTo(models.Character, { foreignKey: 'you', targetKey: 'name' });
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
    description: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Relationship',
  });
  return Relationship;
};
