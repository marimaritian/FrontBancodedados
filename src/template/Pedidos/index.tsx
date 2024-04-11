/* eslint-disable no-shadow */
/* eslint-disable camelcase */
import { DefaultTheme } from 'styled-components';
import UserService from 'services/UserService';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import axios from 'axios';
import Sidebar from 'components/SideBar';
import PartnerNameTable from 'components/PartnerNameTable';
import Table2 from 'components/Table2';
import * as S from './styles';
import { Item } from '../../designSystemComponents/SimpleAccordion/styles';

const EstoqueTemplate = () => {
    const [idCliente, setIdCliente] = useState(0);
    const [cpfCliente, setcpfCliente] = useState(0);
    const [rgCliente, setRgCliente] = useState(0);
    const [nomeCliente, setNomeCliente] = useState('');
    const [emailcliente, setEmailCliente] = useState('');

    const router = useRouter();

    interface ICliente {
        id_cliente: number;
        cpf: number;
        rg: number;
        nome_cliente: string;
        email: string;
    }
    interface IPedido {
        id_pedido: number;
        id_cliente: number;
        data_pedido: Date;
        modo_pagamento: string;
    }

    interface RespostaServidor {
        message: string;
        // Defina outros campos que você espera na resposta, se necessário
    }

    // Definindo a função assíncrona que aceita os dados do cliente como argumentos
    async function CreateClient(
        id_cliente: number,
        cpf: number,
        rg: number,
        nome_cliente: string,
        email: string
    ) {
        const novoCliente: ICliente = {
            id_cliente,
            cpf,
            rg,
            nome_cliente,
            email
        };
        try {
            const response = await axios.post<RespostaServidor>(
                'http://localhost:3300/novo-cliente',
                novoCliente
            );
            console.log('Sucesso:', response.data.message);
        } catch (error) {
            console.error('Erro:', error);
        }
    }
    const [item, setItem] = useState<IPedido[]>([]);

    async function getItems() {
        const response = await axios.get('http://localhost:3300/allpedidos');
        setItem(response.data);
    }

    // Definindo a função assíncrona que aceita os dados do cliente como argumentos

    useEffect(() => {
        getItems();
    }, []);

    return (
        <S.Container>
            <Sidebar menuSelected="false" />{' '}
            {/* Envolver o conteúdo com WhiteBox */}
            <S.Roll>
                <S.Title fontsize="35px">
                    {' '}
                    Exibindo resultados para: Todos os pedidos
                </S.Title>
                <S.Wrapper>
                    <S.Wrapper2>
                        <S.Time>Id Pedido</S.Time>
                        <S.Time>Id Cliente</S.Time>
                        <S.Time>Data</S.Time>
                        <S.Time>Modo de pagamento</S.Time>
                    </S.Wrapper2>
                    {item &&
                        item.map((item: IPedido) => (
                            <S.WrapperTable>
                                <S.Time2>{item.id_pedido}</S.Time2>
                                <S.Time2>{item.id_cliente}</S.Time2>
                                <S.Time2>{item.data_pedido}</S.Time2>
                                <S.Time2>{item.modo_pagamento}</S.Time2>
                            </S.WrapperTable>
                        ))}
                </S.Wrapper>
            </S.Roll>
        </S.Container>
    );
};

export default EstoqueTemplate;
