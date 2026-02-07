import { useEffect, useState } from 'react';
import { fetchFoodItems, FoodItem } from '../services/api';

export const useFoodItems = () => {
  const [items, setItems] = useState<FoodItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const fetchItems = async () => {
    try {
      setLoading(true);
      setError(null);
      const data = await fetchFoodItems();
      setItems(data);
    } catch (err) {
      setError(
        err instanceof Error ? err.message : 'Failed to fetch food items'
      );
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchItems();
  }, []);

  return {
    items,
    loading,
    error,
    refetch: fetchItems,
  };
};
