/* eslint-disable react/button-has-type */
/* eslint-disable no-shadow */
/* eslint-disable camelcase */

import { SetStateAction, useEffect, useState } from 'react';
import axios from 'axios';
import Sidebar from 'components/SideBar';
import PartnerNameTable from 'components/PartnerNameTable';
import Table2 from 'components/Table2';
import * as S from './styles';
import { Item } from '../../designSystemComponents/SimpleAccordion/styles';

const RegisterTemplate = () => {
    const [selectedOption, setSelectedOption] = useState('');
    const [openPix, setOpenPix] = useState(false);
    const [openAll, setOpenAll] = useState(true);
    const [openfuncao, setOpenFuncao] = useState(false);
    const [openLast, setOpenLast] = useState(false);
    const [opencliente, setOpenCliente] = useState(false);
    const [sucesso, setSucesso] = useState(false);
    const [item, setItem] = useState<ICliente[]>([]);
    const [item2, setItem2] = useState<IProduto2[]>([]);
    const [item3, setItem3] = useState<IProduto3[]>([]);
    const [item4, setItem4] = useState<IProduto4[]>([]);
    const [idCliente2, setIdCliente2] = useState(0);
    const [cpfCliente2, setcpfCliente2] = useState(0);
    const [rgCliente2, setRgCliente2] = useState(0);
    const [nomeCliente2, setNomeCliente2] = useState('');
    const [emailcliente2, setEmailCliente2] = useState('');

    interface ICliente {
        id_cliente: number;
        cpf: number;
        rg: number;
        nome_cliente: string;
        email: string;
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

    const handleOptionChange = (event: {
        target: { value: SetStateAction<string> };
    }) => {
        setSelectedOption(event.target.value);
    };

    const functionForOption1 = () => {
        console.log('Function for Option 1 executed');
        setOpenPix(true);
        setOpenAll(false);
        setOpenFuncao(false);
        setOpenLast(false);
        setOpenCliente(false);
    };

    const functionForOption2 = () => {
        setOpenPix(false);
        setOpenAll(true);
        setOpenFuncao(false);
        setOpenLast(false);
        setOpenCliente(false);
    };

    const functionForOption3 = () => {
        setOpenPix(false);
        setOpenAll(false);
        setOpenFuncao(false);
        setOpenLast(true);
        setOpenCliente(false);
    };

    const functionForOption4 = () => {
        setOpenPix(false);
        setOpenAll(false);
        setOpenFuncao(false);
        setOpenLast(false);
        setOpenCliente(true);
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
        nome_cliente: string;
        nome_produto: string;
        data_pedido: Date;
    }
    interface IProduto4 {
        nome_cliente: string;
        valor_gasto: number;
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

    async function getAllClientes() {
        const response = await axios.get('http://localhost:3300/allclientes');
        setItem(response.data);
    }

    async function getPagamentoPix() {
        const response = await axios.get('http://localhost:3300/pedidos-pix');
        setItem3(response.data);
    }

    async function getLast() {
        const response = await axios.get(
            'http://localhost:3300/clientes-mais-valiosos'
        );
        setItem4(response.data);
    }

    // Definindo a função assíncrona que aceita os dados do cliente como argumentos

    useEffect(() => {
        getAllClientes();
    }, []);

    useEffect(() => {
        getPagamentoPix();
    }, [openPix]);
    useEffect(() => {
        getLast();
    }, [openLast]);

    return (
        <S.Container>
            <Sidebar menuSelected="false" />{' '}
            <S.AllPage>
                {' '}
                <S.DropContainer>
                    {' '}
                    <S.Select
                        value={selectedOption}
                        onChange={handleOptionChange}
                    >
                        <option value="">Selecione o que fazer</option>
                        <option value="option1">
                            Clientes que pagaram com Pix
                        </option>
                        <option value="option2">
                            Mostrar todos os clientes
                        </option>
                        <option value="option3">
                            Clientes que mais compraram
                        </option>

                        <option value="option4">Cadastrar Cliente</option>
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
                            Exibindo resultados para: Todos os clientes
                        </S.Title>
                        <S.Wrapper>
                            <S.Wrapper2>
                                <S.Time>Id Cliente</S.Time>
                                <S.Time>CPF</S.Time>
                                <S.Time>RG</S.Time>
                                <S.Time>Nome Cliente</S.Time>
                                <S.Time>Email</S.Time>
                            </S.Wrapper2>
                            {item &&
                                item.map((item: ICliente) => (
                                    <S.WrapperTable>
                                        <S.Time2>{item.id_cliente}</S.Time2>
                                        <S.Time2>{item.cpf}</S.Time2>
                                        <S.Time2>{item.rg}</S.Time2>
                                        <S.Time2>{item.nome_cliente}</S.Time2>
                                        <S.Time2>{item.email}</S.Time2>
                                    </S.WrapperTable>
                                ))}
                        </S.Wrapper>
                    </S.WrapperRegister>
                )}
                {openPix && (
                    <S.WrapperRegister>
                        {' '}
                        <S.Title fontsize="35px">
                            {' '}
                            Exibindo resultados para: Clientes que pagaram com
                            Pix{' '}
                        </S.Title>
                        <S.Wrapper>
                            <S.Wrapper2>
                                <S.Time>Nome Cliente</S.Time>
                                <S.Time>Nome Produto</S.Time>
                                <S.Time>Data do pedido</S.Time>
                            </S.Wrapper2>
                            {item3 &&
                                item3.map((item: IProduto3) => (
                                    <S.WrapperTable>
                                        <S.Time2>{item.nome_cliente}</S.Time2>
                                        <S.Time2>{item.nome_produto}</S.Time2>
                                        <S.Time2>{item.data_pedido}</S.Time2>
                                    </S.WrapperTable>
                                ))}
                        </S.Wrapper>
                    </S.WrapperRegister>
                )}
                {openLast && (
                    <S.WrapperRegister>
                        {' '}
                        <S.Title fontsize="35px">
                            {' '}
                            Exibindo resultados para: Clientes que mais gastaram{' '}
                        </S.Title>
                        <S.Wrapper>
                            <S.Wrapper2>
                                <S.Time>Nome cliente</S.Time>
                                <S.Time>Valor gasto</S.Time>
                            </S.Wrapper2>
                            {item4 &&
                                item4.map((item: IProduto4) => (
                                    <S.WrapperTable>
                                        <S.Time2>{item.nome_cliente}</S.Time2>
                                        <S.Time2>{item.valor_gasto}</S.Time2>
                                    </S.WrapperTable>
                                ))}
                        </S.Wrapper>
                    </S.WrapperRegister>
                )}
                {opencliente && (
                    <S.WrapperRegister>
                        <S.Title fontsize="40px"> Cadastrar Cliente </S.Title>
                        <S.Wrapper3>
                            <S.InputWrapper>
                                <S.Title fontsize="22px">Digite o ID</S.Title>

                                <S.InputName>Digite o ID</S.InputName>
                                <S.InputGap
                                    placeholder="  Digite seu id"
                                    onChange={(e) =>
                                        setIdCliente2(Number(e.target.value))
                                    }
                                />
                            </S.InputWrapper>
                            <S.InputWrapper>
                                <S.Title fontsize="22px">Digite o CPF</S.Title>

                                <S.InputName>Digite o CPF</S.InputName>
                                <S.InputGap
                                    placeholder="  Digite seu CPF"
                                    onChange={(e) =>
                                        setcpfCliente2(Number(e.target.value))
                                    }
                                />
                            </S.InputWrapper>
                            <S.InputWrapper>
                                <S.Title fontsize="22px">Digite o RG</S.Title>

                                <S.InputName>RG</S.InputName>
                                <S.InputGap
                                    placeholder="  Digite seu RG"
                                    onChange={(e) =>
                                        setRgCliente2(Number(e.target.value))
                                    }
                                />
                            </S.InputWrapper>
                            <S.InputWrapper>
                                <S.Title fontsize="22px">Digite o Nome</S.Title>

                                <S.InputName>Nome</S.InputName>
                                <S.InputGap
                                    placeholder="  Digite seu nome"
                                    onChange={(e) =>
                                        setNomeCliente2(e.target.value)
                                    }
                                />
                            </S.InputWrapper>
                            <S.InputWrapper>
                                <S.Title fontsize="22px">
                                    Digite o Email
                                </S.Title>

                                <S.InputName>email</S.InputName>
                                <S.InputGap
                                    placeholder="  Digite seu email"
                                    onChange={(e) =>
                                        setEmailCliente2(e.target.value)
                                    }
                                />
                            </S.InputWrapper>
                            <S.EnterButton
                                onClick={() => {
                                    CreateClient(
                                        idCliente2,
                                        cpfCliente2,
                                        rgCliente2,
                                        nomeCliente2,
                                        emailcliente2
                                    );
                                }}
                            >
                                <S.EnterText>ENTRAR</S.EnterText>
                            </S.EnterButton>
                        </S.Wrapper3>
                    </S.WrapperRegister>
                )}
            </S.AllPage>
            {/* Envolver o conteúdo com WhiteBox */}
        </S.Container>
    );
};

export default RegisterTemplate;
