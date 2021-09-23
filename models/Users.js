// Tabla usuarios
const Sequelize = require('sequelize');
const db = require('../config/db');

const Users = db.define('users', {
// estructura la tabla

id :{
    type : DataTypes.BIGINT,
    primaryKey :true,
    autoincrement : true
},
nombre:{
    type: DataTypes.STRING(100),
    allowNull: false,
    unique : true
},
rut:{
    type: DataTypes.STRING(15),
    allowNull: false,
    unique : true
},
email: {
    type: DataTypes.STRING,
    allowNull: false,
    unique : true
}

});

module.exports = Users;