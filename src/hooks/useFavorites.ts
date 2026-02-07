import { useState, useEffect } from 'react';
import { loadFavorites, saveFavorites } from '../services/storage';

export const useFavorites = () => {
  const [favorites, setFavorites] = useState<string[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  // Load favorites from AsyncStorage on mount
  useEffect(() => {
    const loadStoredFavorites = async () => {
      try {
        const storedFavorites = await loadFavorites();
        setFavorites(storedFavorites);
      } catch (error) {
        console.error('Failed to load favorites:', error);
      } finally {
        setLoading(false);
      }
    };

    loadStoredFavorites();
  }, []);

  // Save favorites to AsyncStorage whenever they change
  useEffect(() => {
    if (!loading) {
      saveFavorites(favorites).catch(error => {
        console.error('Failed to save favorites:', error);
      });
    }
  }, [favorites, loading]);

  const isFavorite = (itemId: string): boolean => {
    return favorites.includes(itemId);
  };

  const addFavorite = (itemId: string) => {
    if (!favorites.includes(itemId)) {
      setFavorites(prev => [...prev, itemId]);
    }
  };

  const removeFavorite = (itemId: string) => {
    setFavorites(prev => prev.filter(id => id !== itemId));
  };

  const toggleFavorite = (itemId: string) => {
    if (isFavorite(itemId)) {
      removeFavorite(itemId);
    } else {
      addFavorite(itemId);
    }
  };

  return {
    favorites,
    isFavorite,
    addFavorite,
    removeFavorite,
    toggleFavorite,
    loading,
  };
};

