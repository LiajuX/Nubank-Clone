import { Animated, StyleSheet } from 'react-native';
import styled from 'styled-components/native';

export const Container = styled(Animated.ScrollView)`
  margin: 0 30px;
`;

export const QRCode = styled.Image`
  width: 100px;
  height: 100px;
  background: #fff;
  padding: 10px;
  align-self: center;
`;

export const Nav = styled.View`
  margin-top: 25px;
  border-top-width: ${StyleSheet.hairlineWidth}px;
  border-top-color: rgba(255, 255, 255, 0.8);
`;

export const NavItem = styled.View`
  flex-direction: row;
  align-items: center;
  padding: 12px 0;
  border-bottom-width: ${StyleSheet.hairlineWidth}px;
  border-bottom-color: rgba(255, 255, 255, 0.8);
`;

export const NavText = styled.Text`
  margin-left: 20px;
  color: #fff;
  font-size: 15px;
`;

export const SignOutButton = styled.TouchableOpacity`
  justify-content: center;
  align-items: center;
  margin-top: 15px;
  padding: 12px;
  border-width: ${StyleSheet.hairlineWidth}px;
  border-color: rgba(255, 255, 255, 0.8);
  border-radius: 4px;
`;

export const SignOutButtonText = styled.Text`
  color: #fff;
  font-size: 13px;
  font-weight: bold;
`;
