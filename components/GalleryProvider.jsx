'use client';

import { createContext, useState } from 'react';

export const GalleryContext = createContext();

export const GalleryProvider = ({ children }) => {
  const [seed, setSeed] = useState(0);
  const [photos, setPhotos] = useState([]);
  const [currentPhotoId, setCurrentPhotoId] = useState(null);

  const updateSeed = () => {
    setSeed((prev) => prev + 1);
  };

  const setGalleryPhotos = (newPhotos) => {
    setPhotos(newPhotos);
  };

  const getCurrentPhoto = () => {
    return photos.find((photo) => photo.id === currentPhotoId);
  };

  const getPhotoIndex = () => {
    return photos.findIndex((photo) => photo.id === currentPhotoId);
  };

  return (
    <GalleryContext.Provider
      value={{
        seed,
        updateSeed,
        photos,
        setGalleryPhotos,
        currentPhotoId,
        setCurrentPhotoId,
        getCurrentPhoto,
        getPhotoIndex,
      }}
    >
      {children}
    </GalleryContext.Provider>
  );
};
