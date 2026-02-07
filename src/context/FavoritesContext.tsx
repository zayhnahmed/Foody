import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { loadFavorites, saveFavorites } from '../services/storage';

const FavoritesContext = createContext<any>(undefined);

export const FavoritesProvider = ({ children }: { children: ReactNode }) => {
  const [favorites, setFavorites] = useState<string[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    loadFavorites().then(setFavorites).finally(() => setLoading(false));
  }, []);

  useEffect(() => {
    if (!loading) saveFavorites(favorites);
  }, [favorites, loading]);

  const toggleFavorite = (id: string) => {
    setFavorites(prev => 
      prev.includes(id) ? prev.filter(i => i !== id) : [...prev, id]
    );
  };

  return (
    <FavoritesContext.Provider value={{ favorites, toggleFavorite, isFavorite: (id: string) => favorites.includes(id), loading }}>
      {children}
    </FavoritesContext.Provider>
  );
};

export const useFavorites = () => useContext(FavoritesContext);