import { Controller, Get, Post, Delete, Patch } from '@nestjs/common';
import { AppService } from './app.service';
//endpoints
@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Get('/test')
  getTest() {
    return this.appService.getTest();
  }

  //Lista de Controlers da Categoria
  @Get('/categorias')
  getCategorias() {
    return this.appService.getCategorias();
  }
  @Get('/categorias/:id')
  getCategoriasId() {
    return this.appService.getCategoriasId();
  }
  @Post('/categorias/:id')
  postCategorias() {
    return this.appService.postCategorias();
  }
  @Patch('/categorias/:id')
  patchCategorias() {
    return this.appService.patchCategorias();
  }
  @Delete('/categorias/:id')
  deleteCategories() {
    return this.appService.deleteCategorias();
  }

  //Lista de Controlers da Produtos
  @Get('/produtos')
  getProdutos() {
    return this.appService.getProdutos();
  }
  @Get('/produtos/:id')
  getProdutosID() {
    return this.appService.getProdutosId();
  }
  @Post('/produtos/:id')
  postProdutos() {
    return this.appService.postProdutos();
  }
  @Patch('/produtos/:id')
  patchProdutos() {
    return this.appService.patchProdutos();
  }
  @Delete('/produtos/:id')
  deleteProdutos() {
    return this.appService.deleteProdutos();
  }

  //lista de Itens a serem implementadas na tabela ESTOQUE
  @Get('/produtos/:id/estoque')
  getProdutosIDEstoque() {
    return this.appService.getProdutosIdEsqotue();
  }
  @Patch('/produtos/:id/estoque')
  patchProdutosEstoque() {
    return this.appService.patchProdutosIdEstoque();
  }
  @Delete('/produtos/:id/estoque')
  deleteProdutosEstoque() {
    return this.appService.deleteProdutosIdEstoque();
  }
}
