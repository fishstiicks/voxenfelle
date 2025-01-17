'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Character extends Model {
    static associate(models) {
      this.belongsTo(models.User, { foreignKey: 'mun', targetKey: 'username' });
      this.hasMany(models.Art, { foreignKey: 'character', sourceKey: 'name' });
      this.hasMany(models.Membership, { foreignKey: 'character', sourceKey: 'name' });
      this.hasMany(models.Relationship, { foreignKey: 'you', sourceKey: 'name' });    }
  }
  Character.init({
    mun: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    state: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        isIn: {
          args: [['NPC', 'PC']],  
          msg: 'State must be either "NPC" or "PC"'
        }
      }
    },
    picrew: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    fullName: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    pronouns: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    height: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    lineage: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        isIn: {
          args: [['Civilian', 'Noble']],  
          msg: 'Lineage must be either "Civilian" or "Noble"'
        }
      }
    },
    source: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        isIn: {
          args: [['Aura', 'Void']],  
          msg: 'Source must be either "Aura" or "Void"'
        }
      }
    },
    hexcode: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    weapon: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    power: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    reputation: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    class: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    dorm: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    str: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    dex: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    con: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    cha: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    int: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    mag: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    soulbond: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: false
    },
    souldrop: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: false
    }
  }, {
    sequelize,
    modelName: 'Character',
  });
  return Character;
};
