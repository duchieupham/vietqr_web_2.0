/* eslint-disable react/no-array-index-key */
import { ExpandLess, ExpandMore } from '@mui/icons-material';
import AccountBalanceWalletIcon from '@mui/icons-material/AccountBalanceWallet';
import HomeRoundedIcon from '@mui/icons-material/HomeRounded';
import QrCodeScannerIcon from '@mui/icons-material/QrCodeScanner';
import SupportAgentIcon from '@mui/icons-material/SupportAgent';
import {
  Collapse,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  MenuItem,
  Stack,
  styled,
} from '@mui/material';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import MenuPopover from '~/components/MenuPopover';

const MAIN_LIST_ITEMS = [
  {
    id: 'general',
    text: 'general',
    icon: <HomeRoundedIcon />,
    subItems: [],
  },
  {
    id: 'transaction',
    text: 'transaction',
    icon: <AccountBalanceWalletIcon />,
    subItems: [
      { id: 'payment', text: 'payment' },
      { id: 'pending', text: 'pending' },
    ],
  },
  {
    id: 'extension',
    text: 'extension',
    icon: <QrCodeScannerIcon />,
    subItems: [],
  },
  {
    id: 'integrate',
    text: 'integrate',
    icon: (
      <Image
        src="/images/interface-link--create-hyperlink-link-make-unlink.svg"
        width={20}
        height={20}
        alt="link_icon"
        style={{ color: '#666A72' }}
      />
    ),
    subItems: [],
  },
  {
    id: 'contact',
    text: 'contact',
    icon: <SupportAgentIcon />,
    subItems: [],
  },
];

export default function MenuContent({ drawerOpen, ...props }) {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [openTransaction, setOpenTransaction] = useState(null);
  const [anchorEl, setAnchorEl] = useState(null);

  const onClickListItem = (index) => {
    setSelectedIndex(index);
  };

  const onClickSubmenuToggle = (index) => {
    setOpenTransaction(openTransaction === index ? null : index); // Toggle submenu
  };

  const onClickOpenPopover = (event) => {
    setAnchorEl(event.currentTarget);
  };
  console.log('anchorEl', anchorEl);

  const onClosePopover = () => {
    setAnchorEl(null);
  };

  useEffect(() => {
    if (drawerOpen) {
      setAnchorEl(!drawerOpen);
    }
  }, [drawerOpen]);

  return (
    <Stack sx={{ flexGrow: 1, p: 1, justifyContent: 'space-between' }}>
      <List dense disablePadding>
        {MAIN_LIST_ITEMS.map((item) => (
          <ListItem
            key={item.id}
            disablePadding
            sx={{
              display: 'block',
              mb: 1,
            }}
          >
            <ListItemButtonStyled
              selected={
                selectedIndex === item.id || openTransaction === item.id
              }
              onClick={() => {
                onClickListItem(item.id);
                if (item.subItems.length > 0) onClickSubmenuToggle(item.id);
              }}
            >
              <ListItemIcon
                onClick={drawerOpen ? undefined : onClickOpenPopover}
              >
                {item.icon}
              </ListItemIcon>
              <ListItemText primary={item.text} />
              {/* Add arrow icon for items with sub-items */}
              {item.subItems.length > 0 &&
                (openTransaction === item.id ? <ExpandLess /> : <ExpandMore />)}
            </ListItemButtonStyled>
            {item.subItems.length > 0 &&
              (drawerOpen ? (
                <Collapse
                  in={openTransaction === item.id}
                  timeout="auto"
                  unmountOnExit
                >
                  <List dense>
                    {item.subItems.map((subItem) => (
                      <ListItem
                        key={subItem.id}
                        disablePadding
                        sx={{ display: 'block', ml: 4 }}
                      >
                        <ListItemButtonStyled
                          selected={selectedIndex === subItem.id}
                          onClick={() => onClickListItem(subItem.id)}
                          sx={{ pl: 4, width: '70%' }}
                        >
                          <ListItemText primary={subItem.text} />
                        </ListItemButtonStyled>
                      </ListItem>
                    ))}
                  </List>
                </Collapse>
              ) : (
                <MenuPopover
                  anchorEl={anchorEl}
                  open={Boolean(anchorEl)}
                  onClose={onClosePopover}
                  anchorOrigin={{
                    vertical: 'center',
                    horizontal: 'right',
                  }}
                  transformOrigin={{
                    vertical: 'center',
                    horizontal: 'left',
                  }}
                >
                  {item.subItems.map((subItem) => (
                    <MenuItem key={subItem.id} sx={{ display: 'block' }}>
                      <ListItemButtonStyled
                        selected={selectedIndex === subItem.id}
                        onClick={() => {
                          onClickListItem(subItem.id);
                          onClosePopover();
                        }}
                        sx={{ width: '100%', whiteSpace: 'nowrap' }}
                      >
                        <ListItemText primary={subItem.text} />
                      </ListItemButtonStyled>
                    </MenuItem>
                  ))}
                </MenuPopover>
              ))}
          </ListItem>
        ))}
      </List>
    </Stack>
  );
}

const ListItemButtonStyled = styled(ListItemButton)(({ theme }) => ({
  borderRadius: '8px',
  height: '40px',
  padding: '0 10px',
  '&.Mui-selected': {
    background: 'linear-gradient(to right, #E1EFFF 0%, #E1EFFF 100%)',
    color: '#0072FF',
    fontSize: 13,
    fontWeight: 'semiBold',
    '& .MuiListItemIcon-root': {
      color: '#0072FF',
    },
  },
  '&:hover': {
    background: '#DADADA',
    opacity: 0.75,
  },
}));
