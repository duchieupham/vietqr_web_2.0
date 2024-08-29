import { Box } from '@mui/material';

// import required modules
import Image from 'next/image';
import { useEffect, useState } from 'react';
import Carousel from 'react-multi-carousel';

import 'react-multi-carousel/lib/styles.css';

const responsive = {
  superLargeDesktop: {
    breakpoint: { max: 4000, min: 2560 },
    items: 10,
  },
  largeDesktop: {
    breakpoint: { max: 2560, min: 1920 },
    items: 8,
  },
  desktop: {
    breakpoint: { max: 1920, min: 1440 },
    items: 6,
  },
  largeTablet: {
    breakpoint: { max: 1440, min: 1280 },
    items: 5,
  },
  tablet: {
    breakpoint: { max: 1280, min: 960 },
    items: 4,
  },
  smallTablet: {
    breakpoint: { max: 960, min: 640 },
    items: 3,
  },
  mobile: {
    breakpoint: { max: 640, min: 320 },
    items: 2,
  },
  smallMobile: {
    breakpoint: { max: 320, min: 0 },
    items: 1,
  },
};

export default function CarouselSlider({ initialValues }) {
  const [images, setImages] = useState([]);
  const baseUrl = process.env.NEXT_PUBLIC_API_URL;

  function handleConvertImage(_images) {
    const convertedImages = _images?.map((image) => {
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
      // console.log('Initial Values:', initialValues); // Debugging
      handleConvertImage(initialValues);
    }
  }, [initialValues]);
  // console.log('images:', images); // Debugging

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
        centerMode
        autoPlay
        // autoPlaySpeed={1}
        customTransition="all 5s linear"
        removeArrowOnDeviceType={['tablet', 'mobile']}
        arrows={false}
        transitionDuration={1000}
        pauseOnHover={false}
      >
        {images.length > 0 ? (
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
                  height={70}
                  width={150}
                  sizes="(max-width: 640px) 100vw, (max-width: 960px) 50vw, (max-width: 1440px) 33vw, 25vw"
                  style={{
                    objectFit: 'contain',
                    padding: '1rem',
                  }}
                />
              )}
            </Box>
          ))
        ) : (
          <div>Loading...</div>
        )}
      </Carousel>
    </Box>
  );
}
