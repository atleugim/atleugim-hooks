import { useEffect, useState } from "react";

const useLocalStorage = (storageKey: string) => {
  const [value, setValue] = useState(null);

  const deleteKey = () => {
    localStorage.removeItem(storageKey);
    setValue(null);
  };

  const updateKey = (v: any) => {
    localStorage.setItem(storageKey, JSON.stringify(v));
    setValue(v);
  };

  useEffect(() => {
    const keyValue = localStorage.getItem(storageKey);

    if (keyValue) {
      setValue(JSON.parse(keyValue));
    }
  }, [storageKey]);

  return { value, updateKey, deleteKey };
};

export default useLocalStorage;
