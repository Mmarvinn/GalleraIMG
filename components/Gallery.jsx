'use client';

import styles from '@/styles/gallery.module.css';

import { ImageContainer } from './ImageContainer';

export const Gallery = ({ photos }) => {
  return (
    <>
      {photos.length !== 0 ? (
        <div className={styles.gallery}>
          {photos.map((photo) => (
            <ImageContainer photo={photo} key={photo.id} />
          ))}
        </div>
      ) : (
        <div className={styles.emptyState}>
          <p>Sorry, nothing was found for your request</p>
        </div>
      )}
    </>
  );
};
