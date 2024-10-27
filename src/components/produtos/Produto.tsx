import "./Produto.css"

import Image from "next/image";
import BtnAdicionarCarrinho from "../Botoes/BtnAdicionarCarrinho";

import { Yrsa } from 'next/font/google'
import { Alata } from 'next/font/google'
import localFont from 'next/font/local'
import { SaboresType } from "../../models/sabores";

const sagona = localFont({
  src: [
    {
      path: '../../app/fonts/SAGONABOOK.ttf',
      weight: '400',
      style: 'normal',
    },
  ],
});

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

export default function Produto({id, nome, descricao, valor, cor_principal, imagem, alt}: SaboresType) {
  const produto = {id, nome, descricao, valor, cor_principal, imagem, alt}

    return (
        <div className="card" data-id={produto.id}>
            <Image
              src={`/produtos/${produto.imagem}.png`}
              alt={`${produto.alt}`} 
              width={100}
              height={100}
              />

            <div className="card_links">
              <h1 className={`titulo ${sagona.className}`}>{produto.nome}</h1>
              <h2 className="card_produto_descricao">{produto.descricao}</h2>
            </div>

            <BtnAdicionarCarrinho  {...produto}/>
          </div>
    )
}