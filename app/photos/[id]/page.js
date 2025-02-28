import { notFound } from 'next/navigation';
import { PhotoDetails } from '@/components/PhotoDetails';
import { getPhotoByIdApi } from '@/api/api';

export async function generateMetadata({ params }) {
  const newParams = await params;
  const { id } = newParams;

  return {
    title: `Photo ${id} | GalleraIMG`,
    description: 'View photo details and related images',
  };
}

export default async function PhotoPage({ params }) {
  const newParams = await params;
  const { id } = newParams;

  if (!id) {
    notFound();
  }

  try {
    const { photo, error } = await getPhotoByIdApi(id); // good for SEO

    if (error || !photo) {
      notFound();
    }

    return (
      <main id='detailsMain'>
        <PhotoDetails photo={photo} />
      </main>
    );
  } catch (err) {
    notFound();
  }
}
