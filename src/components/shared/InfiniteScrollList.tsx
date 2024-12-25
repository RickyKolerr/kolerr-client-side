import React, { memo } from 'react';
import InfiniteScroll from 'react-infinite-scroll-component';
import { Skeleton } from '@/components/ui/skeleton';
import { FixedSizeGrid } from 'react-window';
import AutoSizer from 'react-virtualized-auto-sizer';

interface InfiniteScrollListProps<T> {
  items: T[];
  hasMore: boolean;
  loadMore: () => void;
  renderItem: (item: T) => React.ReactNode;
  className?: string;
}

export const InfiniteScrollList = memo(<T,>({ 
  items, 
  hasMore, 
  loadMore, 
  renderItem,
  className = "" 
}: InfiniteScrollListProps<T>) => {
  const COLUMN_COUNT = window.innerWidth >= 1024 ? 3 : window.innerWidth >= 768 ? 2 : 1;
  const ROW_HEIGHT = 400; // Adjust based on your card height

  const Cell = ({ columnIndex, rowIndex, style }: any) => {
    const itemIndex = rowIndex * COLUMN_COUNT + columnIndex;
    if (itemIndex >= items.length) return null;
    
    return (
      <div style={style}>
        {renderItem(items[itemIndex])}
      </div>
    );
  };

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
      <div style={{ height: '80vh' }}>
        <AutoSizer>
          {({ height, width }) => (
            <FixedSizeGrid
              columnCount={COLUMN_COUNT}
              columnWidth={width / COLUMN_COUNT}
              height={height}
              rowCount={Math.ceil(items.length / COLUMN_COUNT)}
              rowHeight={ROW_HEIGHT}
              width={width}
            >
              {Cell}
            </FixedSizeGrid>
          )}
        </AutoSizer>
      </div>
    </InfiniteScroll>
  );
});

InfiniteScrollList.displayName = 'InfiniteScrollList';