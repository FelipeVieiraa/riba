import React, { useState, useContext } from 'react';
import { AuthContext } from '../../contexts/auth';

import { useNavigation } from '@react-navigation/native';

import {
  Container,
  Content,
  Logo,
  AreaInput,
  Input,
  SubmitButton,
  SubmitText,
  Link,
  LinkText,
  TextLogo,
  TextLogoLeft,
} from './styles';

export default function SignIn() {
  const navigation = useNavigation();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { signIn, signed } = useContext(AuthContext);

  function handleLogin() {
    signIn(email, password);
  }

  return (
    <Container>
      <Content>
        <Logo source={require('../../assets/logo.png')} />
        <TextLogo>Temporada</TextLogo>
        <TextLogoLeft>na Riba</TextLogoLeft>

        <AreaInput>
          <Input
            placeholder="E-mail"
            autoCorrect={false}
            autoCapitalize="none"
            value={email}
            onChangeText={(text) => setEmail(text)}
          />
        </AreaInput>

        <AreaInput>
          <Input
            placeholder="Senha"
            autoCorrect={false}
            autoCapitalize="none"
            value={password}
            onChangeText={(text) => setPassword(text)}
            secureTextEntry={true}
          />
        </AreaInput>

        <SubmitButton onPress={handleLogin}>
          <SubmitText>Login</SubmitText>
        </SubmitButton>

        <Link onPress={() => navigation.navigate('Register')}>
          <LinkText>Ainda não possui uma conta?</LinkText>
        </Link>
      </Content>
    </Container>
  );
}
