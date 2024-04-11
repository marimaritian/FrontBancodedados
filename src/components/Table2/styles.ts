/* eslint-disable no-nested-ternary */
import styled from 'styled-components';
import { defaultTheme } from 'styles';

interface Props {
    status: 'Pendente' | 'Normal' | 'Cotação';
}

export const Wrapper = styled.div`
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

export const LineDiv = styled.div`
    width: 100%;
    height: 0.5px;
    display: flex;
`;
