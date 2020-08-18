import React, { useContext } from 'react';
import {AuthContext} from '../../contexts/auth';
import { TouchableOpacity, Text } from 'react-native';

export default function Profile() {
  const {signOut} = useContext(AuthContext);

  function handleLogout() {
    signOut();
  }

  return (
    <TouchableOpacity 
      onPress={() => handleLogout()}
      style={{width: '100%', backgroundColor: '#5c322f', justifyContent: 'center', alignItems: 'center', height: 80}}
    >
      <Text style={{ color: "#FFF", fontSize: 20 }}>Sair</Text>
    </TouchableOpacity>);
}
