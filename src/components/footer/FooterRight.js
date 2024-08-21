import { Box } from '@mui/material';

// import required modules
import Image from 'next/image';
import { useEffect, useState } from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

const responsive = {
  superLargeDesktop: {
    breakpoint: { max: 4000, min: 3000 },
    items: 10,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 10,
    slidesToSlide: 2,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 3,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
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
      component="div"
      sx={{
        overflow: 'hidden',
      }}
    >
      <Carousel
        showDots={false}
        responsive={responsive}
        infinite
        autoPlay
        autoPlaySpeed={1000}
        customTransition="transform 500ms ease-in-out"
        removeArrowOnDeviceType={['tablet', 'mobile']}
        arrows={false}
      >
        {images &&
          images.map((image) => (
            <div key={image.bankCode}>
              {image.imageId && (
                <Image
                  quality={100}
                  priority
                  src={image.imageId}
                  alt={image.bankShortName}
                  height={40}
                  width={90}
                  style={{
                    objectFit: 'cover',
                    transition:
                      'opacity 0.3s ease-in-out, transform 0.3s ease-in-out',
                    willChange: 'transform, opacity',
                  }}
                />
              )}
            </div>
          ))}
      </Carousel>
    </Box>
  );
}
export default FooterRight;
