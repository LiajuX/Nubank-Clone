import { Animated } from 'react-native';
import styled from 'styled-components/native';
import { getStatusBarHeight } from 'react-native-iphone-x-helper';

export const Container = styled.View`
  flex: 1;
  justify-content: center;
  padding-top: ${getStatusBarHeight()}px;
  background-color: #8b10ae;
`;

export const Content = styled.View`
  flex: 1;
  max-height: 400px;
  z-index: 5;
`;

export const Card = styled(Animated.View)`
  position: absolute;
  top: 0;
  right: 0;
  left: 0;
  flex: 1;
  height: 100%;
  margin: 0 20px;
  border-radius: 4px;
  background-color: #fff;
`;

export const CardHeader = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 30px;
`;

export const CardContent = styled.View`
  flex: 1;
  justify-content: center;
  padding: 0 30px;
`;

export const Title = styled.Text`
  color: #999;
  font-size: 13px;
`;

export const Description = styled.Text`
  margin-top: 3px;
  color: #333;
  font-size: 32px;
`;

export const CardFooter = styled.View`
  padding: 30px;
  border-radius: 4px;
  background-color: #eee;
`;

export const Annotation = styled.Text`
  color: #333;
  font-size: 12px;
`;
