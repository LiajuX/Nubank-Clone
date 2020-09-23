import React from 'react';
import { Animated } from 'react-native';
import { PanGestureHandler, State } from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/MaterialIcons';

import Header from '~/components/Header';
import Menu from '~/components/Menu';
import Tabs from '~/components/Tabs';

import * as S from './styles';

export default function Main() {
  let offset = 0;
  const translateY = new Animated.Value(0);

  // Receives the position of the user card scroll and sends it to translateY
  const animatedEvent = Animated.event(
    [
      {
        nativeEvent: {
          translationY: translateY,
        },
      },
    ],
    { useNativeDriver: true },
  );

  function onHandlerStateChanged(event) {
    if (event.nativeEvent.oldState === State.ACTIVE) {
      let opened = false;
      const { translationY } = event.nativeEvent;

      offset += translationY;

      if (translationY >= 100) {
        opened = true;
      } else {
        translateY.setValue(offset);
        translateY.setOffset(0);
        offset = 0;
      }

      // Animation duration(which variable i want to animate)
      Animated.timing(translateY, {
        toValue: opened ? 380 : 0,
        duration: 200,
        useNativeDriver: true,
      }).start(() => {
        offset = opened ? 380 : 0;
        translateY.setOffset(offset);
        translateY.setValue(0);
      });
    }
  }

  return (
    <S.Container>
      <Header />

      <S.Content>
        <Menu translateY={translateY} />

        <PanGestureHandler
          onGestureEvent={animatedEvent}
          onHandlerStateChange={onHandlerStateChanged}
        >
          <S.Card
            style={{
              transform: [{
                translateY: translateY.interpolate({
                  inputRange: [-350, 0, 380],
                  outputRange: [-50, 0, 380],
                  extrapolate: 'clamp',
                })
              }],
            }}
          >
            <S.CardHeader>
              <Icon name="attach-money" size={28} color="#666" />
              <Icon name="visibility-off" size={28} color="#666" />
            </S.CardHeader>

            <S.CardContent>
              <S.Title>Saldo disponível</S.Title>
              <S.Description>R$ 197.611,65</S.Description>
            </S.CardContent>

            <S.CardFooter>
              <S.Annotation>
                Trasferência de R$ 20,00 recebida de Júlia Leandro de Brito hoje
                às 06:00h
              </S.Annotation>
            </S.CardFooter>
          </S.Card>
        </PanGestureHandler>
      </S.Content>

      <Tabs translateY={translateY} />
    </S.Container>
  );
}
