'use client';

import styles from '@/styles/gallery.module.css';

import { ImageContainer } from './ImageContainer';

export const Gallery = ({ photos }) => {
  return (
    <div className={styles.gallery}>
      {photos.map((photo) => (
        <ImageContainer photo={photo} key={photo.id} />
      ))}
    </div>
  );
};
