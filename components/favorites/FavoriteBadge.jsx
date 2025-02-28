'use client';

import { useContext, useEffect, useState } from 'react';
import { HeartFilled, HeartOutlined } from '@ant-design/icons';

import {
  getLocalStorageData,
  setLocalStorageData,
} from '@/services/localStorage';

import styles from '@/styles/favorites.module.css';
import { GalleryContext } from '../GalleryProvider';

export const FavoriteBadge = ({ photo }) => {
  const [isFavorite, setFavorite] = useState(false);
  const { updateSeed } = useContext(GalleryContext);

  const toggleFavorite = (e) => {
    e.stopPropagation();
    const localData = getLocalStorageData();

    if (!localData || !localData.favorites) {
      setLocalStorageData({ favorites: [photo] });
      setFavorite(true);
      return;
    }

    const isPhotoInFavorites = localData.favorites.some(
      (item) => item.id === photo.id
    );

    let newFavorites = [];

    if (isPhotoInFavorites) {
      newFavorites = localData.favorites.filter((item) => item.id !== photo.id);
      setFavorite(false);
      updateSeed();
    } else {
      newFavorites = [...localData.favorites, photo];
      setFavorite(true);
    }

    setLocalStorageData({ favorites: newFavorites });
  };

  useEffect(() => {
    const localData = getLocalStorageData();

    if (!localData || !localData.favorites.length) {
      return;
    }

    localData.favorites.forEach((item) => {
      if (item.id === photo.id) {
        setFavorite(true);
      }
    });
  }, []);

  return (
    <div
      className={styles.favoriteBadgeWrapper}
      onClick={toggleFavorite}
      aria-label='favorite add/remove favorite'
    >
      {isFavorite ? (
        <HeartFilled style={{ color: '#B12E2A', fontSize: '17px' }} />
      ) : (
        <HeartOutlined style={{ color: '#B12E2A', fontSize: '17px' }} />
      )}
    </div>
  );
};
