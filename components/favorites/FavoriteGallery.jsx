'use client';

import { useContext, useEffect, useState } from 'react';
import { Gallery } from '@/components/Gallery';
import { ShowErrorContainer } from '@/components/ShowErrorContainer';
import { getLocalStorageData } from '@/services/localStorage';

import styles from '@/styles/gallery.module.css';
import { GalleryContext } from '../GalleryProvider';

export const FavoriteGallery = () => {
  const [photos, setPhotos] = useState([]);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const { seed } = useContext(GalleryContext);

  useEffect(() => {
    try {
      const localData = getLocalStorageData();
      if (!localData || !localData.favorites) {
        return;
      }
      setPhotos(localData.favorites);
    } catch (err) {
      setError('Failed to load favorites');
    } finally {
      setIsLoading(false);
    }
  }, [seed]);

  return (
    <>
      {!error ? (
        <Gallery photos={photos} />
      ) : (
        <ShowErrorContainer error={error} />
      )}
      {!error && !isLoading && photos.length === 0 && (
        <div className={styles.emptyState}>
          <p>No favorite images yet</p>
        </div>
      )}
    </>
  );
};
