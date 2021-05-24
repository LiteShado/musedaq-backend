'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class label extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // models.label.belongsTo(models.userInfo)
      // models.label.hasMany(models.artist)
    }
  };
  label.init({
    name: DataTypes.STRING,
    labelId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'label',
  });
  return label;
};
