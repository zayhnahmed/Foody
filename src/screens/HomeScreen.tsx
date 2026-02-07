import React, { useState } from 'react';
import {
  View,
  FlatList,
  StyleSheet,
  RefreshControl,
  Text,
  ActivityIndicator,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { HomeScreenNavigationProp } from '../navigator/types';
import { useFoodItems } from '../hooks/useFoodItems';
import { useFavorites } from '../context/FavoritesContext';
import { useSearch } from '../hooks/useSearch';
import FoodCard from '../components/FoodCard';
import SearchBar from '../components/SearchBar';
import { colors, spacing } from '../styles';

const HomeScreen: React.FC = () => {
  const navigation = useNavigation<HomeScreenNavigationProp>();
  const { items, loading, error, refetch } = useFoodItems();
  const { isFavorite, toggleFavorite } = useFavorites();
  const { searchQuery, setSearchQuery, filteredData } = useSearch(items);
  const [refreshing, setRefreshing] = useState(false);

  const onRefresh = async () => {
    setRefreshing(true);
    await refetch();
    setRefreshing(false);
  };

  const handleCardPress = (item: any) => {
    navigation.navigate('Details', { item });
  };

  const handleFavoritePress = (itemId: string) => {
    toggleFavorite(itemId);
  };

  // Show loading state
  if (loading && !refreshing) {
    return (
      <View style={[styles.container, styles.centerContent]}>
        <ActivityIndicator size="large" color={colors.primary} />
        <Text style={styles.loadingText}>Loading delicious food...</Text>
      </View>
    );
  }

  // Show error state
  if (error) {
    return (
      <View style={[styles.container, styles.centerContent]}>
        <Text style={styles.errorIcon}>⚠️</Text>
        <Text style={styles.errorText}>Oops! Something went wrong</Text>
        <Text style={styles.errorMessage}>{error}</Text>
      </View>
    );
  }

  // Show empty state
  if (filteredData.length === 0) {
    return (
      <View style={styles.container}>
        <SearchBar
          value={searchQuery}
          onChangeText={setSearchQuery}
          placeholder="Search food items..."
        />
        <View style={styles.centerContent}>
          <Text style={styles.emptyIcon}>🍽️</Text>
          <Text style={styles.emptyText}>
            {searchQuery ? `No results for "${searchQuery}"` : 'No food items available'}
          </Text>
        </View>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <SearchBar
        value={searchQuery}
        onChangeText={setSearchQuery}
        placeholder="Search food items..."
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
        refreshControl={
          <RefreshControl
            refreshing={refreshing}
            onRefresh={onRefresh}
            tintColor={colors.background}
            colors={[colors.primary]}
            progressBackgroundColor={colors.background}
          />
        }
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
  centerContent: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: spacing.xl,
  },
  listContent: {
    padding: spacing.md,
    paddingBottom: spacing.xl,
  },
  loadingText: {
    fontSize: 16,
    color: colors.text,
    marginTop: spacing.md,
  },
  errorIcon: {
    fontSize: 64,
    marginBottom: spacing.md,
  },
  errorText: {
    fontSize: 20,
    fontWeight: '700' as '700',
    color: colors.text,
    marginBottom: spacing.sm,
  },
  errorMessage: {
    fontSize: 14,
    color: colors.textSecondary,
    textAlign: 'center' as 'center',
  },
  emptyIcon: {
    fontSize: 64,
    marginBottom: spacing.md,
  },
  emptyText: {
    fontSize: 16,
    color: colors.text,
    textAlign: 'center' as 'center',
  },
});

export default HomeScreen;