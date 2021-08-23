import { useState } from "react";
import { ResultAttr } from '@services/types/types';

const useLocalStorage = (key: string, initialValue: ResultAttr[]) => {
  const [storedValue, setStoredValue] = useState<ResultAttr []>(() => {
    try {
      const item = window.localStorage.getItem(key);
      return item ? JSON.parse(item) : initialValue;
    } catch (err) {
      return initialValue;
    }
  });

  const setValue = (value: ResultAttr[]) => {
    try {
      const valueToStore =
        value instanceof Function ? value(storedValue) : value;
      setStoredValue(valueToStore);
      window.localStorage.setItem(key, JSON.stringify(valueToStore));
    } catch (err) {
      console.error(err);
    }
  };

  return {storedValue, setValue};
};

export default useLocalStorage;
