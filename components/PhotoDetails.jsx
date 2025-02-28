'use client';

import Image from 'next/image';
import { useState, useEffect, useRef, useContext } from 'react';
import { Carousel } from 'antd';

import { GalleryContext } from './GalleryProvider';

import styles from '@/styles/photoDetails.module.css';
import { FavoriteBadge } from './FavoriteBadge';

export const PhotoDetails = ({ photo: initialPhoto }) => {
  const carouselRef = useRef();
  const { photos: contextPhotos } = useContext(GalleryContext);

  const [photos, setPhotos] = useState([initialPhoto]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isLoading, setIsLoading] = useState(true);

  const loadPhotos = () => {
    setIsLoading(true);
    if (!contextPhotos || contextPhotos.length === 0) {
      setIsLoading(false);
      return;
    }

    try {
      const morePhotos = [...contextPhotos];
      const indexOfInitialPhoto = morePhotos.findIndex(
        (photo) => photo.id === initialPhoto.id
      );

      setPhotos(morePhotos);
      setCurrentIndex(indexOfInitialPhoto !== -1 ? indexOfInitialPhoto : 0);
    } catch (error) {
      console.error('Failed to load more photos:', error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleSlideChange = (current) => {
    setCurrentIndex(current);
    const id = photos[current].id;
    window.history.replaceState({}, '', `/photos/${id}`);
  };

  // TODO: Loading state

  useEffect(() => {
    loadPhotos();
  }, [initialPhoto.id]);

  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <div className={styles.carouselContainer}>
          <Carousel
            ref={carouselRef}
            afterChange={handleSlideChange}
            initialSlide={currentIndex}
            infinite={false}
            arrows
            dots
            className={styles.carousel}
          >
            {photos.map((photo) => (
              <div key={photo.id} className={styles.imageContainer}>
                <FavoriteBadge photo={photo} key={photo.id} />
                <Image
                  src={photo.urls.regular}
                  alt={photo.alt_description || 'Unsplash photo'}
                  fill
                  sizes='(max-width: 768px) 100vw, 60vw'
                  priority={photo.id === initialPhoto.id}
                  className={styles.image}
                />
              </div>
            ))}
          </Carousel>
        </div>

        <div className={styles.details}>
          <h1 className={styles.title}>
            {photos[currentIndex].alt_description}
          </h1>

          {photos[currentIndex].description && (
            <p className={styles.description}>
              {photos[currentIndex].description}
            </p>
          )}

          <div className={styles.userInfo}>
            <div className={styles.userHeader}>
              {photos[currentIndex].user.profile_image && (
                <Image
                  src={photos[currentIndex].user.profile_image.medium}
                  alt={photos[currentIndex].user.name}
                  width={40}
                  height={40}
                  className={styles.userAvatar}
                />
              )}
              <div className={styles.userData}>
                <h3 className={styles.userName}>
                  {photos[currentIndex].user.name}
                </h3>
                <p className={styles.userUsername}>
                  @{photos[currentIndex].user.username}
                </p>
              </div>
            </div>

            <div className={styles.stats}>
              <div className={styles.stat}>
                <span>Likes</span>
                <span>{photos[currentIndex].likes ?? '0'}</span>
              </div>
              <div className={styles.stat}>
                <span>Views</span>
                <span>{photos[currentIndex].views ?? '0'}</span>
              </div>
              <div className={styles.stat}>
                <span>Downloads</span>
                <span>{photos[currentIndex].downloads ?? '0'}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
