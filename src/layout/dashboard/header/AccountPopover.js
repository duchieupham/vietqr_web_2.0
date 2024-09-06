import {
  IconButton,
  ListItemIcon,
  Menu,
  MenuItem,
  Popover,
} from '@mui/material';
import { useState } from 'react';
import Profile from '~/components/Profile';

export default function AccountPopover() {
  const [anchorEl, setAnchorEl] = useState(null);
  const handleOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <>
      <IconButton onClick={handleOpen} sx={{ p: 0 }}>
        <Profile />
      </IconButton>
      {/* //TODO: MenuPopover */}
      <Menu
        anchorEl={anchorEl}
        open={Boolean(anchorEl)}
        onClose={handleClose}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'center',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'center',
        }}
      >
        {/* //TODO: Additional the content */}
      </Menu>
    </>
  );
}
