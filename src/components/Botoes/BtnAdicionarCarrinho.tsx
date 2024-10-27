import { toast, Slide } from 'react-toastify';
import { CarrinhoService } from '../../services/CarrinhoService';
import { SaboresType } from '../../models/sabores';

export default function BtnAdicionarCarrinho(produto: SaboresType) {

    const carrinho = CarrinhoService.getInstance();

    const adicionarAoCarrinho = () => {
        console.log(produto)
        toast.success('Produto adicionado com sucesso!', {
            position: "top-right",
            autoClose: 1000,
            closeOnClick: true,
            draggable: true,
            progress: undefined,
            theme: "colored",
            transition: Slide,
        });

    carrinho.adicionarProduto(produto)



    }

    return (
        <>
            <button onClick={adicionarAoCarrinho} className="add_cart" style={{ backgroundColor: produto.cor_principal }}>Adicionar ao carrinho</button>
        </>
    )
}