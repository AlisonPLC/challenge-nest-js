const Sequelize = require('sequelize');
const database = require('./db');
const Produto = require('./produtos');

const Estoque = database.define('Estoque', {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true,
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

Estoque.belongsTo(Produto, {
  constraint: true,
  foreignKey: `idProduto`,
});

Categorias.hasMany(Produto, {
  foreignKey: 'codigo',
});

module.exports = Estoque;
