'use client';

import Link from "next/link";
import { usePathname } from "next/navigation";
import { BsBag } from "react-icons/bs";
import { useEffect } from "react";
import Image from "next/image";
import logo from "/public/Doccie.svg"
import "./header.css"

import { WindSong } from 'next/font/google'

const windSong = WindSong({
    weight: '400',
    subsets: ['latin'],
})

// href = página que quer enviar o usuario
// children = o conteudo mostrado para o usuario

const NavLink = ({ href, children }) => {
    const pathname = usePathname();

    const rotaAtual = pathname === href;

    return (
        <Link href={href}>
            <span className={rotaAtual ? 'nav-links active' : 'nav-links'}>{children}</span>
        </Link>
    );
};

export default function Header() {
    return (
        <header>

            <NavLink href="/">
                <div className="logo">
                    <Image
                        src={logo}
                        alt="logo"
                    />
                </div>
            </NavLink>

            <NavLink href="/">
                <button className={`logotxt ${windSong.className}`}>Dom Docciê</button>
            </NavLink>

            <NavLink href="/carrinho">
                <button className="btnbag"><BsBag /></button>
            </NavLink>
        </header>
    );
}