'use client'

import { CarrinhoService } from '../../services/CarrinhoService';
import { useEffect } from 'react';
import Footer from "../../components/footer/Footer";
import Header from "../../components/header/Header";

export default function Carrinho() {

    useEffect(() => {
        const carrinho = CarrinhoService.getInstance();
        console.log('Carrinho:', carrinho.listarProdutos());
      }, []);

    return(
        <div className="banana">
            <div className="parallaxcart"></div>
            <Header/>
            <main></main>
            <Footer/>
            </div>
        
    )
}