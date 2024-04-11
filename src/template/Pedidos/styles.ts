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

export const WrapperTable = styled.div`
    width: 1000px;
    height: 80px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    border-bottom: solid 1px black;
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

export const Time2 = styled.div`
    font-family: 'Open Sans Semibold';
    font-size: 18px;
    text-align: center;
    width: 200px;
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
export const Roll = styled.div`
    display: flex;
    flex-direction: column;
    margin-left: 400px;
`;
