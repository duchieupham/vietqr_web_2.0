import { Button, IconButton, ListItemIcon, MenuItem } from '@mui/material';
import { useState } from 'react';
import MenuPopover from '~/components/MenuPopover';
import Profile from '~/components/Profile';
import { useAuthContext } from '~/contexts/AuthContext';

export default function AccountPopover() {
  const [anchorEl, setAnchorEl] = useState(null);
  const { session, clear } = useAuthContext();

  const onClickOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const onClose = () => {
    setAnchorEl(null);
  };

  const logout = () => {
    clear();
  };

  return (
    <>
      <IconButton
        onClick={onClickOpen}
        sx={{ p: '2px', border: '1px solid #c2c2c2' }}
      >
        <Profile />
      </IconButton>
      {/* //TODO: MenuPopover */}
      <MenuPopover
        anchorEl={anchorEl}
        open={Boolean(anchorEl)}
        onClose={onClose}
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
              Logout
            </Button>
          </ListItemIcon>
        </MenuItem>
      </MenuPopover>
    </>
  );
}
