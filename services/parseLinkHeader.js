export const parseLinkHeader = (linkHeader) => {
  if (!linkHeader) return {};

  return linkHeader.split(',').reduce((acc, link) => {
    const match = link.match(/<(.+)>;\s+rel="(.+)"/);
    if (match) {
      acc[match[2]] = match[1];
    }
    return acc;
  }, {});
};
