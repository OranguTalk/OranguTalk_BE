'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Room extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      models.Room.hasMany(models.Chat, {
        foreignKey: "room_id"
      });
      models.Room.belongsTo(models.User, {
        foreignKey: "user_id"
      })
    }
  };
  Room.init({
    room_name: DataTypes.STRING,
    participant: DataTypes.INTEGER,
    profileImage: DataTypes.STRING,
    user_id: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Room',
  });
  return Room;
};