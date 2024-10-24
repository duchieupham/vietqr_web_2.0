import { BASE_URL } from '~/constants/config';

const getImage = (imageId) => {
  const stringUrl = `${BASE_URL}/images/${imageId}`;
  return imageId ? stringUrl : null;
};

export default getImage;
