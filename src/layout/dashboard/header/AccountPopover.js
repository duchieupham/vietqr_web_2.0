import {
  Button,
  IconButton,
  ListItemIcon,
  Menu,
  MenuItem,
  Popover,
} from '@mui/material';
import { useState } from 'react';
import MenuPopover from '~/components/MenuPopover';
import Profile from '~/components/Profile';
import { useAuthContext } from '~/contexts/AuthContext';

export default function AccountPopover() {
  const [anchorEl, setAnchorEl] = useState(null);
  const { session, clear } = useAuthContext();

  const handleOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const logout = () => {
    clear();
  };

  return (
    <>
      <IconButton onClick={handleOpen} sx={{ p: 0 }}>
        <Profile />
      </IconButton>
      {/* //TODO: MenuPopover */}
      <MenuPopover
        anchorEl={anchorEl}
        open={Boolean(anchorEl)}
        onClose={handleClose}
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
