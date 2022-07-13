const sequelize = require("sequelize");

const User = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    displayName: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.STRING,
    image: DataTypes.STRING,
  }, {
    tableName: 'Users'
  });

  User.associate = (models) => {
    User.hasMany(models.BlogPosts, { as: 'BlogPosts', foreignKey: 'userId' });
  };

  return User;
};

module.exports = User;