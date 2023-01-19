import Cookies from "js-cookie";
import { useCallback, useEffect, useState } from "react";

const useCookie = (name: string, defaultValue?: string) => {
  const [value, setValue] = useState<string | null>(() => {
    const cookie = Cookies.get(name)?.trim();

    if (!cookie) {
      return null;
    }

    return cookie;
  });

  const updateCookie = useCallback(
    (newValue: string, options = {}) => {
      Cookies.set(name, newValue, { ...options });
      setValue(newValue);
    },
    [name]
  );

  const deleteCookie = useCallback(() => {
    Cookies.remove(name);
    setValue(null);
  }, [name]);

  useEffect(() => {
    if (defaultValue) {
      updateCookie(defaultValue);
    }
  }, [defaultValue]);

  return { value, updateCookie, deleteCookie };
};

export default useCookie;
