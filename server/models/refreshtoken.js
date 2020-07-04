const Sequelize = require("sequelize");
const sequelize = require('../config/db')

const User = require('./user')
 
 let refreshtokns = sequelize.define('refreshtokn', {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: Sequelize.DataTypes.INTEGER
    },
   
    
    token: {
      type: Sequelize.DataTypes.STRING,
      allowNull: false
    },
    userId: {
      type: Sequelize.DataTypes.INTEGER,
      allowNull: false
    },
   
    
  }, {
    timestamps: false // Колонки createdAt и updatedAt ne будут созданы автоматически
  });

  User.hasMany(refreshtokns);
  refreshtokns.belongsTo(User);

  module.exports = refreshtokns;

