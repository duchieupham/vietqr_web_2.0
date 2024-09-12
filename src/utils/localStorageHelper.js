export function setLocalStorage(key, value) {
  try {
    const valueToStore = JSON.stringify(value);
    localStorage.setItem(key, valueToStore);
  } catch (error) {
    console.log(`Error setting localStorage: ${error}`);
  }
}

export function getLocalStorage(key) {
  try {
    const item = localStorage.getItem(key);
    return item ? JSON.parse(item) : null;
  } catch (error) {
    console.log(`Error getting localStorage: ${error}`);
    return null;
  }
}
