import { Box, Stack, Typography } from '@mui/material';
import { useTranslations } from 'next-intl';
import Image from 'next/image';
import React from 'react';
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
        gap: { xs: 2, md: 15 },
        mt: {
          xs: 5,
          md: 0,
        },
        p: 2,
        borderRadius: 5,
        justifyContent: 'center',
        alignItems: 'center',
        display: 'flex',
        flexDirection: 'row-reverse',
      }}
    >
      <Box>
        <Image src="/images/clap.png" width={150} height={97} alt="image 499" />
      </Box>
      <Box>
        <Typography
          sx={{
            fontSize: {
              xs: 15,
              md: 20,
            },
            mb: {
              xs: 1,
              md: 2,
            },
            color: '#000000',
          }}
        >
          {t('noticeFeesApply')}
        </Typography>
        <Stack
          direction={{ xs: 'column', md: 'row' }}
          sx={{
            display: 'flex',
            justifyContent: 'space-around',
          }}
          spacing={1}
        >
          {feesApply('VND', 'THÁNG').map((item) => (
            <React.Fragment key={item.id}>
              <Box
                sx={{
                  marginLeft: { xs: 0, md: 25 },
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
                        xs: 20,
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
                        xs: 12,
                        md: 15,
                      },
                      color: '#666A72',
                      display: 'flex',
                      alignItems: 'flex-end',
                      marginBottom: 0.4,
                    }}
                  >
                    {item.type}
                  </Typography>
                </Box>
                <Typography
                  sx={{
                    whiteSpace: 'nowrap',
                    fontSize: {
                      xs: 12,
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
                    backgroundColor: '#DADADA',
                    display: { xs: 'none', md: 'block' },
                    marginRight: { xs: 0, md: '25px !important' },
                  }}
                />
              )}
            </React.Fragment>
          ))}
        </Stack>
      </Box>
    </Stack>
  );
}
