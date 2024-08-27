/* eslint-disable no-shadow */
/* eslint-disable react/no-array-index-key */
// @mui
import { Box, Stack } from '@mui/material';

// @next

// others
import { useTranslations } from 'next-intl';
import Link from 'next/link';

const list = [
  {
    name: 'overview',
    items: [
      {
        name: 'instructions-documents',
      },
      {
        name: 'api-service-documents',
      },
    ],
  },
  {
    name: 'hotline',
    items: [
      {
        name: 'local-phone',
      },
      {
        name: 'phone',
      },
    ],
  },
  {
    name: 'email',
    items: [
      {
        name: 'sales-email',
      },
      {
        name: 'it-support-email',
      },
    ],
  },
];

export default function Contact({ style }) {
  const t = useTranslations();
  return (
    <Box
      component="div"
      sx={{
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '100%',
        ...style,
      }}
    >
      {list.map((item, index) => (
        <Stack key={index} spacing={2}>
          <Box component="div">{t(item.name)}</Box>
          <Stack spacing={1}>
            {item.items.map((_item, index) => (
              <Box key={index} component="div">
                <Link
                  href="/"
                  style={{ textDecoration: 'none', color: '#00C6FF' }}
                >
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
