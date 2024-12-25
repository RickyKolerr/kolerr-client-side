import React, { createContext, useContext, useState, useCallback } from 'react';

interface FilterState {
  search: string;
  category: string;
  followerRange: [number, number];
  engagementRange: [number, number];
  location: string;
  platforms: string[];
  sortBy: string;
}

interface KOLFilterContextType {
  filters: FilterState;
  setSearch: (search: string) => void;
  setCategory: (category: string) => void;
  setFollowerRange: (range: [number, number]) => void;
  setEngagementRange: (range: [number, number]) => void;
  setLocation: (location: string) => void;
  togglePlatform: (platform: string) => void;
  setSortBy: (sortBy: string) => void;
  resetFilters: () => void;
}

const initialState: FilterState = {
  search: '',
  category: '',
  followerRange: [0, 1000000],
  engagementRange: [0, 100],
  location: '',
  platforms: [],
  sortBy: '',
};

const KOLFilterContext = createContext<KOLFilterContextType | undefined>(undefined);

export const KOLFilterProvider = ({ children }: { children: React.ReactNode }) => {
  const [filters, setFilters] = useState<FilterState>(initialState);

  const setSearch = useCallback((search: string) => {
    setFilters(prev => ({ ...prev, search }));
  }, []);

  const setCategory = useCallback((category: string) => {
    setFilters(prev => ({ ...prev, category }));
  }, []);

  const setFollowerRange = useCallback((range: [number, number]) => {
    setFilters(prev => ({ ...prev, followerRange: range }));
  }, []);

  const setEngagementRange = useCallback((range: [number, number]) => {
    setFilters(prev => ({ ...prev, engagementRange: range }));
  }, []);

  const setLocation = useCallback((location: string) => {
    setFilters(prev => ({ ...prev, location }));
  }, []);

  const togglePlatform = useCallback((platform: string) => {
    setFilters(prev => ({
      ...prev,
      platforms: prev.platforms.includes(platform)
        ? prev.platforms.filter(p => p !== platform)
        : [...prev.platforms, platform],
    }));
  }, []);

  const setSortBy = useCallback((sortBy: string) => {
    setFilters(prev => ({ ...prev, sortBy }));
  }, []);

  const resetFilters = useCallback(() => {
    setFilters(initialState);
  }, []);

  return (
    <KOLFilterContext.Provider
      value={{
        filters,
        setSearch,
        setCategory,
        setFollowerRange,
        setEngagementRange,
        setLocation,
        togglePlatform,
        setSortBy,
        resetFilters,
      }}
    >
      {children}
    </KOLFilterContext.Provider>
  );
};

export const useKOLFilters = () => {
  const context = useContext(KOLFilterContext);
  if (context === undefined) {
    throw new Error('useKOLFilters must be used within a KOLFilterProvider');
  }
  return context;
};