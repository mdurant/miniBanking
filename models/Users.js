// Tabla usuarios
const Sequelize = require('sequelize');
const db = require('../config/db');
const bcrypt = require('bcrypt-nodejs');

const Usuarios = db.define('usuarios', {
// estructura la tabla
id :{
    type : Sequelize.INTEGER,
    primaryKey :true,
    autoincrement : true
},
nombre:{
    type: Sequelize.STRING(100),
    allowNull: false,
    unique : true
},
rut:{
    type: Sequelize.STRING(15),
    allowNull: false,
    unique : true
},
password :{
    type: Sequelize.STRING(100),
    allowNull: false,
},
email: {
    type: Sequelize.STRING(50),
    allowNull: false,
    validate:{
        isEmail: { msg: 'Agragar correo válido'}
    },
    unique : true
},
activo: {
    type: Sequelize.STRING(1),
    defaultValue:0
}, 
tokenUser : { 
type: Sequelize.STRING(100)
},

expiracionToken: {
    type: Sequelize.DATE
}, {
    hooks:{
        beforeCreate(usuario){
            usuario.password = bcrypt.hashSync(usuario.password, bcrypt.genSaltSync(15), null);
        }
    }

});

// Comprobar claves

Usuarios.prototype.validarPassword = function(password){
    return bcrypt.compareSync (password, this.password);
}


module.exports = Usuarios;