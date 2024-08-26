/* eslint-disable react/no-array-index-key */
/* eslint-disable no-shadow */
// @mui
import { useTranslations } from 'next-intl';
// @next
import Link from 'next/link';
// others
import { Box, Stack } from '@mui/material';

const list = [
  {
    name: 'follow-us',
    items: [
      {
        name: 'telegram',
        icon: '',
        url: '',
      },
      {
        name: 'facebook',
        icon: '',
        url: '',
      },
      {
        name: 'youtube',
        icon: '',
        url: '',
      },
    ],
  },
];
export default function Social() {
  const t = useTranslations();
  return (
    <Box
      component="div"
      sx={{
        width: '100%',
      }}
    >
      {list.map((item, index) => (
        <Stack key={index} spacing={2}>
          <Box component="div">{t(item.name)}</Box>
          <Stack
            sx={{
              display: 'flex',
              alignItems: 'center',
              flexDirection: 'row',
              gap: '1rem',
              justifyItems: 'center',
            }}
          >
            {item.items.map((_item, index) => (
              <Box key={index} component="div">
                <Link href="/" style={{ textDecoration: 'none' }}>
                  {t(_item.name)}
                </Link>
              </Box>
            ))}
          </Stack>
        </Stack>
      ))}
    </Box>
  );
}
