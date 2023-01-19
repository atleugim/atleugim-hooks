import { RefObject, useEffect, useState } from "react";

const useHover = <T extends HTMLElement = HTMLElement>(
  elementRef: RefObject<T>
) => {
  const [value, setValue] = useState<boolean>(false);

  const handleMouseOver = () => setValue(true);
  const handleMouseOut = () => setValue(false);

  useEffect(() => {
    const element = elementRef.current;
    if (element) {
      element.addEventListener("mouseover", handleMouseOver);
      element.addEventListener("mouseout", handleMouseOut);
      return () => {
        element.removeEventListener("mouseover", handleMouseOver);
        element.removeEventListener("mouseout", handleMouseOut);
      };
    }
  }, [elementRef.current]);

  return value;
};

export default useHover;
