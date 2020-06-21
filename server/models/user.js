const Sequelize = require("sequelize");
const sequelize = require('../config/db')
const JsonField = require('sequelize-json')
// const User = require('../user')
 // И lang
 let User = sequelize.define('myuser', {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: Sequelize.DataTypes.INTEGER
    },
    name:{
      type: Sequelize.DataTypes.STRING,
      allowNull: false
    },
    email: {
      type: Sequelize.DataTypes.STRING,
      allowNull: true
    },
    password: {
        type: Sequelize.DataTypes.STRING,
        allowNull: true
      },
  }, {
    timestamps: false // Колонки createdAt и updatedAt ne будут созданы автоматически
  });

  // User.hasMany(lang);
  // lang.belongsTo(User);

  module.exports = User;
