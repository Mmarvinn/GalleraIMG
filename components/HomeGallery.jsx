'use client';

import { useContext, useEffect, useState } from 'react';

import { searchPhotosApi } from '@/api/api';
import { Gallery } from './Gallery';
import { SearchBar } from './SearchBar';
import { ShowErrorContainer } from './ShowErrorContainer';
import { GalleryContext } from './GalleryProvider';

import styles from '@/styles/gallery.module.css';

export const HomeGallery = ({ initialPhotos }) => {
  const { setGalleryPhotos } = useContext(GalleryContext);

  const [photos, setPhotos] = useState(initialPhotos);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const setPhotosInStoreAndState = (newPhotos) => {
    setPhotos(newPhotos);
    setGalleryPhotos(newPhotos);
  };

  const handleSearch = async (value) => {
    if (!value.trim()) {
      setPhotosInStoreAndState(initialPhotos);
      return;
    }

    try {
      setIsLoading(true);
      setError(null);
      const { photos: searchResults, error } = await searchPhotosApi(value);

      if (error) {
        throw new Error(error);
      }

      setPhotosInStoreAndState(searchResults);
    } catch (err) {
      setError(err.message);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    setGalleryPhotos(initialPhotos);
  }, []);

  return (
    <>
      <SearchBar onSearch={handleSearch} />
      {error ? (
        <ShowErrorContainer error={error} />
      ) : isLoading ? (
        <div className={styles.emptyState}>
          <p>We are searching...</p>
        </div>
      ) : (
        <Gallery photos={photos} />
      )}
    </>
  );
};
