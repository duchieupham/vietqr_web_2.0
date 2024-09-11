import { Box, MenuItem, Select, Stack, Typography } from '@mui/material';
import { DASHBOARD_TYPE } from '~/constants/dashboard';
import { useAppDispatch, useAppSelector } from '~/redux/hook';
import { setDashboardType } from '~/redux/slices/appSlice';
import { useTranslations } from 'next-intl';
import { usePathname, useRouter } from 'next/navigation';
import { useEffect } from 'react';
import AccountPopover from './AccountPopover';
import LanguagePopover from './LanguagePopover';
import NotificationPopover from './NotificationPopover';

export default function DashboardHeader() {
  const t = useTranslations();
  const router = useRouter();
  const pathname = usePathname();
  const { dashboardType } = useAppSelector((store) => store.app);

  const dispatch = useAppDispatch();

  const onChangeDashboardType = (event) => {
    const foundType = DASHBOARD_TYPE.find(
      (type) => type.id === event.target.value,
    );
    const { id, children } = foundType;

    // dispatch(setDashboardType(id));
    router.push(children[0].path); // TO BE IMPROVED
  };

  useEffect(() => {
    const foundType = DASHBOARD_TYPE.find((type) =>
      pathname.includes(type.path),
    );
    if (foundType) {
      dispatch(setDashboardType(foundType?.id));
    }
  }, [pathname]);

  return (
    <Stack
      width="100%"
      direction="row"
      alignItems="center"
      justifyContent="space-between"
      spacing={{ xs: 0.5, SmartButton: 1.5 }}
    >
      <Select
        value={dashboardType}
        onChange={onChangeDashboardType}
        MenuProps={{
          PaperProps: {
            sx: {
              '& .MuiMenu-list': {
                paddingTop: 0,
                paddingBottom: 0,
              },
            },
          },
        }}
        sx={{
          '.MuiOutlinedInput-notchedOutline': {
            border: 'none',
          },
          '.MuiSelect-icon': {
            color: 'inherit',
          },
          fontSize: {
            xs: '12px',
            md: '15px',
          },
          '.MuiSelect-select': {
            display: 'flex',
            alignItems: 'center',
            gap: 1,
          },
          '& .MuiList-root-MuiMenu-list': {
            paddingTop: 0,
            paddingBottom: 0,
          },
        }}
      >
        {DASHBOARD_TYPE.map((type) => (
          <MenuItem key={type.id} value={type.id}>
            <Typography sx={{ fontWeight: 'bold' }}>{t(type.label)}</Typography>
          </MenuItem>
        ))}
      </Select>
      <Box sx={{ display: 'flex', gap: 1 }}>
        <LanguagePopover />
        <NotificationPopover />
        <AccountPopover />
      </Box>
    </Stack>
  );
}
