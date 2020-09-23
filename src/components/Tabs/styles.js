import { Animated } from 'react-native';
import styled from 'styled-components/native';

export const Container = styled(Animated.View)`
  height: 100px;
  margin-top: 20px;
`;

export const TabsContainer = styled.ScrollView.attrs({
  horizontal: true,
  showsHorizontalScrollIndicator: false,
  contenContainerStyle: {paddingLeft: 10, paddingRight: 20},
})``;

export const TabItem = styled.View`
  justify-content: space-between;
  width: 100px;
  height: 100px;
  margin-left: 10px;
  padding: 10px;
  border-radius: 3px;
  background-color: rgba(255, 255, 255, 0.2);
`;

export const TabText = styled.Text`
  color: #fff;
  font-size: 13px;
`;
