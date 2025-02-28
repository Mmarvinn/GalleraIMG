'use client';

import Image from 'next/image';
import { useRouter } from 'next/navigation';

import { FavoriteBadge } from './FavoriteBadge';

import styles from '@/styles/gallery.module.css';

export const ImageContainer = ({ photo }) => {
  const router = useRouter();

  const handleClick = () => {
    router.push(`/photos/${photo.id}`);
  };

  return (
    <div key={photo.id} className={styles.imageContainer}>
      <FavoriteBadge photo={photo} />
      <Image
        onClick={handleClick}
        src={photo.urls.regular}
        alt={photo.alt_description || 'Gallery image'}
        width={photo.width}
        height={photo.height}
        placeholder='blur'
        blurDataURL={photo.blur_hash || photo.urls.thumb}
        className={styles.image}
        loading='lazy'
      />
    </div>
  );
};
