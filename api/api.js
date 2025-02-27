// import { GET_PHOTOS_PER_PAGE_URL } from '@/constants/constants';
// import { validateResponse } from '@/services/validateResponse';

// export const getPhotosApi = async (photosPerPage) => {
//   try {
//     const res = await fetch(GET_PHOTOS_PER_PAGE_URL(photosPerPage), {
//       headers: {
//         Authorization: `Client-ID ${process.env.ACCESS_KEY}`,
//         'Content-Type': 'application/json',
//       },
//       method: 'GET',
//     });

//     await validateResponse(res);

//     const linkHeader = res.headers.get('link');
//     const data = await res.json();

//     return {
//       photos: data,
//       pagination: linkHeader,
//       error: null,
//     };
//   } catch (error) {
//     return {
//       photos: [],
//       pagination: null,
//       error: error.message,
//     };
//   }
// };

import { createApi } from 'unsplash-js';

const api = createApi({
  accessKey: process.env.NEXT_PUBLIC_ACCESS_KEY,
});

export const getPhotosListApi = async (page, photosPerPage) => {
  try {
    const result = await api.photos.list({
      page: page,
      perPage: photosPerPage,
    });

    if (result.errors) {
      throw new Error(
        `Server responded with status: ${result.status} ${result.errors[0]}`
      );
    }

    const pagination = {
      total: result.response.total,
      perPage: photosPerPage,
      currentPage: page,
    };

    return {
      photos: result.response.results,
      pagination,
      error: null,
    };
  } catch (err) {
    return {
      photos: [],
      pagination: null,
      error: err.message,
    };
  }
};

export const searchPhotosApi = async (query) => {
  try {
    const result = await api.search.getPhotos({
      query,
      perPage: 20,
      page: 1,
    });

    if (result.errors) {
      throw new Error(
        `Server responded with status: ${result.status} ${result.errors[0]}`
      );
    }

    return {
      photos: result.response.results,
      error: null,
    };
  } catch (error) {
    return {
      photos: [],
      error: error.message,
    };
  }
};
