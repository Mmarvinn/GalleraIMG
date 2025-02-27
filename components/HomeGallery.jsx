'use client';

import { useState } from 'react';
import { Gallery } from './Gallery';
import { SearchBar } from './SearchBar';
import { searchPhotosApi } from '@/api/api';
import { ShowErrorContainer } from './ShowErrorContainer';

import styles from '@/styles/gallery.module.css';

export const HomeGallery = ({ initialPhotos }) => {
  const [photos, setPhotos] = useState(initialPhotos);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleSearch = async (value) => {
    if (!value.trim()) {
      setPhotos(initialPhotos);
      return;
    }

    try {
      setIsLoading(true);
      setError(null);
      const { photos: searchResults, error } = await searchPhotosApi(value);

      if (error) {
        throw new Error(error);
      }

      setPhotos(searchResults);
    } catch (err) {
      setError(err.message);
    } finally {
      setIsLoading(false);
    }
  };

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
