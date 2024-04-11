import styled from 'styled-components';

export const Title = styled.h1`
    font-size: 2rem;
    color: black;
`;

export const Container = styled.div`
    display: flex;
    height: 100vh;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;

export const Button = styled.button`
    background-color: pink;
    border-radius: 20px;
    height: 150px;
    width: 80px;
`;

export const InfosWrapper = styled.div`
    gap: 128px;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

export const Inputs = styled.div`
    gap: 32px;
    display: flex;
    flex-direction: column;
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
    background-color: #08354c;
    width: 480px;
    height: 48px;
    border-radius: 24px;
`;

export const InputWrapper = styled.div`
    gap: 10px;
    display: flex;
    flex-direction: column;
`;

export const ButtonsWrapper = styled.div`
    gap: 14px;
    display: flex;
    flex-direction: column;
    align-items: center;
`;
