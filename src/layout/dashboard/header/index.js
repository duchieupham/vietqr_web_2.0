import { AppBar, Box, Stack, styled, Toolbar } from '@mui/material';
import AccountPopover from './AccountPopover';
import LanguagePopover from './LanguagePopover';
import NotificationPopover from './NotificationPopover';

export default function DashboardHeader() {
  return (
    <AppBarStyled>
      <ToolbarStyled>
        {/* Bread */}
        {/* Animated Logo VietQR */}
        <Box sx={{ flexGrow: 1 }} />
        {/* SearchBar */}
        <Stack
          direction="row"
          alignItems="center"
          spacing={{ xs: 0.5, SmartButton: 1.5 }}
        >
          <LanguagePopover />
          <NotificationPopover />
          <AccountPopover />
        </Stack>
      </ToolbarStyled>
    </AppBarStyled>
  );
}

const AppBarStyled = styled(AppBar)(({ theme }) => ({
  position: 'static',
  backgroundColor: 'transparent',
  boxShadow: 'none',
}));

const ToolbarStyled = styled(Toolbar)(({ theme }) => ({
  display: 'flex',
  justifyContent: 'space-between',
}));
