import React, { createContext, useEffect, useState } from 'react';

import AsyncStorage from '@react-native-community/async-storage';

export const AuthContext = createContext({});

export default function Auth({ children }) {
  const [user, setUser] = useState(null);
  const [slash, setSlash] = useState(true);

  useEffect(() => {
    async function loadStorage() {
      const StorageUser = await AsyncStorage.getItem('auth_user');

      if (StorageUser) {
        setUser(JSON.parse(StorageUser));
        setSlash(false);
      }
      setSlash(false);
    }

    loadStorage();
  }, []);

  //Set Storage
  async function storageUser(data) {
    await AsyncStorage.setItem('auth_user', JSON.stringify(data));
  }

  //Login
  async function signIn(email, password) {
    if (email === 'felipe@gmail.com' && password === 'felipe123') {
      console.log('Entrou!!!!!!!!!!!');
      const data = {
        token: 'jk12h3j21h3jk212h3jk12h3jkh12j3kh12k123hh21g3f12f3',
        name: 'Felipe',
        email: 'felipe@gmail.com',
      };
      return new Promise((resolve) => {
        setTimeout(() => {
          resolve(data);
          setUser(data);
          storageUser(data);
        }, 2000);
      });
    } else {
      console.log('Login Failed!');
    }
  }

  //Sign-out
  async function signOut() {
    await AsyncStorage.clear().then(() => {
      setUser(null);
    });
  }

  return (
    <AuthContext.Provider
      value={{ signed: !!user, user, slash, signIn, signOut }}
    >
      {children}
    </AuthContext.Provider>
  );
}
