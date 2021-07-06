'use strict';
module.exports = (sequelize, DataTypes) => {
  const Reply = sequelize.define('Reply', {
    content: DataTypes.TEXT,
    UserId: DataTypes.INTEGER,
    TweetId: DataTypes.INTEGER
  }, {});
  Reply.associate = function (models) {
    Reply.belongsTo(models.User)
    Reply.belongsTo(models.Tweet)
    Reply.hasMany(models.Like)
    Reply.belongsToMany(models.User, {
      through: 'Like',
      foreignKey: 'ReplyId',
      as: 'GiveLikesUsers'
    })
  };
  return Reply;
};