import React, { useContext, useState } from 'react';
import { AuthContext } from '../contexts/auth';

// Rotas
import AuthRoutes from './auth.routes';
import AppRoutes from './app.routes';
import SlashScreen from '../pages/SlashScreen';

export default function Routes() {
  const { signed, slash } = useContext(AuthContext);

  if (slash) {
    return <SlashScreen />;
  }
  return signed ? <AppRoutes /> : <AuthRoutes />;
}
