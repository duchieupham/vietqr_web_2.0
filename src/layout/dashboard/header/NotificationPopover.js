import { Badge, Box, IconButton } from '@mui/material';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import MenuPopover from '~/components/MenuPopover';

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
      <IconButton onClick={handleOpen} disableRipple>
        <Box
          sx={{
            width: 40,
            height: 40,
            borderRadius: '50%',
            overflow: 'hidden',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: '#DADADA',
          }}
        >
          <Badge badgeContent={notification} color="#FD711A">
            <Image
              src="/images/alert-alarm-bell.svg"
              width={14}
              height={15}
              alt="alert-alarm-bell"
            />
          </Badge>
        </Box>
      </IconButton>
      {/* //TODO: MenuPopover */}
      <MenuPopover
        anchorEl={anchorEl}
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        {/* // TODO: Additional content about the notification */}
      </MenuPopover>
    </>
  );
}
