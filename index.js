(async () => {
  const database = require('./db');
  const Produto = require('./produtos');
  const Categorias = require('./categorias');
  const Estoque = require('./estoque');
  await database.sync();
})();
