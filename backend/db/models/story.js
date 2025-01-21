'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Story extends Model {
    static associate(models) {
      Story.hasMany(models.Attendance, { foreignKey: 'story', sourceKey: 'title' });
    }
  }
  Story.init({
    title: {
      type: DataTypes.STRING,
      allowNull: false
    }
  }, {
    sequelize,
    modelName: 'Story',
  });
  return Story;
};
