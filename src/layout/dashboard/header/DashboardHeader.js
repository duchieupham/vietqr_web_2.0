import { Box, MenuItem, Select, Stack } from '@mui/material';
import { DASHBOARD_TYPE } from '~/constants/dashboard';
import { useAppSelector } from '~/redux/hook';
import AccountPopover from './AccountPopover';
import LanguagePopover from './LanguagePopover';
import NotificationPopover from './NotificationPopover';

export default function DashboardHeader() {
  const { dashboardType } = useAppSelector((store) => store.app);

  return (
    <Stack
      width="100%"
      direction="row"
      alignItems="center"
      justifyContent="space-between"
      spacing={{ xs: 0.5, SmartButton: 1.5 }}
    >
      <Select
        value={dashboardType.id}
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
            {type.label}
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
