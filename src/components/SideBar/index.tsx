import React, { useState } from 'react';
import router from 'next/router';
import * as S from './styles';
import UserAddIcon from './User_Add.png';

type Props = S.StyleProps & {
    menuSelected: string;
};

const Sidebar: React.FC<Props> = ({ menuSelected }) => {
    const [menu, setMenu] = useState<string>(menuSelected);

    return (
        <S.Container>
            <S.HeadContainer>
                <S.Logo src="https://www.designevo.com/res/templates/thumb_small/red-circle-and-white-shopping-cart.webp" />

                <S.ContainerBotoes>
                    <S.Btn
                        selected={menu === 'cadUser'}
                        onClick={() => {
                            setMenu('cadUser');
                            router.push('/Register');
                        }}
                    >
                        <S.Icon src="https://cdn-icons-png.flaticon.com/512/359/359657.png" />

                        <S.BtnText selected={menu === 'cadUser'}>
                            Cadastrar Cliente
                        </S.BtnText>
                    </S.Btn>
                    <S.Btn
                        selected={menu === 'modules'}
                        onClick={() => {
                            setMenu('modules');
                            router.push('/Pedidos');
                        }}
                    >
                        <S.Icon src="https://cdn-icons-png.flaticon.com/512/30/30412.png" />
                        <S.BtnText selected={menu === 'modules'}>
                            Dados dos pedidos
                        </S.BtnText>
                    </S.Btn>
                    <S.Btn
                        selected={menu === 'notifs'}
                        onClick={() => {
                            setMenu('notifs');
                            router.push('/Items');
                        }}
                    >
                        <S.Icon src="https://w7.pngwing.com/pngs/809/244/png-transparent-computer-icons-new-items-text-rectangle-share-icon.png" />
                        <S.BtnText selected={menu === 'notifs'}>
                            Dados dos items
                        </S.BtnText>
                    </S.Btn>
                    <S.Btn
                        selected={menu === 'msgs'}
                        onClick={() => {
                            setMenu('msgs');
                            router.push('/Produtos');
                        }}
                    >
                        <S.Icon src="https://cdn-icons-png.flaticon.com/512/1783/1783976.png" />
                        <S.BtnText selected={menu === 'msgs'}>
                            Dados dos Produtos
                        </S.BtnText>
                    </S.Btn>
                    <S.Btn
                        selected={menu === 'cadComunicados'}
                        onClick={() => {
                            setMenu('saves');
                            router.push('/Estoque');
                        }}
                    >
                        <S.Icon src="https://cdn-icons-png.flaticon.com/512/2652/2652218.png" />
                        <S.BtnText selected={menu === 'cadComunicados'}>
                            Dados do Estoque
                        </S.BtnText>
                    </S.Btn>
                </S.ContainerBotoes>
            </S.HeadContainer>
        </S.Container>
    );
};

export default Sidebar;
