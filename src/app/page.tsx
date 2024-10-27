'use client'

import { useEffect } from 'react';
import { ToastContainer, Bounce } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import Footer from "../components/footer/Footer";
import Header from "../components/header/Header";
import Produto from "../components/produtos/Produto";
import Produtos from "../components/produtos/Produtos";
import ContainerProdutos from '../components/produtos/ContainerProduto';
import Image from "next/image";
import logoSlogan from "/public/doccieslogan.svg"
import cardapio from "./../../cardapio.json"

import { Yrsa } from 'next/font/google'
import { Alata } from 'next/font/google'
import localFont from 'next/font/local'

const schibstedGrotesk = Yrsa({
  weight: ['400', '700'],
  style: ['normal', 'italic'],
  subsets: ['latin'],
  display: 'swap',
})

const alata = Alata({
  weight: ['400'],
  style: ['normal'],
  subsets: ['latin'],
})

export default function Home() {
  return (
    <div>
      <div className="parallax"></div>

      <Header />

      <div className={`slogan ${schibstedGrotesk.className}`}>
        <Image
          src={logoSlogan}
          alt="logo" />

        <p>
          Doces Momentos para
          <span className={`bananaspan ${schibstedGrotesk.className}`}> Compartilhar</span>
        </p>
      </div>

      <div className="cards">
        <Produtos/>
      </div>

      <Footer />
      
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop
        stacked
        closeOnClick
        rtl={false}
        draggable
        theme="colored"
        transition={Bounce}
        />
    </div>
  );
}