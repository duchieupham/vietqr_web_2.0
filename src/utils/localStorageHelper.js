function checkWindow() {
  return typeof window !== 'undefined';
}

export function setLocalStorage(key, value) {
  try {
    const valueToStore = JSON.stringify(value);
    if (checkWindow) {
      window.localStorage.setItem(key, valueToStore);
    }
  } catch (error) {
    console.log(`Error setting localStorage: ${error}`);
  }
}

export function getLocalStorage(key) {
  try {
    if (checkWindow) {
      const item = window.localStorage.getItem(key);
      return item ? JSON.parse(item) : null;
    }
    return null;
  } catch (error) {
    console.log(`Error getting localStorage: ${error}`);
    return null;
  }
}
