import { RefObject, useEffect } from "react";

const useOnClickOutside = <T extends HTMLElement = HTMLElement>(
  elementRef: RefObject<T>,
  callback: (event: Event) => void
) => {
  useEffect(() => {
    const listener = (event: Event) => {
      if (
        !elementRef.current ||
        elementRef.current.contains(event.target as Node)
      ) {
        return;
      }

      callback(event);
    };

    document.addEventListener("mousedown", listener);
    document.addEventListener("touchstart", listener);

    return () => {
      document.removeEventListener("mousedown", listener);
      document.removeEventListener("touchstart", listener);
    };
  }, [elementRef, callback]);
};

export default useOnClickOutside;
