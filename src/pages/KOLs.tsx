import { useState, useTransition } from 'react';
import Navbar from "@/components/Navbar";
import { KOLFilters } from "@/components/kol-filters/KOLFilters";
import KOLCard from "@/components/KOLCard";
import SearchBar from "@/components/SearchBar";
import { useQuery } from '@tanstack/react-query';
import { supabase } from "@/integrations/supabase/client";

const KOLs = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [sortBy, setSortBy] = useState('popularity');
  const [activeFilters, setActiveFilters] = useState<string[]>([]);
  const [isPending, startTransition] = useTransition();

  const { data: kols, isLoading } = useQuery({
    queryKey: ['kols', searchQuery, sortBy, activeFilters],
    queryFn: async () => {
      let query = supabase
        .from('profiles')
        .select('*')
        .eq('role', 'kol');

      if (searchQuery) {
        query = query.ilike('username', `%${searchQuery}%`);
      }

      if (activeFilters.length > 0) {
        query = query.contains('categories', activeFilters);
      }

      switch (sortBy) {
        case 'followers':
          query = query.order('follower_count', { ascending: false });
          break;
        case 'engagement':
          query = query.order('engagement_rate', { ascending: false });
          break;
        default:
          query = query.order('follower_count', { ascending: false });
      }

      const { data, error } = await query;
      
      if (error) {
        console.error('Error fetching KOLs:', error);
        throw error;
      }

      return data || [];
    }
  });

  const handleSearch = (query: string) => {
    startTransition(() => {
      setSearchQuery(query);
    });
  };

  const handleSort = (value: string) => {
    startTransition(() => {
      setSortBy(value);
    });
  };

  const handleFilterChange = (filters: string[]) => {
    startTransition(() => {
      setActiveFilters(filters);
    });
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <div className="container mx-auto px-4 py-8">
        <div className="space-y-6">
          <h1 className="text-4xl font-bold bg-gradient-to-r from-kolerr-cyan via-kolerr-purple to-kolerr-orange bg-clip-text text-transparent">
            Key Opinion Leaders
          </h1>
          <p className="text-muted-foreground">
            Connect with top Vietnamese influencers for your brand campaigns
          </p>

          <SearchBar 
            onSearch={handleSearch}
            onSort={handleSort}
            sortBy={sortBy}
          />

          <KOLFilters onFilterChange={handleFilterChange} />

          {isLoading ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {[...Array(8)].map((_, i) => (
                <div key={i} className="h-64 bg-gray-800 animate-pulse rounded-lg"></div>
              ))}
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {kols?.map((kol) => (
                <KOLCard
                  key={kol.id}
                  name={kol.username || 'Anonymous'}
                  image={kol.avatar_url || 'https://i.pravatar.cc/150'}
                  followers={kol.follower_count?.toString() || '0'}
                  engagement={`${kol.engagement_rate || 0}%`}
                />
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default KOLs;