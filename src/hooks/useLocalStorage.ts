export const useLocalStoreage = (key: string) => {
  const setUser = (value: unknown) => {
    
    window.localStorage.setItem(key, JSON.stringify(value));
  };
  return {setUser}
};
