export const getDataFromStorage = (key = "") => {
  try {
    const storageKey = window.localStorage.getItem(key);
    if (storageKey) {
      return JSON.parse(storageKey);
    }
    return null;
  } catch (error) {
    console.error("Error parsing data from localStorage:", error);
    return null;
  }
};

export const setDataToStorage = (key = "", data = {}) => {
  try {
    window.localStorage.setItem(key, JSON.stringify(data));
  } catch (error) {
    console.error("Error setting data to localStorage:", error);
  }
};
