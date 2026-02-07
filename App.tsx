import React from 'react';
import { StatusBar } from 'react-native';
import { FavoritesProvider } from './src/context/FavoritesContext';
import AppNav from './src/navigator/AppNav';

const App = () => {
  return (
    <FavoritesProvider>
      <StatusBar 
        barStyle="light-content" 
        backgroundColor="#0F0F0F" 
      />
      <AppNav />
    </FavoritesProvider>
  );
};

export default App;