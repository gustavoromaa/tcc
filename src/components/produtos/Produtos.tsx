import ContainerProdutos from "./ContainerProduto"
import cardapio from "../../../cardapio.json"
import { ProdutoType } from "../../models/produto";


export default function Produtos() {

    const produtos = cardapio.produtos;

    return (
        <div>
            {
                Object.keys(produtos).map((key, index) => {
                    const produto = produtos[key] as ProdutoType
                    return (
                        <ContainerProdutos
                            key={index}
                            titulo={produto.titulo}
                            sabores={produto.sabores}
                            cor_principal={produto.cor_principal}
                        />
                    );
                })
            }
        </div>
    )
}
