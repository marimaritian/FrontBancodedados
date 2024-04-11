/* eslint-disable react/button-has-type */
/* eslint-disable no-shadow */
/* eslint-disable camelcase */
import { DefaultTheme } from 'styled-components';
import UserService from 'services/UserService';
import { useRouter } from 'next/router';
import { SetStateAction, useEffect, useState } from 'react';
import axios from 'axios';
import Sidebar from 'components/SideBar';
import PartnerNameTable from 'components/PartnerNameTable';
import Table2 from 'components/Table2';
import * as S from './styles';
import { Item } from '../../designSystemComponents/SimpleAccordion/styles';

const EstoqueTemplate = () => {
    const [idCliente, setIdCliente] = useState(0);
    const [cpfCliente, setcpfCliente] = useState(0);
    const [rgCliente, setRgCliente] = useState('');
    const [nomeCliente, setNomeCliente] = useState(0);
    const [emailcliente, setEmailCliente] = useState('');
    const [selectedOption, setSelectedOption] = useState('');
    const [openCreate, setOpenCreate] = useState(false);
    const [openAll, setOpenAll] = useState(true);
    const [openfuncao, setOpenFuncao] = useState(false);
    const [openLast, setOpenLast] = useState(false);
    const [item, setItem] = useState<IProduto[]>([]);
    const [item2, setItem2] = useState<IProduto2[]>([]);
    const [item3, setItem3] = useState<IProduto3[]>([]);
    const [item4, setItem4] = useState<IProduto4[]>([]);

    const handleOptionChange = (event: {
        target: { value: SetStateAction<string> };
    }) => {
        setSelectedOption(event.target.value);
    };

    const functionForOption1 = () => {
        console.log('Function for Option 1 executed');
        setOpenCreate(true);
        setOpenAll(false);
        setOpenFuncao(false);
        setOpenLast(false);
    };

    const functionForOption2 = () => {
        setOpenCreate(false);
        setOpenAll(true);
        setOpenFuncao(false);
        setOpenLast(false);
    };

    const functionForOption3 = () => {
        setOpenCreate(false);
        setOpenAll(false);
        setOpenFuncao(true);
        setOpenLast(false);
    };

    const functionForOption4 = () => {
        setOpenCreate(false);
        setOpenAll(false);
        setOpenFuncao(false);
        setOpenLast(true);
    };

    const handleButtonClick = () => {
        switch (selectedOption) {
            case 'option1':
                functionForOption1();
                break;
            case 'option2':
                functionForOption2();
                break;
            case 'option3':
                functionForOption3();
                break;
            case 'option4':
                functionForOption4();
                break;
            default:
                console.log('No option selected or unrecognized option');
        }
    };

    const router = useRouter();
    interface IProduto {
        id_produto: number;
        nome_produto: string;
        preco: number;
        unidades_por_compra: number;
    }

    interface IProduto2 {
        nome_produto: string;
        preco_por_unidade: number;
    }
    interface IProduto3 {
        nome_produto: string;
        pacotes_de_venda: number;
    }
    interface IProduto4 {
        nome_produto: string;
        valor_vendido: number;
    }

    interface RespostaServidor {
        message: string;
        // Defina outros campos que você espera na resposta, se necessário
    }

    // Definindo a função assíncrona que aceita os dados do cliente como argumentos
    async function CreateProduto(
        id_produto: number,
        nome_produto: string,
        preco: number,
        unidades_por_compra: number
    ) {
        const novoProduto: IProduto = {
            id_produto,
            nome_produto,
            preco,
            unidades_por_compra
        };
        try {
            const response = await axios.post<RespostaServidor>(
                'http://localhost:3300/createprodutos',
                novoProduto
            );
            console.log('Sucesso:', response.data.message);
        } catch (error) {
            console.log('nao foii');
            console.error('Erro:', error);
        }
    }

    async function getItems() {
        const response = await axios.get('http://localhost:3300/allprodutos');
        setItem(response.data);
    }

    async function getPacote() {
        const response = await axios.get('http://localhost:3300/pacotes-venda');
        setItem3(response.data);
    }

    async function getfuncao() {
        const response = await axios.get('http://localhost:3300/produtos');
        setItem2(response.data);
    }

    async function getLast() {
        const response = await axios.get(
            'http://localhost:3300/valor-vendido-produtos'
        );
        setItem4(response.data);
    }

    // Definindo a função assíncrona que aceita os dados do cliente como argumentos

    useEffect(() => {
        getItems();
    }, []);

    useEffect(() => {
        getfuncao();
    }, [openfuncao]);
    useEffect(() => {
        getPacote();
    }, [openCreate]);
    useEffect(() => {
        getLast();
    }, [openLast]);

    return (
        <S.Container>
            <Sidebar menuSelected="false" />{' '}
            <S.AllPage>
                {' '}
                <S.DropContainer>
                    <S.Select
                        value={selectedOption}
                        onChange={handleOptionChange}
                    >
                        <option value="">Selecione o que fazer</option>
                        <option value="option1">
                            Quantas vezes cada produto pode ser vendido
                        </option>
                        <option value="option2">
                            Mostrar todos os produtos
                        </option>
                        <option value="option3">
                            Mostrar preço por produto
                        </option>
                        <option value="option4">
                            Produtos que mais venderam
                        </option>
                    </S.Select>
                    <S.StyledButton onClick={handleButtonClick}>
                        <S.ButtonIcon
                            src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/bd/VisualEditor_-_Icon_-_Search-big_-_white.svg/1200px-VisualEditor_-_Icon_-_Search-big_-_white.svg.png"
                            alt="Icon"
                        />
                        Buscar
                    </S.StyledButton>
                </S.DropContainer>
                {openAll && (
                    <S.WrapperRegister>
                        {' '}
                        <S.Title fontsize="35px">
                            {' '}
                            Exibindo resultados para: Todos os produtos
                        </S.Title>
                        <S.Wrapper>
                            <S.Wrapper2>
                                <S.Time>Id Produto</S.Time>
                                <S.Time>Nome Produto</S.Time>
                                <S.Time>Preço</S.Time>
                                <S.Time>Unidades por compra</S.Time>
                            </S.Wrapper2>
                            {item &&
                                item.map((item: IProduto) => (
                                    <S.WrapperTable>
                                        <S.Time2>{item.id_produto}</S.Time2>
                                        <S.Time2>{item.nome_produto}</S.Time2>
                                        <S.Time2>{item.preco}</S.Time2>
                                        <S.Time2>
                                            {item.unidades_por_compra}
                                        </S.Time2>
                                    </S.WrapperTable>
                                ))}
                        </S.Wrapper>
                    </S.WrapperRegister>
                )}
                {openfuncao && (
                    <S.WrapperRegister>
                        <S.Title fontsize="35px">
                            {' '}
                            Exibindo resultados para: Preço por unidade
                        </S.Title>
                        <S.Wrapper>
                            <S.Wrapper2>
                                <S.Time>Nome Produto</S.Time>
                                <S.Time>Preço</S.Time>
                            </S.Wrapper2>
                            {item2 &&
                                item2.map((item: IProduto2) => (
                                    <S.WrapperTable>
                                        <S.Time2>{item.nome_produto}</S.Time2>
                                        <S.Time2>
                                            {item.preco_por_unidade}
                                        </S.Time2>
                                    </S.WrapperTable>
                                ))}
                        </S.Wrapper>
                    </S.WrapperRegister>
                )}
                {openCreate && (
                    <S.WrapperRegister>
                        <S.Title fontsize="35px">
                            {' '}
                            Exibindo resultados para: Quantas vezes um produto
                            pode ser vendido
                        </S.Title>
                        <S.Wrapper>
                            <S.Wrapper2>
                                <S.Time>Nome Produto</S.Time>
                                <S.Time>Pacotes de venda</S.Time>
                            </S.Wrapper2>
                            {item3 &&
                                item3.map((item: IProduto3) => (
                                    <S.WrapperTable>
                                        <S.Time2>{item.nome_produto}</S.Time2>
                                        <S.Time2>
                                            {item.pacotes_de_venda}
                                        </S.Time2>
                                    </S.WrapperTable>
                                ))}
                        </S.Wrapper>
                    </S.WrapperRegister>
                )}
                {openLast && (
                    <S.WrapperRegister>
                        <S.Title fontsize="35px">
                            {' '}
                            Exibindo resultados para: valor dos produtos
                            vendidos
                        </S.Title>
                        <S.Wrapper>
                            <S.Wrapper2>
                                <S.Time>Nome Produto</S.Time>
                                <S.Time>Pacotes de venda</S.Time>
                            </S.Wrapper2>
                            {item4 &&
                                item4.map((item: IProduto4) => (
                                    <S.WrapperTable>
                                        <S.Time2>{item.nome_produto}</S.Time2>
                                        <S.Time2>{item.valor_vendido}</S.Time2>
                                    </S.WrapperTable>
                                ))}
                        </S.Wrapper>
                    </S.WrapperRegister>
                )}
            </S.AllPage>
            {/* Envolver o conteúdo com WhiteBox */}
        </S.Container>
    );
};

export default EstoqueTemplate;
