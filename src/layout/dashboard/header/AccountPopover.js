import { Button, IconButton, ListItemIcon, MenuItem } from '@mui/material';
import { useTranslations } from 'next-intl';
import { useState } from 'react';
import MenuPopover from '~/components/MenuPopover';
import Profile from '~/components/Profile';
import { useAuthContext } from '~/contexts/hooks';
import useSnackbar from '~/hooks/useSnackbar';

export default function AccountPopover() {
  const t = useTranslations();
  const snack = useSnackbar();
  const [anchorEl, setAnchorEl] = useState(null);
  const { clear } = useAuthContext();

  const onClickOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const onClose = () => {
    setAnchorEl(null);
  };

  const logout = async () => {
    try {
      await clear();
      snack.info({ message: t('logged out') });
    } catch (e) {
      console.log('error', e);
      snack.error({ message: t('failed') });
    }
  };

  return (
    <>
      <IconButton
        onClick={onClickOpen}
        sx={{
          p: '2px',
          border: 'none',
          '&:hover': {
            backgroundColor: 'transparent',
          },
        }}
        disableRipple
      >
        <Profile />
      </IconButton>
      {/* //TODO: MenuPopover */}
      <MenuPopover
        anchorEl={anchorEl}
        open={Boolean(anchorEl)}
        onClose={onClose}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'right',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
      >
        {/* //TODO: Additional the content */}
        <MenuItem>
          <ListItemIcon>
            <Button
              onClick={logout}
              disableRipple
              sx={{
                width: 'fit-content',
                '&:hover': {
                  backgroundColor: 'transparent',
                  textDecoration: 'none',
                },
              }}
            >
              {t('logout')}
            </Button>
          </ListItemIcon>
        </MenuItem>
      </MenuPopover>
    </>
  );
}
