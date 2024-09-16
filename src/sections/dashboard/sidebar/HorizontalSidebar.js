import { Box, Stack, styled, Typography } from '@mui/material';
import { useTranslations } from 'next-intl';
import { DASHBOARD_TYPE } from '~/constants/dashboard';
import { useAppSelector } from '~/redux/hook';

const PageWrapper = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexGrow: 1,
  height: 50,
  backgroundColor: theme.palette.lily.white.linear,
}));

export default function HorizontalSidebar() {
  const { dashboardType } = useAppSelector((state) => state.app);
  const t = useTranslations();

  const displayedType = DASHBOARD_TYPE.find(
    (type) => type.value === dashboardType,
  );

  return (
    <PageWrapper>
      {/* dashboard */}
      <Stack>
        {displayedType.map((type) => (
          <Box key={type.id}>
            <Typography>{t(type.label)}</Typography>
          </Box>
        ))}
      </Stack>
    </PageWrapper>
  );
}
