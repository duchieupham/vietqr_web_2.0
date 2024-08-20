import { useState, useEffect } from 'react';

const useImage = (imageId) => {
  const [imageUri, setImageUri] = useState(null);
  const baseUrl = process.env.NEXT_PUBLIC_API_URL;

  useEffect(() => {
    if (!imageId) return; // Return early if imageId is not provided.
    try {
      const stringUrl = `${baseUrl}/images/${imageId}`;
      setImageUri(stringUrl);
    } catch (error) {
      console.error('Failed to construct image URL:', error);
      setImageUri(null); // Reset the state in case of an error.
    }
  }, []);

  return imageUri;
};

export default useImage;
