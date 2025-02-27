const GALLERA_IMG = 'GalleraIMG';

export const getLocalStorageData = () => {
  const data = localStorage.getItem(GALLERA_IMG);
  return JSON.parse(data);
};

export const setLocalStorageData = (data) => {
  const json = JSON.stringify(data);
  localStorage.setItem(GALLERA_IMG, json);
};

export const deleteLocalStorageData = () => {
  localStorage.removeItem(GALLERA_IMG);
};
