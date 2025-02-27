import { getPhotosListApi } from '@/api/api';
import { HomeGallery } from '@/components/HomeGallery';
import { ShowErrorContainer } from '@/components/ShowErrorContainer';

export const metadata = {
  title: 'GalleraIMG | Home',
  description:
    'Explore our curated collection of stunning images in a modern, responsive gallery experience.',
};

export default async function Home() {
  const { photos, pagination, error } = await getPhotosListApi(1, 20);

  return (
    <main id='main'>
      {!error ? (
        <HomeGallery initialPhotos={photos} />
      ) : (
        <ShowErrorContainer error={error} />
      )}
    </main>
  );
}
