import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

//Rotas
import Home from '../pages/Home';
import Profile from '../pages/Profile';

export default function AuthRoutes() {
  const AuthNavigator = createBottomTabNavigator();

  return (
    <AuthNavigator.Navigator initialRouteName="Login">
      <AuthNavigator.Screen
        component={Home}
        name="Home"
        options={{ headerShown: true }}
      />
      <AuthNavigator.Screen
        component={Profile}
        name="Profile"
        options={{ headerShown: true }}
      />
    </AuthNavigator.Navigator>
  );
}
