import AsyncStorage from '@react-native-async-storage/async-storage';

const FAVORITES_KEY = '@food_app_favorites';

/**
 * Save favorites to AsyncStorage
 * @param favorites - Array of favorite item IDs
 */
export const saveFavorites = async (favorites: string[]): Promise<void> => {
  try {
    const jsonValue = JSON.stringify(favorites);
    await AsyncStorage.setItem(FAVORITES_KEY, jsonValue);
  } catch (error) {
    console.error('Error saving favorites:', error);
    throw new Error('Failed to save favorites');
  }
};

/**
 * Load favorites from AsyncStorage
 * @returns Promise<string[]> - Array of favorite item IDs
 */
export const loadFavorites = async (): Promise<string[]> => {
  try {
    const jsonValue = await AsyncStorage.getItem(FAVORITES_KEY);
    return jsonValue != null ? JSON.parse(jsonValue) : [];
  } catch (error) {
    console.error('Error loading favorites:', error);
    return [];
  }
};

export const clearFavorites = async (): Promise<void> => {
  try {
    await AsyncStorage.removeItem(FAVORITES_KEY);
  } catch (error) {
    console.error('Error clearing favorites:', error);
    throw new Error('Failed to clear favorites');
  }
};