/* eslint-disable no-shadow */
/* eslint-disable react/no-array-index-key */
// @mui
import { Box, Stack, Typography } from '@mui/material';

// @next

// others
import { useTranslations } from 'next-intl';
import { useRouter } from 'next/navigation';

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
  const router = useRouter();

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        alignItems: 'center',
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
                onClick={() => {
                  router.push(_item.path);
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
              </Box>
            ))}
          </Stack>
        </Stack>
      ))}
    </Box>
  );
}
