import React, { useState, useEffect } from 'react';

var Debounce = function(value, delay = 500) {
  const [debouncedValue, setDebouncedValue] = useState(value);

  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedValue(value);
    }, delay);

    return () => {
      clearTimeout(handler);
    }
  }, [value, delay]);

  return debouncedValue;
};

export default Debounce;
