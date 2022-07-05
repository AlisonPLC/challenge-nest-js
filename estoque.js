const Sequelize = require('sequelize');
const database = require('./db');

const Estoque = database.define('Estoque', {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true,
  },
  idProduto: {
    type: Sequelize.INTEGER,
    allowNull: false,
  },
  quantidade: {
    type: Sequelize.INTEGER,
    allowNull: false,
  },
  reserva: {
    type: Sequelize.INTEGER,
    allowNull: false,
  },
  status: {
    type: Sequelize.INTEGER,
    allowNull: false,
    //0 - Inativo / 1 - Ativo
  },
});

module.exports = Estoque;
