import { Stack } from '@mui/material';
import AccountPopover from './AccountPopover';
import LanguagePopover from './LanguagePopover';
import NotificationPopover from './NotificationPopover';

export default function DashboardHeader() {
  return (
    <Stack
      width="100%"
      direction="row"
      alignItems="center"
      justifyContent="flex-end"
      spacing={{ xs: 0.5, SmartButton: 1.5 }}
    >
      <LanguagePopover />
      <NotificationPopover />
      <AccountPopover />
    </Stack>
  );
}
