import { FavoriteGallery } from '@/components/favorites/FavoriteGallery';

export const metadata = {
  title: 'GalleraIMG | Favorites',
  description:
    'View and manage your favorite images from our gallery collection. Access your personally curated selection.',
};

export default function Favorites() {
  return (
    <main id='main'>
      <FavoriteGallery />
    </main>
  );
}
