import { useState, useEffect } from 'react';

const useImage = (imageId) => {
  const [imageUri, setImageUri] = useState('');
  const baseUrl = process.env.NEXT_PUBLIC_API_URL;

  useEffect(() => {
    if (!imageId) return; // Return early if imageId is not provided.
    try {
      const stringUrl = `${baseUrl}/images/${imageId}`;
      if (stringUrl) setImageUri(stringUrl);
    } catch (error) {
      // console.error('Failed to construct image URL:', error);
      setImageUri(''); // Reset the state in case of an error.
    }
  }, [imageId]);

  return imageUri;
};

export default useImage;
