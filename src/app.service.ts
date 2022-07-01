import { HttpStatus, Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }
  getTest(): string {
    return `teste de categorias`;
  }

  //lista de Itens a serem implementadas na tabela CATEGORIA

  getCategorias() {
    return '/categoria';
  } // Lista Todas As Categorias
  getCategoriasId() {
    return '/categoria/:ID';
  } //Busca uma Categoria por ID
  postCategorias() {
    return '/categoria/:ID';
  } // Cria Uma Categoria
  patchCategorias() {
    return '/categoria/:ID';
  } //Edita Uma Categoria
  deleteCategorias() {
    return '/categoria/:ID';
  } //Deleta uma Categoria (deve atualizar o produto setando idCategoria como NULL para produtos que utilizam essa categoria)

  //lista de Itens a serem implementadas na tabela Produtos

  getProdutos() {
    return '/produtos';
  } // Lista Todos os Produtos
  getProdutosId() {
    return '/produtos/:ID';
  } //Busca uma Produtos por ID
  postProdutos() {
    return '/produtos';
  } // Cria Um Produtos
  patchProdutos() {
    return '/produtos';
  } //Edita Uma Produtos
  deleteProdutos() {
    return '/produtos';
  } //Deleta uma Produtos (deve atualizar o produto setando idProdutos como NULL para produtos que utilizam essa Produtos)

  //lista de Itens a serem implementadas na tabela ESTOQUE

  //* Quando um produto é criado, deve ser criado um estoque com quantidade 0 para o Produto
  //* Só pode haver 1 estoque para um mesmo Produto

  getProdutosIdEsqotue() {
    return '/produtos/:id/estoque';
  } //Lista o estoque para o Produto pelo id
  patchProdutosIdEstoque() {
    return '/produtos/:id/estoque';
  } //Edita o Estoque para o Produto pelo id
  deleteProdutosIdEstoque() {
    return HttpStatus.NOT_IMPLEMENTED;
  } // Deve retornar o status [501] - Not Implemented. (não se pode deletar um estoque)
}
