import { MutableRefObject, useEffect, useState } from "react";

const useOnScreen = (ref: MutableRefObject<any>, rootMargin: number = 100) => {
  const [isOnScreen, setIsOnScreen] = useState(false);

  useEffect(() => {
    const refNode = ref.current;
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsOnScreen(entry.isIntersecting);
      },
      {
        rootMargin: `${rootMargin}px`,
      }
    );
    if (ref.current) {
      observer.observe(ref.current);
    }
    return () => {
      refNode && observer.unobserve(refNode);
    };
  }, [ref, rootMargin]);

  return isOnScreen;
};

export default useOnScreen;
