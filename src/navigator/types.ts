// Navigation parameter type definitions
import type { NativeStackNavigationProp } from '@react-navigation/native-stack';
import type { BottomTabNavigationProp } from '@react-navigation/bottom-tabs';
import type { CompositeNavigationProp, RouteProp } from '@react-navigation/native';

// Food item type (import from types/index.ts in actual app)
export interface FoodItem {
  id: string;
  name: string;
  image: string;
  rating: number;
  category: string;
  description: string;
  cuisine?: string;
  tags?: string[];
}

// Home Stack parameter list
export type HomeStackParamList = {
  Home: undefined;
  Details: { item: FoodItem };
};

// Favorites Stack parameter list
export type FavoritesStackParamList = {
  Favorites: undefined;
  Details: { item: FoodItem };
};

// Root Tab Navigator parameter list
export type RootTabParamList = {
  HomeTab: undefined;
  FavoritesTab: undefined;
};

// Navigation prop types for screens
export type HomeScreenNavigationProp = CompositeNavigationProp<
  NativeStackNavigationProp<HomeStackParamList, 'Home'>,
  BottomTabNavigationProp<RootTabParamList>
>;

export type DetailsScreenNavigationProp = NativeStackNavigationProp<
  HomeStackParamList | FavoritesStackParamList,
  'Details'
>;

export type FavoritesScreenNavigationProp = CompositeNavigationProp<
  NativeStackNavigationProp<FavoritesStackParamList, 'Favorites'>,
  BottomTabNavigationProp<RootTabParamList>
>;

// Route prop types for screens
export type DetailsScreenRouteProp = RouteProp<HomeStackParamList | FavoritesStackParamList, 'Details'>;

// Declare global navigation types for type-safe navigation throughout the app
declare global {
  namespace ReactNavigation {
    interface RootParamList extends RootTabParamList {}
  }
}