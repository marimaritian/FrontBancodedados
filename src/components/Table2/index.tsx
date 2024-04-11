import React, { useState } from 'react';
import User from 'interfaces/User';
import * as S from './styles';

interface Props {
    parameter1: number;
    parameter2: number;
    parameter3: number;
}
const PartnerNameTable: React.FC<Props> = ({
    parameter1,
    parameter2,
    parameter3
}) => {
    const [modalVisible, setModalVisible] = useState(false);
    // Considerar seriamente se é melhor passar uma prop externa e ter o modal na pagina
    const [editModalVisible, setEditModalVisible] = useState(false);

    const onEditChoose = () => {
        setModalVisible(false);
        setEditModalVisible(true);
    };

    return (
        <S.Wrapper>
            <S.Time>{parameter1}</S.Time>
            <S.Time>{parameter2}</S.Time>
            <S.VisualizeButton onClick={() => setModalVisible(!modalVisible)}>
                {parameter3}
            </S.VisualizeButton>
        </S.Wrapper>
    );
};
export default PartnerNameTable;
