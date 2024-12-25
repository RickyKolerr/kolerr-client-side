import React from 'react';
import InfiniteScroll from 'react-infinite-scroll-component';
import { Skeleton } from '@/components/ui/skeleton';

interface InfiniteScrollListProps<T> {
  items: T[];
  hasMore: boolean;
  loadMore: () => void;
  renderItem: (item: T) => React.ReactNode;
  className?: string;
}

export function InfiniteScrollList<T>({ 
  items, 
  hasMore, 
  loadMore, 
  renderItem,
  className = "" 
}: InfiniteScrollListProps<T>) {
  return (
    <InfiniteScroll
      dataLength={items.length}
      next={loadMore}
      hasMore={hasMore}
      loader={
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
          {[1, 2, 3].map((i) => (
            <Skeleton key={i} className="h-[300px] w-full rounded-lg" />
          ))}
        </div>
      }
      className={className}
    >
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {items.map((item, index) => (
          <div key={index} className="animate-fade-in">
            {renderItem(item)}
          </div>
        ))}
      </div>
    </InfiniteScroll>
  );
}