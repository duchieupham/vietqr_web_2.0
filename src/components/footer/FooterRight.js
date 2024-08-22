import { Box } from '@mui/material';

// import required modules
import Image from 'next/image';
import { useEffect, useState } from 'react';
import Carousel from 'react-multi-carousel';

const responsive = {
  superLargeDesktop: {
    breakpoint: { max: 4000, min: 1920 },
    items: 8,
  },
  largeDesktop: {
    breakpoint: { max: 1920, min: 1440 },
    items: 6,
    slidesToSlide: 3,
  },
  desktop: {
    breakpoint: { max: 1440, min: 1024 },
    items: 4,
    slidesToSlide: 2,
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
    <Box component="div">
      <Carousel
        responsive={responsive}
        infinite
        centerMode
        rtl
        autoPlay
        autoPlaySpeed={950}
        customTransition="transform 950ms ease-in-out"
        transitionDuration={950}
        removeArrowOnDeviceType={['tablet', 'mobile']}
        arrows={false}
      >
        {images &&
          images.map((image) => (
            <Box
              component="div"
              key={image.bankCode}
              sx={{
                overflow: 'hidden',
                height: '100%',
                position: 'relative',
              }}
            >
              {image.imageId && (
                <Image
                  src={image.imageId}
                  alt={image.bankShortName}
                  height={40}
                  width={90}
                  sizes="(max-width: 576px) 30px,
                       (max-width: 768px) 40px,
                       (max-width: 1024px) 70px"
                  loading="lazy"
                  quality={100}
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
