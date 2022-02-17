import { useCallback, useRef } from 'react';

interface InfiniteScrollOptions {
  loading: boolean;
  currentPage?: number;
  hasNextPage: boolean;
}

export const useInfiniteScroll = (
  { loading, hasNextPage, currentPage = 0 }: InfiniteScrollOptions,
  trigger: (page: number) => unknown
) => {
  const observer = useRef<IntersectionObserver | null>(null);

  const bottomElementRef = useCallback(
    (node) => {
      if (loading) {
        return;
      }
      if (observer.current) {
        observer.current.disconnect();
      }
      observer.current = new IntersectionObserver((entries) => {
        if (entries?.[0].isIntersecting && hasNextPage) {
          trigger(currentPage + 1);
        }
      });
      if (node) {
        observer.current.observe(node);
      }
    },
    [loading, hasNextPage, currentPage, trigger]
  );

  return bottomElementRef;
};
