import React, { useEffect, useRef } from 'react';
import { View, StyleSheet, Animated, Dimensions,} from 'react-native';
import { colors, spacing } from '../styles';

const { width } = Dimensions.get('window');
const CARD_WIDTH = width - spacing.md * 2;

const SkeletonCard: React.FC = () => {
  const animatedValue = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.loop(
      Animated.sequence([
        Animated.timing(animatedValue, {
          toValue: 1,
          duration: 1000,
          useNativeDriver: true,
        }),
        Animated.timing(animatedValue, {
          toValue: 0,
          duration: 1000,
          useNativeDriver: true,
        }),
      ])
    ).start();
  }, []);

  const opacity = animatedValue.interpolate({
    inputRange: [0, 1],
    outputRange: [0.3, 0.7],
  });

  return (
    <View style={styles.card}>
      {/* Image Skeleton */}
      <Animated.View style={[styles.imageSkeleton, { opacity }]} />

      {/* Content Skeleton */}
      <View style={styles.content}>
        {/* Title Skeleton */}
        <Animated.View style={[styles.titleSkeleton, { opacity }]} />
        <Animated.View style={[styles.titleSkeletonShort, { opacity }]} />

        {/* Meta Skeleton */}
        <View style={styles.metaContainer}>
          <Animated.View style={[styles.badgeSkeleton, { opacity }]} />
          <Animated.View style={[styles.badgeSkeleton, { opacity }]} />
        </View>

        {/* Tags Skeleton */}
        <Animated.View style={[styles.tagsSkeleton, { opacity }]} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    width: CARD_WIDTH,
    backgroundColor: colors.surface,
    borderRadius: 12,
    marginBottom: spacing.md,
    overflow: 'hidden',
  },
  imageSkeleton: {
    width: '100%',
    height: 200,
    backgroundColor: colors.surfaceAlt,
  },
  content: {
    padding: spacing.md,
  },
  titleSkeleton: {
    height: 20,
    backgroundColor: colors.surfaceAlt,
    borderRadius: 4,
    marginBottom: spacing.xs,
  },
  titleSkeletonShort: {
    height: 20,
    width: '60%',
    backgroundColor: colors.surfaceAlt,
    borderRadius: 4,
    marginBottom: spacing.sm,
  },
  metaContainer: {
    flexDirection: 'row',
    marginBottom: spacing.sm,
  },
  badgeSkeleton: {
    height: 24,
    width: 80,
    backgroundColor: colors.surfaceAlt,
    borderRadius: 12,
    marginRight: spacing.xs,
  },
  tagsSkeleton: {
    height: 16,
    width: '80%',
    backgroundColor: colors.surfaceAlt,
    borderRadius: 4,
  },
});

export default SkeletonCard;