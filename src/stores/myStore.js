import dataSweets from '../assets/sweets.json';
export const useMyStore = defineStore('myStore', () => {
  const state = reactive({ desserts: [] });

  const getAll = async () => {
    state.desserts = dataSweets.desserts;
  };
  return { state, getAll };
});
