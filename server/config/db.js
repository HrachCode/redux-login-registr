const Sequelize = require("sequelize");

// const sequelize = new Sequelize("testdb", "postgres", "myPassword", {
//   "logging" : false,
//   dialect: "postgres",
//   host:'localhost'
// });


// const sequelize = new Sequelize("onvqjoin", "onvqjoin", "i9xJN2LSDFfZDYutw0bTRmFmRoH5DHfW", {
//     "logging" : false,
//     dialect: "postgres",
//     host:'balarama.db.elephantsql.com'
//   });

const sequelize = new Sequelize("posts", "root", "", {
    "logging" : false,
    dialect: "mysql",
    host:'localhost'
  });

 module.exports = sequelize;

// const sequelize = new Sequelize("alcycovc_test", "alcycovc_hrach", "}T*5FF~0H04T", {
//   dialect: "mysql",
//   host: "localhost",
//   define: {
//     timestamps: false
//   }
// });