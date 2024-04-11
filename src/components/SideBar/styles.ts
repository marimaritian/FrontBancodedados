import styled from 'styled-components';

export interface StyleProps {
    img?: string;
    selected?: boolean;
    isOpened?: boolean;
}

export const Container = styled.div<StyleProps>`
    border-right: 1px solid #000;
    position: fixed;
    border: none;
    border-radius: 10px;
    left: 0px;
    top: 0px;
    display: flex;
    width: 18%;
    height: 100vh;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    background-color: #fafafa;
    box-shadow: 2px 0 5px rgba(0, 0, 0, 0.5);
`;

export const HeadContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 50px;
    flex-shrink: 0;
    align-self: stretch;
`;

export const LogoContainer = styled.div`
    width: 100%;
    height: 65px;
    align-items: center;
    justify-content: center;
    gap: 16px;
    background-color: #00acec;
`;

export const Logo = styled.img`
    margin: 10px 0px;
    width: 150px;
    height: 150px;
`;

export const ContainerBotoes = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 20px;
    align-self: stretch;
    width: 304px;
    @media only screen and (max-width: 760px) {
        width: 190px;
    }
`;

export const Btn = styled.div<StyleProps>`
    border-radius: 0px 80px 80px 0px;
    background-color: ${({ selected }) => (selected ? '#CA3214' : '#fff')};
    display: flex;
    width: 100%;
    padding: 0px 16px;
    align-items: center;
    gap: 18px;
    height: 56px;
    padding-right: 0px;
    cursor: pointer;
    @media only screen and (max-width: 760px) {
        height: 39px;
    }
`;

export const Icon = styled.img<StyleProps>`
    width: 40px;
    height: 40px;
`;

export const BtnText = styled.p<StyleProps>`
    font-family: 'Open Sans';
    font-size: 24px;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
    color: ${({ selected }) => (selected ? '#fff' : '#545454')};
`;

export const UserImg = styled.img`
    width: 64px;
    border-radius: 100%;
    cursor: pointer;
    @media only screen and (max-width: 760px) {
        width: 58px;
    }
`;

export const ExitImg = styled.img`
    width: 64px;
`;

export const ExitContent = styled.div`
    cursor: pointer;
    display: flex;
    gap: 8px;
`;

export const ExitText = styled.p`
    display: none;
    font-family: Nunito Regular;
    color: #000;
    font-size: 17px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
`;
