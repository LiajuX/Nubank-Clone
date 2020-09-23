import React from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';

import * as S from './styles';

export default function Tabs({ translateY }) {
  return (
    <S.Container
      style={{
        transform: [{
          translateY: translateY.interpolate({
            inputRange: [0, 380],
            outputRange: [0, 30],
            extrapolate: 'clamp',
          }),
        }],
        opacity: translateY.interpolate({
          inputRange: [0, 380],
          outputRange: [1, 0.3],
          extrapolate: 'clamp',
        })
      }}
    >
      <S.TabsContainer>
        <S.TabItem>
          <Icon name="person-add" size={24} color="#FFF" />
          <S.TabText>Indicar amigos</S.TabText>
        </S.TabItem>

        <S.TabItem>
          <Icon name="chat-bubble-outline" size={24} color="#FFF" />
          <S.TabText>Cobrar</S.TabText>
        </S.TabItem>

        <S.TabItem>
          <Icon name="arrow-downward" size={24} color="#FFF" />
          <S.TabText>Depositar</S.TabText>
        </S.TabItem>

        <S.TabItem>
          <Icon name="arrow-upward" size={24} color="#FFF" />
          <S.TabText>Transferir</S.TabText>
        </S.TabItem>

        <S.TabItem>
          <Icon name="lock" size={24} color="#FFF" />
          <S.TabText>Bloquear cartão</S.TabText>
        </S.TabItem>
      </S.TabsContainer>
    </S.Container>
  );
}
