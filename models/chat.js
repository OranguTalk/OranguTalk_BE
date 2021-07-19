'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Chat extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      models.Chat.belongsTo(models.User, {
        foreignKey: "user_id"
      });
      models.Chat.belongsTo(models.Room, {
        foreignKey: "room_id"
      });
    }
  };
  Chat.init({
    message: DataTypes.STRING,
    send_time: DataTypes.DATE,
    room_id: DataTypes.INTEGER,
    user_id: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Chat',
  });
  return Chat;
};