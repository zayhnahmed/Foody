import React from 'react';
import {
  View,
  Text,
  StyleSheet,
} from 'react-native';
import { spacing, typography } from '../styles';

const OfflineBanner: React.FC = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.icon}>📡</Text>
      <Text style={styles.text}>No internet connection</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#FF6B6B',
    paddingVertical: spacing.sm,
    paddingHorizontal: spacing.md,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  icon: {
    fontSize: 16,
    marginRight: spacing.xs,
  },
  text: {
    fontSize: typography.sizes.sm,
    fontWeight: typography.weights.semibold,
    color: 'white',
  },
});

export default OfflineBanner;