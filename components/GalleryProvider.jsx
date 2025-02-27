'use client';

import { createContext, useState } from 'react';

export const GalleryContext = createContext();

export const GalleryProvider = ({ children }) => {
  const [seed, setSeed] = useState(0);

  const updateSeed = () => {
    setSeed((prev) => prev + 1);
  };

  return (
    <GalleryContext.Provider value={{ seed, updateSeed }}>
      {children}
    </GalleryContext.Provider>
  );
};
