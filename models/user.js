'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      models.User.hasMany(models.Room, {
        foreignKey: "user_id"
      });
      models.User.hasMany(models.Chat, {
        foreignKey: "user_id"
      });
      models.User.hasMany(models.Participant, {
        foreignKey: "user_id"
      });
    }
  };
  User.init({
    user_id: DataTypes.INTEGER,
    user_name: DataTypes.STRING,
    profileImage: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'User',
  });
  return User;
};