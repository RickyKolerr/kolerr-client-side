import React from "react";
import { motion, PanInfo, useMotionValue } from "framer-motion";

interface GestureWrapperProps {
  children: React.ReactNode;
  className?: string;
  onSwipeLeft?: () => void;
  onSwipeRight?: () => void;
  swipeThreshold?: number;
}

const GestureWrapper: React.FC<GestureWrapperProps> = ({
  children,
  className = "",
  onSwipeLeft,
  onSwipeRight,
  swipeThreshold = 50,
}) => {
  const x = useMotionValue(0);
  
  const handleDragEnd = (
    _event: MouseEvent | TouchEvent | PointerEvent,
    info: PanInfo
  ) => {
    const offset = info.offset.x;
    
    if (Math.abs(offset) > swipeThreshold) {
      if (offset > 0 && onSwipeRight) {
        onSwipeRight();
      } else if (offset < 0 && onSwipeLeft) {
        onSwipeLeft();
      }
    }
  };

  return (
    <motion.div
      style={{ x }}
      drag="x"
      dragConstraints={{ left: 0, right: 0 }}
      onDragEnd={handleDragEnd}
      className={className}
    >
      {children}
    </motion.div>
  );
};

export default GestureWrapper;