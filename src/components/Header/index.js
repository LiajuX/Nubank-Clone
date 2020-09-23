import React from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';

import logo from '~/assets/Nubank_Logo.png';

import * as S from './styles';

export default function Header() {
  return (
    <S.Container>
      <S.Top>
        <S.Logo source={logo} />

        <S.Title>Júlia</S.Title>
      </S.Top>
      <Icon name="keyboard-arrow-down" size={20} color="#FFF" />
    </S.Container>
  );
}
