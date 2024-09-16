/* eslint-disable no-shadow */
/* eslint-disable react/no-array-index-key */
// @mui
import { Box, Stack, Typography } from '@mui/material';

// @next

// others
import { useTranslations } from 'next-intl';
import Link from 'next/link';

const list = [
  {
    name: 'overview',
    items: [
      {
        id: 1,
        name: 'instructions-documents',
        path: '/notice',
      },
      {
        id: 2,
        name: 'api-service-documents',
        path: '',
      },
    ],
  },
  {
    name: 'hotline',
    items: [
      {
        id: 1,
        name: 'local-phone',
        path: '',
      },
      {
        id: 2,
        name: 'phone',
        path: '',
      },
    ],
  },
  {
    name: 'email',
    items: [
      {
        id: 1,
        name: 'sales-email',
        path: '',
      },
      {
        id: 2,
        name: 'it-support-email',
        path: '',
      },
    ],
  },
];

export default function Contact({ style, stackStyle, subStackStyle }) {
  const t = useTranslations();

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        alignItems: 'center',
        width: '100%',
        rowGap: 2,
        ...style,
      }}
    >
      {list.map((item) => (
        <Stack
          key={item.name}
          spacing={2}
          useFlexGap
          sx={{
            width: 'fit-content',
            flexWrap: 'wrap',
            ...stackStyle,
          }}
        >
          <Box>{t(item.name)}</Box>
          <Stack
            spacing={1}
            sx={{
              ...subStackStyle,
            }}
          >
            {item.items.map((_item) => (
              <Box
                key={_item.id}
                sx={{
                  display: 'flex',
                  flexWrap: 'wrap',
                  width: '100%',
                  cursor: 'pointer',
                }}
              >
                <Link
                  target="_blank"
                  href={_item.path}
                  style={{
                    textDecoration: 'none',
                  }}
                >
                  <Typography
                    style={{
                      textDecoration: 'none',
                      color: '#00C6FF',
                      display: 'block',
                      width: '100%',
                    }}
                  >
                    {t(_item.name)}
                  </Typography>
                </Link>
              </Box>
            ))}
          </Stack>
        </Stack>
      ))}
    </Box>
  );
}
