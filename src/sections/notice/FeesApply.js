import { Box, Stack, Typography } from '@mui/material';
import { useTranslations } from 'next-intl';
import { TextGradient } from '~/components/text';

const feesApply = (currency, time) => [
  {
    id: 1,
    fee: '55,000',
    type: `${currency}/${time}`,
    description: 'Dành cho khách hàng cá nhân',
  },
  {
    id: 2,
  },
  {
    id: 3,
    fee: '110,000',
    type: `${currency}/${time}`,
    description: 'Dành cho khách hàng doanh nghiệp',
  },
];

export default function FeesApply() {
  const t = useTranslations();
  return (
    <Stack
      sx={{
        gap: 2,
        p: 2,
        borderRadius: 5,
        justifyContent: 'center',
        alignItems: 'center',
        lineHeight: 1.5,
      }}
    >
      <Box>
        <Box
          sx={{
            mb: 1,
          }}
        >
          <Typography
            sx={{
              fontSize: {
                xxs: 15,
                md: 20,
              },
              lineHeight: 1.2,
              whiteSpace: 1.2,
            }}
          >
            {t('noticeFeesApply')}
          </Typography>
        </Box>
        <Stack
          direction={{ xxs: 'column', md: 'row' }}
          sx={{
            display: {
              xxs: 'flex',
              md: 'flex',
            },
            justifyContent: 'space-around',
          }}
          spacing={5}
        >
          {feesApply('VND', 'THÁNG').map((item, key) => (
            <>
              <Box
                key={item.id || key}
                sx={{
                  marginLeft: { xxs: 0, md: 25 },
                }}
              >
                <Box
                  sx={{
                    display: 'flex',
                    flexDirection: 'row',
                    textAlign: 'start',
                    gap: 1,
                  }}
                >
                  <TextGradient
                    style={{
                      whiteSpace: 'nowrap',
                      fontSize: {
                        xxs: 20,
                        md: 25,
                      },
                      fontWeight: 'bold',
                    }}
                  >
                    {item.fee}
                  </TextGradient>
                  <Typography
                    sx={{
                      whiteSpace: 'nowrap',
                      fontSize: {
                        xxs: 12,
                        md: 15,
                      },
                      color: '#666A72',
                      display: 'flex',
                      alignItems: 'flex-end',
                      marginBottom: 0.5,
                    }}
                  >
                    {item.type}
                  </Typography>
                </Box>
                <Typography
                  sx={{
                    whiteSpace: 'nowrap',
                    fontSize: {
                      xxs: 12,
                      md: 15,
                    },
                  }}
                >
                  {item.description}
                </Typography>
              </Box>
              {item.id % 2 === 0 && (
                <Box
                  sx={{
                    width: '1px',
                    height: 'auto',
                    backgroundColor: '#E0E0E0',
                    display: { xxs: 'none', md: 'block' },
                    marginRight: { xxs: 0, md: '25px !important' },
                  }}
                />
              )}
            </>
          ))}
        </Stack>
      </Box>
    </Stack>
  );
}
