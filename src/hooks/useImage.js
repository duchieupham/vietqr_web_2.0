import { useEffect, useState } from 'react';

const useImage = (src, style) => {
  const [image, setImage] = useState(null);
  useEffect(() => {
    const img = new Image();
    img.src = src;
    img.onload = () => {
      setImage(img);
    };
  }, [src]);
  return image;
};
export default useImage;
