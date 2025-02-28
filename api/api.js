import { createApi } from 'unsplash-js';

const api = createApi({
  // accessKey: process.env.NEXT_PUBLIC_UNSPLASH_ACCESS_KEY,
  accessKey: process.env.UNSPLASH_ACCESS_KEY,
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
      perPage: 10,
      page: 1,
    });

    if (result.errors) {
      throw new Error(
        `Server responded with status: ${result.status} ${result.errors[0]}`
      );
    }

    const url = new URL(result.originalResponse.url);

    return {
      searchParams: url.search,
      photos: result.response.results,
      error: null,
    };
  } catch (error) {
    return {
      photos: [],
      searchParams: null,
      error: error.message,
    };
  }
};

export const getPhotoByIdApi = async (photoId) => {
  try {
    const result = await api.photos.get({ photoId });

    if (result.errors) {
      throw new Error(
        `Server responded with status: ${result.status} ${result.errors[0]}`
      );
    }

    return {
      photo: result.response,
      error: null,
    };
  } catch (error) {
    return {
      photo: null,
      error: error.message,
    };
  }
};
