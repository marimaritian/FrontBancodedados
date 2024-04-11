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

const EstoqueTemplate = () => {
    const [idCliente, setIdCliente] = useState(0);
    const [cpfCliente, setcpfCliente] = useState(0);
    const [rgCliente, setRgCliente] = useState(0);
    const [nomeCliente, setNomeCliente] = useState('');
    const [emailcliente, setEmailCliente] = useState('');
    const [selectedOption, setSelectedOption] = useState('');
    const [openCreate, setOpenCreate] = useState(false);
    const [openAll, setOpenAll] = useState(true);
    const [openfuncao, setOpenFuncao] = useState(false);
    const [estoque, setEstoque] = useState<IEstoque[]>([]);
    const [estoque2, setEstoque2] = useState<IEstoque2[]>([]);

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
    };

    const functionForOption2 = () => {
        setOpenCreate(false);
        setOpenAll(true);
        setOpenFuncao(false);
    };

    const functionForOption3 = () => {
        setOpenCreate(false);
        setOpenAll(false);
        setOpenFuncao(true);
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
                console.log('to na 3');
                functionForOption3();
                break;
            case 'option4':
                /* functionForOption4(); */
                break;
            default:
                console.log('No option selected or unrecognized option');
        }
    };
    const router = useRouter();

    interface ICliente {
        id_cliente: number;
        cpf: number;
        rg: number;
        nome_cliente: string;
        email: string;
    }
    interface IEstoque {
        id_produto: number;
        id_estoque: number;
        unidades_disponiveis: number;
    }
    interface IEstoque2 {
        nome_produto: string;
        unidades_minimas: number;
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

    async function getEstoque() {
        const response = await axios.get('http://localhost:3300/allestoque');
        setEstoque(response.data);
    }

    async function getEstoqueMinimo() {
        const response = await axios.get(
            'http://localhost:3300/produtos-estoque-minimo'
        );
        setEstoque2(response.data);
    }

    // Definindo a função assíncrona que aceita os dados do cliente como argumentos

    useEffect(() => {
        getEstoque();
    }, []);

    useEffect(() => {
        getEstoqueMinimo();
    }, [openfuncao]);

    return (
        <S.Container>
            <Sidebar menuSelected="false" />
            <S.AllPage>
                <S.DropContainer>
                    <S.Select
                        value={selectedOption}
                        onChange={handleOptionChange}
                    >
                        <option value="">Selecione o que fazer</option>

                        <option value="option2">
                            Mostrar todos os produtos
                        </option>
                        <option value="option3">
                            estoque com menor disponibilidade por produto
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
                            Exibindo resultados para: Todos os produtos do
                            estoque
                        </S.Title>
                        <S.Wrapper>
                            <S.Wrapper2>
                                <S.Time>Id estoque</S.Time>
                                <S.Time>Id produto</S.Time>
                                <S.Time>unidades_disponiveis</S.Time>
                            </S.Wrapper2>
                            {estoque &&
                                estoque.map((estoque: IEstoque) => (
                                    <S.WrapperTable>
                                        <S.Time2>{estoque.id_estoque}</S.Time2>
                                        <S.Time2>{estoque.id_produto}</S.Time2>
                                        <S.Time2>
                                            {estoque.unidades_disponiveis}
                                        </S.Time2>
                                    </S.WrapperTable>
                                ))}
                        </S.Wrapper>
                    </S.WrapperRegister>
                )}

                {openfuncao && (
                    <S.WrapperRegister>
                        {' '}
                        <S.Title fontsize="35px">
                            {' '}
                            Exibindo resultados para: Produtos com menor
                            disponibilidade no estoque
                        </S.Title>
                        <S.Wrapper>
                            <S.Wrapper2>
                                <S.Time>Nome do produto</S.Time>
                                <S.Time>Unidades minimas</S.Time>
                            </S.Wrapper2>
                            {estoque2 &&
                                estoque2.map((estoque: IEstoque2) => (
                                    <S.WrapperTable>
                                        <S.Time2>
                                            {estoque.nome_produto}
                                        </S.Time2>
                                        <S.Time2>
                                            {estoque.unidades_minimas}
                                        </S.Time2>
                                    </S.WrapperTable>
                                ))}
                        </S.Wrapper>
                    </S.WrapperRegister>
                )}
            </S.AllPage>
        </S.Container>
    );
};

export default EstoqueTemplate;
