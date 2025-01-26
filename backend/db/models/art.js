'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Art extends Model {
    static associate(models) {
      Art.belongsTo(models.User, { foreignKey: 'mun' });
      Art.belongsTo(models.Character, { foreignKey: 'character' });
    }
  }
  Art.init({
    mun: {
      type: DataTypes.STRING,
      allowNull: false
    },
    url: {
      type: DataTypes.STRING,
      allowNull: false
    },
    character: {
      type: DataTypes.STRING,
      allowNull: false
    },
    event: {
      type: DataTypes.STRING,
      allowNull: true
    },
    reference: {
      type: DataTypes.BOOLEAN,
      allowNull: false
    }
  }, {
    sequelize,
    modelName: 'Art',
  });
  return Art;
};
