import styled from 'styled-components';
import { defaultTheme } from 'styles';

interface TittleProps {
    fontsize: string;
}
interface Props {
    Main?: boolean;
    filled?: boolean;

    open?: boolean;
}
export const Container = styled.div`
    display: flex;
    height: 100vh;
    width: 100vw;
    flex-direction: row;
    overflow-x: hidden;
    align-items: self-start;
    justify-content: left;
    margin-left: 100px;
    margin-top: 100px;
    margin-bottom: 100px;
`;
export const Wrapper = styled.div`
    display: flex;
    padding: 20px; /* Espaçamento interno unificado */
    margin: 40px auto; /* Centraliza horizontalmente com espaço acima e abaixo */
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    gap: 32px;
    background-color: white; /* Fundo branco */
    border-radius: 8px; /* Bordas arredondadas */
    box-shadow: 0 4px 16px rgba(0, 0, 0, 0.1); /* Sombra sutil */
    width: 1100px; /* Largura fixa - considere responsividade */
    /* height removido para permitir crescimento com o conteúdo */
`;
export const Title = styled.text<TittleProps>`
    font-family: 'Open Sans Semibold';
    font-size: ${(props) => props.fontsize};
    line-height: 150%;
`;

export const RegisterModal = styled.div`
    display: flex;
    padding: 32px;
    gap: 24px;
    width: 42%;
    flex-direction: column;
    align-items: center;
    align-self: center;
    border-radius: 16px;
    box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
`;
export const TittleDiv = styled.div`
    display: flex;
    width: 100%;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    gap: 20%;
`;
export const RegisterInput = styled.input`
    display: flex;
    width: 100%;
    padding: 12px 16px;
    align-items: center;
    text-overflow: ellipsis;
    gap: 10px;
    border-radius: 16px;
    border: 1px solid var(--gray-scale-light-03, #e6e5e5);
    outline: none;
    background-color: transparent;
    font-family: 'Open Sans';
    color: var(--gray-scale-dark-02, #6e7274);
    font-size: 16px;
    line-height: 150%;
    &::placeholder {
        font-family: 'Open Sans';
        color: var(--gray-scale-dark-02, #6e7274);
        font-size: 16px;
        line-height: 150%;
    }
`;

export const DescriptionInput = styled.textarea`
    display: flex;
    width: 100%;
    height: 180px;
    padding: 16px;
    align-items: center;
    gap: 10px;
    border-radius: 16px;
    border: 1px solid var(--gray-scale-light-03, #e6e5e5);
    outline: none;
    background-color: transparent;
    font-family: 'Open Sans';
    color: var(--gray-scale-dark-02, #6e7274);
    font-size: 16px;
    line-height: 150%;
    word-wrap: break-word;
    text-overflow: ellipsis;
    &::placeholder {
        font-family: 'Open Sans';
        color: var(--gray-scale-dark-02, #6e7274);
        font-size: 16px;
        line-height: 150%;
        word-wrap: break-word;
    }
`;
export const InputWrapper = styled.div`
    display: flex;
    width: 100%;
    flex-direction: column;
    align-items: flex-start;
    font-family: 'Open Sans Semibold';
    font-size: 18px;
    line-height: 150%;
    gap: 8px;
`;
export const Icon = styled.img`
    width: 24px;
    height: 24px;
`;

export const LineDiv = styled.div`
    width: 100%;
    height: 1px;
    display: flex;
`;
export const CircleButton = styled.button<Props>`
    border-radius: 12px;
    border: 0.857px solid ${defaultTheme.colors.secondary.main};
    background-color: ${({ filled }) =>
        filled ? defaultTheme.colors.secondary.main : 'transparent'};
    outline: transparent;
    width: 16px;
    height: 16px;
`;
export const Option = styled.div`
    display: flex;
    align-items: center;
    gap: 8px;
    flex-direction: row;
`;

export const OptionBox = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    gap: 8px;
    align-self: stretch;
    font-family: 'Open Sans';
    font-size: 14px;
    line-height: 150%;
`;

export const InputName = styled.p`
    color: #ffffff;
    padding-left: 10px;
    font-family: 'Poppins';
    font-style: normal;
    font-weight: 400;
    font-size: 20px;
    line-height: 24px;
    text-align: justify;
    letter-spacing: 0.5px;
`;

export const InputGap = styled.input`
    display: flex;
    align-items: center;
    flex-direction: row;
    justify-content: center;
    border: none;
    box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
    width: 480px;
    height: 48px;
    border-radius: 24px;
`;

export const EnterButton = styled.button`
    display: flex;
    align-items: center;
    flex-direction: row;
    justify-content: center;
    width: 480px;
    height: 48px;
    border-radius: 16px;
    background: #2ec8ee;
    padding: 16px 32px;
    cursor: pointer;
`;

export const EnterText = styled.p`
    color: #ffffff;
    padding-left: 10px;
    font-family: 'Poppins Semibold';
    font-style: normal;
    font-weight: 700;
    font-size: 20px;
    line-height: 24px;
    text-align: justify;
    letter-spacing: 1.25px;
    text-transform: uppercase;
`;

export const Wrapper2 = styled.div`
    width: 1000px;
    height: 80px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    border-bottom: solid 1px black;
    border: 2px solid #000; /* Define uma borda sólida */
    border-radius: 10px; /* Arredonda as bordas */
    /* Outras propriedades de estilização */
    padding: 10px; /* Espaçamento interno para afastar o conteúdo da borda */
    margin: 10px; /* Espaçamento externo */
    display: flex; /* Exemplo: alinha os itens horizontalmente */
    justify-content: space-around; /* Exemplo: distribui o espaço entre os itens */
`;
export const WrapperRegister = styled.div`
    display: flex;
    width: 100%;
    height: 100vh;
    padding: 64px 24px;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    gap: 32px;
    align-self: stretch;
    background-color: transparent;
    display: flex;
`;
export const WrapperTable = styled.div`
    width: 1000px;
    height: 80px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    border-bottom: solid 1px black;
`;

export const Time2 = styled.div`
    font-family: 'Open Sans Semibold';
    font-size: 18px;
    text-align: center;
    width: 200px;
    font-weight: 600;
`;

export const Name = styled.div`
    font-family: 'Open Sans', sans-serif;
    font-size: 18px;
    line-height: 24px;
    font-weight: 600;
    text-align: center;
    width: 200px;
`;

export const Time = styled.div`
    font-family: 'Open Sans Semibold';
    font-size: 18px;
    text-align: center;
    width: 200px;
    line-height: 24px;
    font-weight: 600;
`;

export const StatusDiv = styled.div<Props>`
    width: 116px;
    height: 40px;
    border-radius: 28px;
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const StatusText = styled.text<Props>`
    font-size: 16px;
    font-weight: 600;
    font-family: 'Open Sans', sans-serif;
`;

export const WhiteBox = styled.div`
    background-color: white; /* Define o fundo branco */
    border-radius: 8px; /* Bordas arredondadas */
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1); /* Sombra sutil para profundidade */
    padding: 20px; /* Espaçamento interno para afastar o conteúdo das bordas */
    margin: 20px auto; /* Margem para centralizar e dar espaço ao redor */
    width: 1100px; /* Ajusta a largura para ser responsiva até a largura máxima */
    height: 100%;
`;

export const VisualizeButton = styled.div`
    width: 160px;
    height: 48px;
    font-family: 'Open Sans Semibold';
    border-radius: 16px;
    line-height: 24px;
    background-color: ${defaultTheme.colors.secondary.main};
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 16px;
    :hover {
        transition: 0.3s;
        transform: scale(1.05);
        cursor: pointer;
    }
`;

export const Select = styled.select`
    position: absolute;

    z-index: 10; // assegura que vai ficar acima do Wrapper
    width: 800px; /* Torna o dropdown tão largo quanto o seu contêiner */
    padding: 0.5em 1em; /* Adiciona algum espaço interno */
    height: 40px;
    border-radius: 20px; /* Bordas arredondadas */
    border: 1px solid #ccc; /* Adiciona uma borda */
    font-size: 15px; /* Aumenta o tamanho da fonte */
    cursor: pointer; /* Muda o cursor para indicar que é um elemento interativo */
    gap: 20px;
    &:focus {
        outline: none; /* Remove o contorno padrão em foco */
    }
`;

// Styled button
export const StyledButton = styled.button`
    padding: 0.5em 1em; /* Adiciona algum espaço interno */
    border-radius: 20px; /* Bordas arredondadas */
    border: none; /* Remove a borda padrão */
    background-color: #ca3214; /* Cor de fundo */
    color: white; /* Cor da fonte */
    font-size: 15px; /* Tamanho da fonte */
    font-weight: 20px;
    margin-left: 850px;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 3px;
    cursor: pointer; /* Muda o cursor para indicar que é um elemento interativo */
    margin-top: 10px; /* Adiciona margem acima do botão */

    &:hover {
        background-color: #7f2315; /* Escurece o botão ao passar o mouse */
    }
`;

export const ButtonIcon = styled.img`
    margin-right: 8px;
    width: 20px; // Exemplo de largura
    height: 20px; // Exemplo de altura
`;
export const AllPage = styled.div`
    display: flex;
    flex-direction: column;
    margin-left: 350px;
`;

export const DropContainer = styled.div`
    position: relative;
    margin-left: 60px;
`;
