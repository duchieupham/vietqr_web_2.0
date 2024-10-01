import { Badge, Box, IconButton, ListItemIcon, MenuItem } from '@mui/material';
import { useTranslations } from 'next-intl';
import Image from 'next/image';
import { useState } from 'react';
import MenuPopover from '~/components/MenuPopover';

// API call to get notifications has not been implemented yet
export default function NotificationPopover() {
  const t = useTranslations();

  const [anchorEl, setAnchorEl] = useState(null);

  const handleOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

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
            backgroundColor: '#F0F4FA',
          }}
        >
          <Badge
            sx={{
              '& .MuiBadge-badge': {
                backgroundColor: '#FD711A',
                borderRadius: '50%',
                width: 12,
                height: 12,
                fontSize: 8,
                minWidth: 0,
              },
            }}
          >
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
        <MenuItem>
          <ListItemIcon>{t('noNotification')}</ListItemIcon>
        </MenuItem>
      </MenuPopover>
    </>
  );
}
