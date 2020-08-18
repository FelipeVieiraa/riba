import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

//Rotas
import SlashScreen from '../pages/SlashScreen';
import Login from '../pages/Login';
import Register from '../pages/Register';

export default function AuthRoutes() {
  const AuthStack = createStackNavigator();

  return (
    <AuthStack.Navigator initialRouteName="Login">
      <AuthStack.Screen
        component={SlashScreen}
        name="SlashScreen"
        options={{ headerShown: false }}
      />
      <AuthStack.Screen
        component={Login}
        name="Login"
        options={{ headerShown: false }}
      />
      <AuthStack.Screen
        component={Register}
        name="Register"
        options={{ headerShown: false }}
      />
    </AuthStack.Navigator>
  );
}
