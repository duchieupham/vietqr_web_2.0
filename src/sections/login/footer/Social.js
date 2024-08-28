/* eslint-disable react/no-array-index-key */
/* eslint-disable no-shadow */
// @mui
import { useTranslations } from 'next-intl';
// @next
import Link from 'next/link';
// others
import { Box, Stack } from '@mui/material';
import Image from 'next/image';

const list = [
  {
    name: 'follow-us',
    items: [
      {
        name: 'telegram',
        icon: '',
        url: '/images/telegram.png',
      },
      {
        name: 'facebook',
        icon: '',
        url: '/images/fb.png',
      },
      {
        name: 'youtube',
        icon: '',
        url: '/images/youtube.png',
      },
    ],
  },
];
export default function Social({ style }) {
  const t = useTranslations();
  return (
    <Box
      // Why need component div?
      component="div"
      sx={{
        display: 'flex',
        width: '100%',
        justifyContent: {
          xs: 'center',
          lg: 'flex-start',
        },
        ...style,
      }}
    >
      {list.map((item, index) => (
        <Stack
          key={index}
          sx={{
            flexDirection: {
              xs: 'row',
              md: 'column',
            },
            alignItems: {
              xs: 'center',
              lg: 'flex-start',
            },
            justifyContent: {
              xs: 'space-between',
              lg: 'flex-start',
            },
            gap: 2,
          }}
        >
          <Box component="div" sx={{}}>
            {t(item.name)}
          </Box>
          <Stack
            sx={{
              display: 'flex',
              alignItems: 'center',
              flexDirection: 'row',
              gap: '1rem',
              justifyItems: 'center',
              flexWrap: 'wrap',
            }}
          >
            {item.items.map((_item, index) => (
              <Box key={index} component="div">
                <Link
                  href="/"
                  style={{ textDecoration: 'none', color: '#00C6FF' }}
                >
                  <Image
                    src={_item.url}
                    alt={_item.name}
                    width={40}
                    height={40}
                    quality={100}
                    priority
                    style={{
                      objectFit: 'contain',
                    }}
                  />
                </Link>
              </Box>
            ))}
          </Stack>
        </Stack>
      ))}
    </Box>
  );
}
