import { useRef, useEffect } from 'react';

const useIntersectionObserver = (callback, options) => {
  const target = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        callback();
      }
    }, options);

    if (target.current) {
      observer.observe(target.current);
    }

    return () => {
      observer.disconnect();
    };
  }, [callback, options]);

  return target;
};

export default useIntersectionObserver;