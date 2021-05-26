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
      models.artist.belongsTo(models.label)
      models.artist.hasMany(models.rating)
      // models.artist.belongsToMany(models.label, {through:'artistLabel'})
      // models.artist.belongsToMany(models.userInfo, {through:'artistLabel'})
      // models.artist.belongsTo(models.genre, {foreignKey:'genre'})
      // models.artist.belongsTo(models.rating, {foreignKey:'rating'})
    }
    }
  };
  artist.init({
    name: DataTypes.STRING,
    genre: DataTypes.STRING,
    biograpy: DataTypes.STRING,
    fanbase: DataTypes.INTEGER,
    rating: DataTypes.INTEGER,
    price: DataTypes.INTEGER,
    labelId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'artist',
  });
  return artist;
};
