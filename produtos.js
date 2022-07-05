const Sequelize = require('sequelize');
const database = require('./db');

const Produto = database.define('produto', {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true,
  },
  idCategoria: {
    type: Sequelize.INTEGER,
    allowNull: false,
    //foreignKey: true,
  },
  codigo: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  nome: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  descricao: {
    type: Sequelize.TEXT,
    allowNull: false,
  },
  valor: {
    type: Sequelize.DECIMAL,
    allowNull: false,
  },
  status: {
    type: Sequelize.INTEGER,
    allowNull: false,
    //0 - Inativo / 1 - Ativo
  },
});

module.exports = Produto;
