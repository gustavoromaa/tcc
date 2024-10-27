import { BsBag } from "react-icons/bs";
import { FaInstagram } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";


export default function Home() {
    return (
        <div>
            <header>
                <div className="navbar">
                    <div className="logo"><h1>Dom Docciê</h1></div>

                    <nav>
                        <ul className="nav-links">
                            <li><a href="/produtos">Produtos</a></li>
                            <li><a href="#">Sobre</a></li>
                        </ul>
                    </nav>

                    <a href="#"><button className="btnbag"><BsBag /></button></a>

                </div>

                <div className="parallax">

                </div>
            </header>

aaaaa

            <footer>
                <ul className="social_icon">
                    <li><a href="#"><FaInstagram/></a></li>
                    <li><a href="#"><FaFacebookF/></a></li>
                    <li><a href="#"><FaWhatsapp/></a></li>
                </ul>

                <ul className="menu">
                    <li><a href="#">Produtos</a></li>
                    <li><a href="#">Sobre</a></li>
                    <li><a href="#">Desenvolvedores</a></li>
                </ul>

                <p>&copy; 2024 Dom Docciê | Todos os direitos reservados</p>
            </footer>
        </div>
    )
}