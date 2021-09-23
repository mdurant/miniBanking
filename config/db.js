const Sequelize = require('sequelize');

const db = new Sequelize('bank', 'root', 'root',{

  host: 'localhost',
  dialect: 'mariadb',
  port: 3306,
  define: {
    timestamp: false
  },
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000
  }

});

module.exports = db;