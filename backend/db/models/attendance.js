'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Attendance extends Model {
    static associate(models) {
      Attendance.belongsTo(models.User, { foreignKey: 'username', targetKey: 'username' });
      Attendance.belongsTo(models.Story, { foreignKey: 'story', targetKey: 'title' });
    }
  }
  Attendance.init({
    username: {
      type: DataTypes.STRING,
      allowNull: false
    },
    story: {
      type: DataTypes.STRING,
      allowNull: false
    }
  }, {
    sequelize,
    modelName: 'Attendance',
  });
  return Attendance;
};
