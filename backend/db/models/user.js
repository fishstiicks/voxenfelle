'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    static associate(models) {
      this.hasMany(models.Attendance, { foreignKey: 'username', sourceKey: 'username' });
      this.hasMany(models.Character, { foreignKey: 'mun', sourceKey: 'username' });
      this.hasMany(models.Club, { foreignKey: 'creator', sourceKey: 'username' });
      this.hasMany(models.Art, { foreignKey: 'mun', sourceKey: 'username' });
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
