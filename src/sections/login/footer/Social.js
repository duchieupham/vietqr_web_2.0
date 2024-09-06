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
      sx={{
        display: 'flex',
        width: '100%',
        justifyContent: {
          xs: 'center',
          lg: 'flex-start',
        },
        mb: 3.5,
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
              md: 'flex-start',
            },
            justifyContent: {
              xs: 'space-between',
              md: 'flex-start',
            },
            gap: 1,
          }}
        >
          <Box
            sx={{
              whiteSpace: 'nowrap',
            }}
          >
            {t(item.name)}
          </Box>
          <Stack
            sx={{
              display: 'flex',
              alignItems: 'center',
              flexDirection: 'row',
              gap: '0.3rem',
              justifyItems: 'center',
              flexWrap: {
                xs: '',
                md: 'wrap',
              },
              whiteSpace: 'nowrap',
            }}
          >
            {item.items.map((_item, index) => (
              <Box key={index}>
                <Link
                  href="/"
                  style={{
                    textDecoration: 'none',
                    color: '#00C6FF',
                  }}
                >
                  <Image
                    src={_item.url}
                    alt={_item.name}
                    width={40}
                    height={40}
                    quality={100}
                    priority
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
