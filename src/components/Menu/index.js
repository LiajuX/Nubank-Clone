import React from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';

import QRCodeImg from '~/assets/qrcode.png';

import * as S from './styles';

export default function Menu({ translateY }) {
  return (
    <S.Container
      style={{
        opacity: translateY.interpolate({
          inputRange: [0, 150],
          outputRange: [0, 1]
        })
      }}
    >
      <S.QRCode source={QRCodeImg} />

      <S.Nav>
        <S.NavItem>
          <Icon name="help-outline" size={20} color="#FFF" />
          <S.NavText>Me ajuda</S.NavText>
        </S.NavItem>

        <S.NavItem>
          <Icon name="person-outline" size={20} color="#FFF" />
          <S.NavText>Perfil</S.NavText>
        </S.NavItem>

        <S.NavItem>
          <Icon name="credit-card" size={20} color="#FFF" />
          <S.NavText>Configurar cartão</S.NavText>
        </S.NavItem>

        <S.NavItem>
          <Icon name="smartphone" size={20} color="#FFF" />
          <S.NavText>Configurações do app</S.NavText>
        </S.NavItem>
      </S.Nav>

      <S.SignOutButton activeOpacity={.6} onPress={() => {}}>
        <S.SignOutButtonText>SAIR DO APP</S.SignOutButtonText>
      </S.SignOutButton>
    </S.Container>
  );
}
