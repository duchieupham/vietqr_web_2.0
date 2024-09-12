import { Badge, Box, IconButton, Menu } from '@mui/material';
import Image from 'next/image';
import { useEffect, useState } from 'react';

export default function NotificationPopover() {
  const [anchorEl, setAnchorEl] = useState(null);
  const [notification, setNotification] = useState(0);
  const [notifications, setNotifications] = useState([]);

  const handleOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  // TODO: Fetch notifications and set number of notifications
  useEffect(() => {
    if (notifications) {
      setNotification(notifications.length);
    }
  }, [notifications]);

  return (
    <>
      <IconButton onClick={handleOpen}>
        <Box
          sx={{
            width: 30, // Control the size of the circle
            height: 30,
            borderRadius: '50%', // Circular shape
            overflow: 'hidden', // Ensure the image fits within the circle
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <Badge badgeContent={notification} color="#FD711A">
            <Image
              src="/images/alert-alarm-bell.png"
              width={18}
              height={18}
              alt="alert-alarm-bell"
            />
          </Badge>
        </Box>
      </IconButton>
      {/* //TODO: MenuPopover */}
      <Menu
        anchorEl={anchorEl}
        open={Boolean(anchorEl)}
        onClose={handleClose}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
        transformOrigin={{ vertical: 'top', horizontal: 'center' }}
      >
        {/* // TODO: Additional content about the notification */}
      </Menu>
    </>
  );
}
