import { useEffect, useState } from 'react';

export default function useDebounce(initialValue, time) {
  const [value, setValue] = useState(initialValue); // debounced value
  const [debouncedValue, setDebouncedValue] = useState(initialValue); // up-to-date/current value
  useEffect(() => {
    const debounce = setTimeout(() => {
      setDebouncedValue(value);
    }, time);
    return () => {
      clearTimeout(debounce);
    };
  }, [value, time]);
  return [debouncedValue, value, setValue];
}
