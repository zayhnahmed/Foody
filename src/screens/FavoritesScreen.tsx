import React from 'react';
import {
  View,
  FlatList,
  StyleSheet,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { FavoritesScreenNavigationProp } from '../navigator/types';
import { useFoodItems } from '../hooks/useFoodItems';
import { useFavorites } from '../context/FavoritesContext';
import { useSearch } from '../hooks/useSearch';
import FoodCard from '../components/FoodCard';
import SearchBar from '../components/SearchBar';
import { colors, spacing } from '../styles';

const FavoritesScreen: React.FC = () => {
  const navigation = useNavigation<FavoritesScreenNavigationProp>();
  const { items } = useFoodItems();
  const { isFavorite, toggleFavorite } = useFavorites();
  
  // Filter items to show only favorites
  const favoriteItems = items.filter(item => isFavorite(item.id));
  
  // Apply search filter on favorite items
  const { searchQuery, setSearchQuery, filteredData } = useSearch(favoriteItems);

  const handleCardPress = (item: any) => {
    navigation.navigate('Details', { item });
  };

  const handleFavoritePress = (itemId: string) => {
    toggleFavorite(itemId);
  };

  return (
    <View style={styles.container}>
      <SearchBar
        value={searchQuery}
        onChangeText={setSearchQuery}
        placeholder="Search favorites..."
      />
      <FlatList
        data={filteredData}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <FoodCard
            item={item}
            isFavorite={isFavorite(item.id)}
            onPress={() => handleCardPress(item)}
            onFavoritePress={() => handleFavoritePress(item.id)}
          />
        )}
        contentContainerStyle={styles.listContent}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
  },
  listContent: {
    padding: spacing.md,
    paddingBottom: spacing.xl,
  },
});

export default FavoritesScreen;