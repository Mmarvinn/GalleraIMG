import { FavoriteGallery } from '@/components/favorites/FavoriteGallery';

import styles from '@/styles/home.module.css';

export const metadata = {
  title: 'GalleraIMG | Favorites',
  description:
    'View and manage your favorite images from our gallery collection. Access your personally curated selection.',
};

export default function Favorites() {
  return (
    <main id='main' className={styles.main}>
      <FavoriteGallery />
    </main>
  );
}
