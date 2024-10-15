import { BASE_URL } from '~/constants';

const getImage = (imageId) => {
  if (!imageId) return null; // Return early if imageId is not provided.
  const stringUrl = `${BASE_URL}/images/${imageId}`;
  return stringUrl;
};

export default getImage;
