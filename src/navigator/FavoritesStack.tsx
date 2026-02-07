import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import FavoritesScreen from '../screens/FavoritesScreen';
import DetailsScreen from '../screens/DetailsScreen';
import { FavoritesStackParamList } from './types';
import { colors } from '../styles';

const Stack = createNativeStackNavigator<FavoritesStackParamList>();

const FavoritesStack: React.FC = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: true,
        headerBackTitle: 'Back',
        headerTitleStyle: {
          fontWeight: '600',
        },
        headerStyle: {
          backgroundColor: colors.background,
        },
        headerTintColor: '#333',
      }}
    >
      <Stack.Screen 
        name="Favorites" 
        component={FavoritesScreen}
        options={{ 
          title: 'My Favorites',
          headerTitleStyle: {
            fontFamily: 'AKONY',
            fontSize: 18,
            color: colors.primary,
          },
          headerLargeTitle: false,
        }}
      />
      <Stack.Screen 
        name="Details" 
        component={DetailsScreen}
        options={{ 
          title: 'Details',
          headerTitleStyle: {
            fontFamily: 'AKONY.otf',
            fontSize: 18,
            fontWeight: '600',
            color: colors.primary,
          },
          headerBackTitle: 'Back',
        }}
      />
    </Stack.Navigator>
  );
};



export default FavoritesStack;