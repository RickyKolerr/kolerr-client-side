import React, { memo } from 'react';

interface OptimizedImageProps {
  src: string;
  alt: string;
  className?: string;
  width?: number;
  height?: number;
}

const OptimizedImage = memo(({ 
  src, 
  alt, 
  className = "", 
  width, 
  height 
}: OptimizedImageProps) => {
  // Convert Unsplash URLs to use optimized parameters
  const optimizeSrc = (url: string) => {
    if (url.includes('unsplash.com')) {
      const baseUrl = url.split('?')[0];
      const params = new URLSearchParams({
        auto: 'format,compress',
        q: '80',
        w: width?.toString() || '800',
        h: height?.toString() || '600',
        fit: 'crop',
      });
      return `${baseUrl}?${params.toString()}`;
    }
    return url;
  };

  return (
    <img
      src={optimizeSrc(src)}
      alt={alt}
      className={className}
      width={width}
      height={height}
      loading="lazy"
      decoding="async"
    />
  );
});

OptimizedImage.displayName = 'OptimizedImage';

export default OptimizedImage;