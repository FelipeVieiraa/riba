import styled from 'styled-components';

export const Container = styled.View`
  flex: 1;
  background-color: #ff8484;
`;

export const Content = styled.KeyboardAvoidingView`
  flex: 1;
  align-items: center;
  justify-content: center;
`;

export const Logo = styled.Image`
  margin-top: -80px;
`;

export const TextLogo = styled.Text`
  color: #fff;
  font-size: 35px;
  font-family: 'Lobster-Regular';
  text-align: left;
  width: 50%;
  margin: -15px auto;
`;

export const TextLogoLeft = styled.Text`
  margin: -2px 0px 15px 0px;
  color: #fff;
  font-size: 35px;
  font-family: 'Lobster-Regular';
  text-align: right;
  width: 50%;
`;

export const AreaInput = styled.View`
  flex-direction: row;
`;

export const Input = styled.TextInput.attrs({
  placeholderTextColor: '#0015',
})`
  background-color: #fff;
  width: 90%;
  height: 50px;
  font-size: 18px;
  color: #000;
  margin-bottom: 15px;
  padding: 10px;
  border-radius: 4px;
  font-family: 'Roboto-Regular';
`;

export const SubmitButton = styled.TouchableOpacity`
  align-items: center;
  justify-content: center;
  background-color: #5c322f;
  width: 200px;
  height: 50px;
  border-radius: 4px;
  margin-top: 10px;
`;

export const SubmitText = styled.Text`
  font-size: 20px;
  color: #fff;
  font-family: 'Roboto-Regular';
`;

export const Link = styled.TouchableOpacity`
  margin-top: 30px;
  margin-bottom: 8px;
`;

export const LinkText = styled.Text`
  color: #fff;
  font-size: 14px;
`;
