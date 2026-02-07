import { useState, useMemo } from 'react';

interface SearchableItem {
  id: string;
  name: string;
  category?: string;
  cuisine?: string;
  tags?: string[];
}

export const useSearch = <T extends SearchableItem>(data: T[]) => {
  const [searchQuery, setSearchQuery] = useState<string>('');

  const filteredData = useMemo(() => {
    if (!searchQuery.trim()) {
      return data;
    }

    const query = searchQuery.toLowerCase().trim();

    return data.filter(item => {
      // Search in name
      if (item.name.toLowerCase().includes(query)) {
        return true;
      }

      // Search in category
      if (item.category?.toLowerCase().includes(query)) {
        return true;
      }

      // Search in cuisine
      if (item.cuisine?.toLowerCase().includes(query)) {
        return true;
      }

      // Search in tags
      if (item.tags?.some(tag => tag.toLowerCase().includes(query))) {
        return true;
      }

      return false;
    });
  }, [data, searchQuery]);

  return {
    searchQuery,
    setSearchQuery,
    filteredData,
  };
};