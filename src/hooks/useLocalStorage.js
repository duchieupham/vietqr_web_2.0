import { useState, useEffect } from 'react';
/**
 * Custom hook for using localStorage
 *
 * @param {string} key the stored key to get value
 * @param {any} initialValue the default value if null
 * @return {any} the stored value from the key
 */

export function useLocalStorage(key, initialValue) {
  // State to store our value
  const [storedValue, setStoredValue] = useState(initialValue);

  useEffect(() => {
    // Get from local storage by key
    if (typeof window !== 'undefined') {
      const item = window.localStorage.getItem(key);
      // Parse stored json or if none return initialValue
      setStoredValue(item ? JSON.parse(item) : initialValue);
    }
  }, [key, initialValue]);

  const setValue = (value) => {
    try {
      const valueToStore =
        value instanceof Function ? value(storedValue) : value;
      // Save state
      setStoredValue(valueToStore);
      // Save to local storage
      if (typeof window !== 'undefined') {
        window.localStorage.setItem(key, JSON.stringify(valueToStore));
      }
    } catch (error) {
      console.log(error);
    }
  };

  return [storedValue, setValue];
}
