import React from 'react';
import Lottie from 'lottie-react-native';
import { Container } from './styles';

import SlashGif from '../../assets/json/slash-gif';

export default function SlashScreen() {
  return (
    <Container>
      <Lottie source={SlashGif} autoPlay loop resizeMode="contain" />
    </Container>
  );
}
