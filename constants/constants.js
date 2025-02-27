const BASE_URL = 'https://api.unsplash.com';

const PHOTOS = '/photos';

export const GET_PHOTOS_PER_PAGE_URL = (photosPerPage) =>
  `${BASE_URL}${PHOTOS}?per_page=${photosPerPage}`;
