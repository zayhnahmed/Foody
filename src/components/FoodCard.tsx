import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity, Dimensions,} from 'react-native';
import FavoriteButton from './FavoriteButton';
import { colors, spacing, typography } from '../styles';

const { width } = Dimensions.get('window');
const CARD_WIDTH = width - spacing.md * 2;

interface FoodCardProps {
  item: {
    id: string;
    name: string;
    image: string;
    rating: number;
    category: string;
    cuisine?: string;
    tags?: string[];
  };
  isFavorite: boolean;
  onPress: () => void;
  onFavoritePress: () => void;
}

const FoodCard: React.FC<FoodCardProps> = ({
  item,
  isFavorite,
  onPress,
  onFavoritePress,
}) => {
  return (
    <TouchableOpacity
      style={styles.card}
      onPress={onPress}
      activeOpacity={0.7}
    >
      {/* Image Section */}
      <View style={styles.imageContainer}>
        <Image
          source={{ uri: item.image }}
          style={styles.image}
          resizeMode="cover"
        />
        <View style={styles.favoriteButton}>
          <FavoriteButton
            isFavorite={isFavorite}
            onPress={onFavoritePress}
            size={24}
          />
        </View>
      </View>

      {/* Content Section */}
      <View style={styles.content}>
        {/* Title and Rating */}
        <View style={styles.header}>
          <Text style={styles.title} numberOfLines={2}>
            {item.name}
          </Text>
          <View style={styles.ratingContainer}>
            <Text style={styles.ratingIcon}>⭐</Text>
            <Text style={styles.rating}>{item.rating.toFixed(1)}</Text>
          </View>
        </View>

        {/* Category and Cuisine */}
        <View style={styles.metaContainer}>
          <View style={styles.categoryBadge}>
            <Text style={styles.categoryText}>{item.category}</Text>
          </View>
          {item.cuisine && (
            <View style={styles.cuisineBadge}>
              <Text style={styles.cuisineText}>{item.cuisine}</Text>
            </View>
          )}
        </View>

        {/* Tags */}
        {item.tags && item.tags.length > 0 && (
          <View style={styles.tagsContainer}>
            {item.tags.slice(0, 3).map((tag, index) => (
              <Text key={index} style={styles.tag}>
                {tag}
                {index < Math.min(item.tags!.length - 1, 2) && ' • '}
              </Text>
            ))}
          </View>
        )}
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  card: {
    width: CARD_WIDTH,
    backgroundColor: colors.surface,
    borderRadius: 12,
    marginBottom: spacing.md,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 3,
    overflow: 'hidden',
  },
  imageContainer: {
    width: '100%',
    height: 200,
    position: 'relative',
  },
  image: {
    width: '100%',
    height: '100%',
    backgroundColor: colors.lightGray,
  },
  favoriteButton: {
    position: 'absolute',
    top: spacing.sm,
    right: spacing.sm,
    backgroundColor: 'white',
    borderRadius: 50,
    padding: spacing.xs,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.2,
    shadowRadius: 2,
    elevation: 2,
  },
  content: {
    padding: spacing.md,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    marginBottom: spacing.sm,
  },
  title: {
    flex: 1,
    fontSize: typography.sizes.lg,
    fontWeight: typography.weights.bold,
    color: colors.text,
    marginRight: spacing.sm,
  },
  ratingContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: colors.lightGray,
    paddingHorizontal: spacing.xs,
    paddingVertical: 4,
    borderRadius: 6,
  },
  ratingIcon: {
    fontSize: 14,
    marginRight: 2,
  },
  rating: {
    fontSize: typography.sizes.sm,
    fontWeight: typography.weights.semibold,
    color: colors.text,
  },
  metaContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: spacing.sm,
    flexWrap: 'wrap',
  },
  categoryBadge: {
    backgroundColor: colors.primary,
    paddingHorizontal: spacing.sm,
    paddingVertical: 4,
    borderRadius: 12,
    marginRight: spacing.xs,
  },
  categoryText: {
    fontSize: typography.sizes.xs,
    fontWeight: typography.weights.semibold,
    color: 'white',
  },
  cuisineBadge: {
    backgroundColor: colors.secondary,
    paddingHorizontal: spacing.sm,
    paddingVertical: 4,
    borderRadius: 12,
  },
  cuisineText: {
    fontSize: typography.sizes.xs,
    fontWeight: typography.weights.semibold,
    color: 'white',
  },
  tagsContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  tag: {
    fontSize: typography.sizes.xs,
    color: colors.textSecondary,
  },
});

export default FoodCard;