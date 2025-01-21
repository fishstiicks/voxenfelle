'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    static associate(models) {
      User.hasMany(models.Attendance, { foreignKey: 'username', sourceKey: 'username' });
      User.hasMany(models.Character, { foreignKey: 'mun', sourceKey: 'username' });
      User.hasMany(models.Club, { foreignKey: 'creator', sourceKey: 'username' });
      User.hasMany(models.Art, { foreignKey: 'mun', sourceKey: 'username' });
    }
  }
  User.init({
    username: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true
    },
    hashedPassword: {
      type: DataTypes.STRING,
      allowNull: false
    }
  }, {
    sequelize,
    modelName: 'User',
  });
  return User;
};
