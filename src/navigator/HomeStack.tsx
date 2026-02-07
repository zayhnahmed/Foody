import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from '../screens/HomeScreen';
import DetailsScreen from '../screens/DetailsScreen';
import { HomeStackParamList } from './types';
import { colors } from '../styles';
import { Image } from 'react-native';

const Stack = createNativeStackNavigator<HomeStackParamList>();

const HomeStack: React.FC = () => {
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
        name="Home"
        component={HomeScreen}
        options={{
          headerTitle: () => (
            <Image
              source={require('../assets/FOODY.png')}
              style={{
                width: 120,
                height: 40,
                resizeMode: 'contain',
              }}
            />
          ),
          headerTitleAlign: 'center',
        }}
      />

      <Stack.Screen 
        name="Details" 
        component={DetailsScreen}
        options={{ 
          title: 'Details',
          headerTitleStyle: {
            fontFamily: 'AKONY',
            fontSize: 18,
            color: colors.primary,
          },
          headerBackTitle: 'Back',
        }}
      />
    </Stack.Navigator>
  );
};

export default HomeStack;