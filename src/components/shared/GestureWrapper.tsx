import React from 'react';
import { useGesture } from '@use-gesture/react';
import { motion, useMotionValue } from 'framer-motion';

interface GestureWrapperProps {
  children: React.ReactNode;
  onSwipeLeft?: () => void;
  onSwipeRight?: () => void;
  className?: string;
}

export const GestureWrapper = ({ 
  children, 
  onSwipeLeft, 
  onSwipeRight,
  className = "" 
}: GestureWrapperProps) => {
  const x = useMotionValue(0);

  const bind = useGesture({
    onDrag: ({ movement: [mx], direction: [xDir], velocity: [vx], last }) => {
      if (last) {
        const swipeThreshold = 50;
        const velocityThreshold = 0.5;
        
        if (Math.abs(mx) > swipeThreshold && Math.abs(vx) > velocityThreshold) {
          if (mx > 0 && onSwipeRight) {
            onSwipeRight();
          } else if (mx < 0 && onSwipeLeft) {
            onSwipeLeft();
          }
        }
        x.set(0);
      } else {
        x.set(mx);
      }
    },
  });

  return (
    <motion.div 
      {...bind()} 
      style={{ x }} 
      className={`touch-pan-y ${className}`}
    >
      {children}
    </motion.div>
  );
};