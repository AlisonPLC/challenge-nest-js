//this is the database file
const Sequelize = require('sequelize');
const sequelize = new Sequelize('crud', 'root', 'postpass231@', {
  dialect: 'mysql',
  host: 'localhost',
  port: 3306,
}); //nome da table, id do usuário, senha do usuário , { nome da linguagem, local do server, porta do server}

module.exports = sequelize;
