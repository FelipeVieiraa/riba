import React, { useState } from 'react';
import { useNavigation } from '@react-navigation/native';

import Icon from 'react-native-vector-icons/Feather';

import {
  Container,
  Content,
  AreaInput,
  Input,
  SubmitButton,
  SubmitText,
  Link,
  LinkText,
  AreaLink,
} from './styles';

export default function SignIn() {
  const navigation = useNavigation();

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [cpf, setCpf] = useState('');
  const [password, setPassword] = useState('');
  const [passwordConfirm, setPasswordConfirm] = useState('');

  function handleRegister() {}

  return (
    <Container>
      <Content>
        <AreaLink>
          <Link onPress={() => navigation.navigate('Login')}>
            <Icon name="log-in" size={22} color="#FFF" />
            <LinkText>Já possuo uma conta cadastrada.</LinkText>
          </Link>
        </AreaLink>

        <AreaInput>
          <Input
            placeholder="Nome completo"
            autoCorrect={false}
            autoCapitalize="words"
            value={name}
            onChangeText={(text) => setName(text)}
          />
        </AreaInput>

        <AreaInput>
          <Input
            placeholder="Email"
            autoCorrect={false}
            autoCapitalize="none"
            value={email}
            onChangeText={(text) => setEmail(text)}
          />
        </AreaInput>

        <AreaInput>
          <Input
            placeholder="CPF"
            keyboardType="numeric"
            value={cpf}
            onChangeText={(text) => setCpf(text)}
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

        <AreaInput>
          <Input
            placeholder="Confirmação de senha"
            autoCorrect={false}
            autoCapitalize="none"
            value={passwordConfirm}
            onChangeText={(text) => setPasswordConfirm(text)}
            secureTextEntry={true}
          />
        </AreaInput>

        <SubmitButton onPress={handleRegister}>
          <SubmitText>Cadastrar</SubmitText>
        </SubmitButton>
      </Content>
    </Container>
  );
}
