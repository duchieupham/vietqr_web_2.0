import { Box } from '@mui/material';

// import required modules
import Image from 'next/image';
import { useEffect, useState } from 'react';
import Carousel from 'react-multi-carousel';

import 'react-multi-carousel/lib/styles.css';

const responsive = {
  desktop: {
    breakpoint: { max: 1920, min: 1024 },
    items: 8,
  },
  tablet: {
    breakpoint: { max: 1024, min: 768 },
    items: 3,
  },
  smallTablet: {
    breakpoint: { max: 768, min: 576 },
    items: 3,
  },
  mobile: {
    breakpoint: { max: 576, min: 0 },
    items: 3,
  },
};

function FooterRight({ initialValues }) {
  const [images, setImages] = useState([]);
  const baseUrl = process.env.NEXT_PUBLIC_API_URL;

  function handleConvertImage(_images) {
    const convertedImages = _images.map((image) => {
      const imageUrl = `${baseUrl}/images/${image.imageId}`;
      return {
        ...image,
        imageId: imageUrl,
      };
    });

    if (convertedImages) {
      setImages(convertedImages);
    }
  }

  useEffect(() => {
    if (initialValues) {
      handleConvertImage(initialValues);
    }
  }, [initialValues]);

  return (
    <Box
      sx={{
        height: '100%',
        width: '100%',
      }}
    >
      <Carousel
        rewind={false}
        rewindWithAnimation={false}
        responsive={responsive}
        infinite
        autoPlay
        autoPlaySpeed={1}
        customTransition="all 1s linear"
        removeArrowOnDeviceType={['tablet', 'mobile']}
        arrows={false}
        transitionDuration={1000}
      >
        {images.length > 0 &&
          images?.map((image) => (
            <Box
              component="div"
              key={image.bankCode}
              sx={{
                overflow: 'hidden',
                height: '100%',
                position: 'relative',
              }}
            >
              {image && (
                <Image
                  quality={100}
                  priority
                  alt={image.bankShortName}
                  src={image.imageId}
                  height={60}
                  width={120}
                  sizes="(max-width: 576px) 30px,
                       (max-width: 768px) 80px,
                       (max-width: 1024px) 120px"
                  style={{
                    objectFit: 'contain',
                  }}
                />
              )}
            </Box>
          ))}
      </Carousel>
    </Box>
  );
}
export default FooterRight;
