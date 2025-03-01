'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  const Chat = sequelize.define('Chat', {
    UserId: DataTypes.INTEGER,
    message: DataTypes.TEXT,
    ChatroomId:DataTypes.INTEGER
  }, {});
  Chat.associate = function (models) {
    Chat.belongsTo(models.User)
  };
  return Chat;
};