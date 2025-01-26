'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Badge extends Model {
    static associate(models) {
      Badge.belongsTo(models.User, { foreignKey: 'username', targetKey: 'username' });
      Badge.hasMany(models.BadgeCollection, { foreignKey: 'badgeName', targetKey: 'name' } )
    }
  }
  Badge.init({
    username: {
      type: DataTypes.STRING,
      allowNull: false
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      unqiue: true
    },
    description: {
      type: DataTypes.TEXT,
      unique: true
    },
    badgeUrl: {
      type: DataTypes.TEXT,
      unqiue: true
    }
  }, {
    sequelize,
    modelName: 'Badge',
  });
  return Badge;
};