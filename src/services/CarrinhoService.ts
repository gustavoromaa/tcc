import { CarrinhoType } from "../models/carrinho";
import { ProdutoType } from "../models/produto";
import { SaboresType } from "../models/sabores";

const CARRINHO_STORAGE_KEY = 'carrinho';

export class CarrinhoService {
    private carrinho: CarrinhoType;
    private static instance: CarrinhoService;
  
    private constructor() {
      this.carrinho = this.carregarCarrinho();
    }
  
    public static getInstance(): CarrinhoService {
      if (!CarrinhoService.instance) {
        CarrinhoService.instance = new CarrinhoService();
      }
      return CarrinhoService.instance;
    }
  
    private salvarCarrinho(): void {
      localStorage.setItem(CARRINHO_STORAGE_KEY, JSON.stringify(this.carrinho));
    }
  
    private carregarCarrinho(): CarrinhoType {
      const carrinhoJson = localStorage.getItem(CARRINHO_STORAGE_KEY);
      return carrinhoJson ? JSON.parse(carrinhoJson) : { produtos: [] };
    }
  
    adicionarProduto(produto: SaboresType): void {
      this.carrinho.produtos.push(produto);
      this.salvarCarrinho();
    }
  
    removerProduto(produto: SaboresType): void;
    removerProduto(produtoId: number): void;
    removerProduto(produtoOrId: SaboresType | number): void {
      if (typeof produtoOrId === 'number') {
        this.carrinho.produtos = this.carrinho.produtos.filter(p => p.id !== produtoOrId);
      } else {
        this.carrinho.produtos = this.carrinho.produtos.filter(p => p.id !== produtoOrId.id);
      }
      this.salvarCarrinho();
    }
  
    listarProdutos(): SaboresType[] {
      return this.carrinho.produtos;
    }
  
    limparCarrinho(): void {
      this.carrinho.produtos = [];
      this.salvarCarrinho();
    }
  }