import FaleConosco from "components/FaleConosco";
import { Link } from "react-router-dom";
import styles from './TodosOsProdutos.module.css'; 
import styled from 'styled-components'; 
import ProdutoCard from "components/ProdutoCard";
import { useContext } from "react";
import { ProdutoContext } from "Contextos/produtos";
import Cabecalho from "components/Cabecalho";
import Foot from "components/Rodape";


const ListaDeProdutos = styled.ul`
    padding: 0 6vw 3.625rem;
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    gap: 1.5rem;
    padding-top: 50px;
    margin-top: -2.5rem;
    background: #E5E5E5;

    li:hover {
        transform: translateY(-4px);
        cursor: pointer;
    }

 li {
    list-style: none;
 }

@media (max-width: 1100px) {
        margin-top: 0;
        padding: 2rem 1.5rem 3.625rem;
}
 
@media (min-width: 744px) {
        padding: 4rem 6rem 3rem 9rem;
}
`

export default function TodosOsProdutos(){
    const { arrayDosProdutos } = useContext(ProdutoContext);
    return(
        <>
            <Cabecalho />
            <div className={styles.TodosOsProdutos}>
                <h1>Todos os produtos</h1>
                <Link to="/cadastrarproduto" className={styles.BotaoCadastraProduto}>Adicionar Produto</Link>
            </div>

            <ListaDeProdutos>
            {arrayDosProdutos.map((produto) => (
                <li key={produto.id}>
                    <ProdutoCard produto={produto} />
                </li>
            ))}
            </ListaDeProdutos>
            <FaleConosco />
            <Foot />
        </>
       
    )
}