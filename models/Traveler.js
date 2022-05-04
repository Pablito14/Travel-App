const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Traveler extends Model {}

Traveler.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    name: {
      // Don't know if this needs to be .Varchar vs .string
      type: DataTypes.STRING,
      allowNull: false,
    },
    email: {
      // Don't know if this needs to be .Varchar vs .string
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'traveler',
  }
);

module.exports = Traveler;
