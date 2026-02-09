
import { useEffect, useRef } from 'react';

interface ObserverOptions {
  threshold?: number;
  rootMargin?: string;
}

export const useIntersectionObserver = (options: ObserverOptions = {}) => {
  const elementsRef = useRef<(HTMLElement | null)[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('reveal-visible');
          // Optionally unobserve if you only want it once
          // observer.unobserve(entry.target);
        }
      });
    }, options);

    const currentElements = elementsRef.current;
    currentElements.forEach((el) => {
      if (el) observer.observe(el);
    });

    return () => {
      currentElements.forEach((el) => {
        if (el) observer.unobserve(el);
      });
    };
  }, [options]);

  return elementsRef;
};
