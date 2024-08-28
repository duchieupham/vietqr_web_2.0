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

export default function Contact({ style, stackStyle, subStackStyle }) {
  const t = useTranslations();
  return (
    <Box
      component="div"
      sx={{
        display: 'flex',
        flexWrap: 'wrap',
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        width: '100%',
        ...style,
      }}
    >
      {list.map((item, index) => (
        <Stack
          key={index}
          spacing={2}
          useFlexGap
          sx={{ width: 'fit-content', flexWrap: 'wrap', ...stackStyle }}
        >
          <Box component="div">{t(item.name)}</Box>
          <Stack
            spacing={1}
            sx={{
              ...subStackStyle,
            }}
          >
            {item.items.map((_item, index) => (
              <Box
                key={index}
                component="div"
                sx={{
                  display: 'flex',
                  flexWrap: 'wrap',
                  width: '100%',
                }}
              >
                <Link
                  href="/"
                  style={{
                    textDecoration: 'none',
                    color: '#00C6FF',
                    display: 'block',
                    width: '100%',
                  }}
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
