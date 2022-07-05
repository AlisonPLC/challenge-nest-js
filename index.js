(async () => {
  const database = require('./db');
  const Produto = require('./produtos');
  const Categorias = require('./categorias');
  const Estoque = require('./estoque');

  // const novaCategoria = await Categorias.create({
  //   codigo: 0o3, //foreign key on the Categorias
  //   titulo: 'Extras',
  //   status: 1,
  // });

  const novoProduto = await Produto.create({
    codigo: 001, //sku do produto
    codigo: 'Extras',
    nome: '',
    descricao: '',
    valor: 10.0,
    status: 1,
  });

  await database.sync();
})();
