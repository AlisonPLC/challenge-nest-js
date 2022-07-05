const Sequelize = require('sequelize');
const database = require('./db');
const Produto = require('./produtos');

const Categorias = database.define('categorias', {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true,
  },
  codigo: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  titulo: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  status: {
    type: Sequelize.INTEGER,
    allowNull: false,
    //0 - Inativo / 1 - Ativo
  },
});

module.exports = Categorias;
