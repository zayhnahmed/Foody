import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeStack from './HomeStack';
import FavoritesStack from './FavoritesStack';
import { RootTabParamList } from './types';
import { Platform, Text, Image } from 'react-native';
import { colors } from '../styles';

const Tab = createBottomTabNavigator<RootTabParamList>();

const AppNav: React.FC = () => {
  return (
            <NavigationContainer>
              <Tab.Navigator
                screenOptions={{
                  headerShown: false,
                  tabBarActiveTintColor: colors.secondary,
                  tabBarInactiveTintColor: '#999',
                  tabBarStyle: {
                    position: 'absolute',
                    backgroundColor: colors.surfaceAlt,
                    borderTopWidth: 0,          // remove top border
                    height: Platform.OS === 'ios' ? 88 : 64,
                    marginHorizontal: 16,       // floating gap
                    marginBottom: Platform.OS === 'ios' ? 24 : 16,
                    borderRadius: 24,           // rounded corners
                    elevation: 10,              // Android shadow
                    shadowColor: '#000',        // iOS shadow
                    shadowOpacity: 0.15,
                    shadowOffset: { width: 0, height: 8 },
                    shadowRadius: 12,
                  },
                  tabBarLabelStyle: {
                    fontSize: 12,
                    fontWeight: '600',
                    paddingBottom: Platform.OS === 'ios' ? 12 : 4,
                  },
                }}
              >

        <Tab.Screen 
          name="HomeTab" 
          component={HomeStack}
          options={{ 
            tabBarLabel: 'Home',
            tabBarIcon: ({ color, size }) => (
              <Image source={require('../assets/home.png')} style={{ tintColor: color }}/>
            ),
          }}
        />
        <Tab.Screen
          name="FavoritesTab"
          component={FavoritesStack}
          options={{
            tabBarLabel: 'Favorites',
            tabBarIcon: ({ color }) => (
              <Image
                source={require('../assets/heart-solid-full.png')}
                style={{
                  width: 22,
                  height: 22,
                  resizeMode: 'contain',
                  tintColor: color,
                }}
              />
            ),
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default AppNav;