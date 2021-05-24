'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class artist extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      {
      models.artist.belongsTo(models.userInfo, {foreignKey: 'labelId'})
      models.artist.belongsTo(models.label, {foreignKey: 'labelId'})
      models.artist.belongsTo(models.genre, {foreignKey: 'rating'})
      models.artist.belongsTo(models.rating, {foreignKey: 'genre'})
    }
    }
  };
  artist.init({
    name: DataTypes.STRING,
    genre: DataTypes.STRING,
    biograpy: DataTypes.STRING,
    fanbase: DataTypes.INTEGER,
    rating: DataTypes.INTEGER,
    price: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'artist',
  });
  return artist;
};