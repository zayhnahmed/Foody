import React from 'react';
import {
  TouchableOpacity,
  StyleSheet,
  Image,
} from 'react-native';

interface FavoriteButtonProps {
  isFavorite: boolean;
  onPress: () => void;
  size?: number;
}

const FavoriteButton: React.FC<FavoriteButtonProps> = ({
  isFavorite,
  onPress,
  size = 24,
}) => {
  return (
    <TouchableOpacity
      style={styles.button}
      onPress={onPress}
      activeOpacity={0.7}
      hitSlop={{ top: 10, bottom: 10, left: 10, right: 10 }}
    >
      <Image
        source={
          isFavorite ? require('../assets/heart-solid-full.png') : require('../assets/heart-regular-full.png')
        }
        style={{
          width: size,
          height: size,
          resizeMode: 'contain',
        }}
      />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  icon: {
    // fontSize set dynamically via props
  },
});

export default FavoriteButton;