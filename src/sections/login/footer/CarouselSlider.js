import { Box } from '@mui/material';

// import required modules
import Image from 'next/image';
import { useEffect, useState } from 'react';
import Carousel from 'react-multi-carousel';

import 'react-multi-carousel/lib/styles.css';

const responsive = {
  superLargeDesktop: {
    breakpoint: { max: 4000, min: 1920 },
    items: 10,
  },
  largeDesktop: {
    breakpoint: { max: 1920, min: 1440 },
    items: 10,
  },
  desktop: {
    breakpoint: { max: 1440, min: 1024 },
    items: 10,
  },
  tablet: {
    breakpoint: { max: 1024, min: 768 },
    items: 6,
  },
  smallTablet: {
    breakpoint: { max: 768, min: 576 },
    items: 5,
  },
  mobile: {
    breakpoint: { max: 576, min: 0 },
    items: 3,
  },
};

export default function CarouselSlider({ initialValues }) {
  const [images, setImages] = useState([]);
  const baseUrl = process.env.NEXT_PUBLIC_API_URL;

  function handleConvertImage(_images) {
    // console.log('_iamges:', _images); // Debugging

    const convertedImages = _images?.map((image) => {
      const imageUrl = `${baseUrl}/images/${image.imageId}`;
      return {
        ...image,
        imageId: imageUrl,
      };
    });

    // console.log('convertedImages:', convertedImages); // Debugging

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
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
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
