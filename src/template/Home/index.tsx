/* eslint-disable camelcase */
import { useEffect, useState } from 'react';
import axios from 'axios';
import Sidebar from 'components/SideBar';
import PartnerNameTable from 'components/PartnerNameTable';
import * as S from './styles';

export interface IUsers {
    id: number;
    firstname: string;
    lastname: string;
    location: string;
}

export interface IProdutos {
    idProduto: number;
    nome_produto: string;
    preco_por_unidade: number;
    unidadesPorCompra?: number;
}

const HomeTemplate = () => {
    const [todos, setTodos] = useState<IUsers[]>([]);
    const [produtos, setProdutos] = useState<IProdutos[]>([]);

    async function getTodos() {
        const response = await axios.get('http://localhost:3300/users');
        setTodos(response.data);
    }
    async function getProdutosByOrder() {
        const response = await axios.get('http://localhost:3300/produtos');
        setProdutos(response.data);
        console.log(produtos);
    }

    // Definindo a função assíncrona que aceita os dados do cliente como argumentos

    useEffect(() => {
        getTodos();
    }, []);
    return (
        <S.Container>
            <Sidebar menuSelected="false" />
            <S.Title>
                Esse template foi criado pela equipe de Research 21.1 para
                projetos internos da Polijunior.
            </S.Title>
            {todos &&
                todos.map((todo: IUsers) => (
                    <div>
                        <h2>
                            {todo.firstname} {todo.lastname}
                        </h2>
                        <p>Location: {todo.location}</p>
                    </div>
                ))}
            <S.Button onClick={() => getProdutosByOrder()}>
                clique para mostrar os produtos na ordem
            </S.Button>
            {produtos &&
                produtos.map((produto: IProdutos) => (
                    <PartnerNameTable
                        parameter1={produto.nome_produto}
                        parameter2={produto.preco_por_unidade}
                    />
                ))}

            <S.Title>preencha os dados do cliente</S.Title>
        </S.Container>
    );
};

export default HomeTemplate;
