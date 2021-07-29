'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class RandomChat extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  RandomChat.init({
    message: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'RandomChat',
  });
  return RandomChat;
};