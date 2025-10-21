"use client";

import { useState, useEffect, useCallback } from "react";

export const useCountUp = (
  end: number,
  duration: number,
  start: boolean
): number => {
  const [count, setCount] = useState(0);

  const animate = useCallback(() => {
    let startTime: number | null = null;
    const step = (timestamp: number) => {
      if (!startTime) startTime = timestamp;

      const progress =
        duration > 0 ? Math.min((timestamp - startTime) / duration, 1) : 1;
      const currentCount = Math.floor(progress * end);

      setCount(currentCount);

      if (progress < 1) {
        window.requestAnimationFrame(step);
      }
    };
    window.requestAnimationFrame(step);
  }, [end, duration]);

  useEffect(() => {
    if (start) {
      animate();
    }
  }, [start, animate]);

  return count;
};
