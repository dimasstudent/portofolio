import { useState, useEffect, RefObject } from 'react';

interface UseInViewOptions {
  threshold?: number;
  once?: boolean;
  rootMargin?: string;
}

export function useInView(
  ref: RefObject<Element>,
  options: UseInViewOptions = {}
): boolean {
  const { threshold = 0, once = false, rootMargin = '0px' } = options;
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          if (once) {
            observer.unobserve(element);
          }
        } else if (!once) {
          setIsInView(false);
        }
      },
      { threshold, rootMargin }
    );

    observer.observe(element);

    return () => {
      if (element) {
        observer.unobserve(element);
      }
    };
  }, [ref, threshold, once, rootMargin]);

  return isInView;
}