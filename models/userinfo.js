'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class userInfo extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // models.userInfo.hasMany(models.artist)
      // models.userInfo.hasMany(models.label)
      // models.userInfo.belongsToMany(models.artist, {through:'artistLabel'})
    }
  };
  userInfo.init({
    email: DataTypes.STRING,
    password: DataTypes.STRING,
    name: DataTypes.STRING,
    label: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'userInfo',
  });
  return userInfo;
};
