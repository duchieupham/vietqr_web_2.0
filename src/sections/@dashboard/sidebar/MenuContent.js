/* eslint-disable react/no-array-index-key */
import AccountBalanceWalletIcon from '@mui/icons-material/AccountBalanceWallet';
import HomeRoundedIcon from '@mui/icons-material/HomeRounded';
import QrCodeScannerIcon from '@mui/icons-material/QrCodeScanner';
import SupportAgentIcon from '@mui/icons-material/SupportAgent';
import { ExpandLess, ExpandMore } from '@mui/icons-material';
import {
  Collapse,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Stack,
  styled,
} from '@mui/material';
import Image from 'next/image';
import { useState } from 'react';

const LinkIcon = () => (
  <Image src="/images/link.png" width={14} height={14} alt="link_icon" />
);

const mainListItems = [
  { text: 'general', icon: <HomeRoundedIcon />, subItems: [] },
  {
    text: 'transaction',
    icon: <AccountBalanceWalletIcon />,
    subItems: [{ text: 'payment' }, { text: 'pending' }],
  },
  { text: 'extension', icon: <QrCodeScannerIcon />, subItems: [] },
  { text: 'integrate', icon: <LinkIcon />, subItems: [] },
  { text: 'contact', icon: <SupportAgentIcon />, subItems: [] },
];

export default function MenuContent() {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [selectedSubIndex, setSelectedSubIndex] = useState(null);
  const [openTransaction, setOpenTransaction] = useState(null);

  console.log(selectedIndex);
  console.log('openTransaction', openTransaction);

  const handleListItemClick = (index) => {
    setSelectedIndex(index);
  };

  const handleSubmenuToggle = (index) => {
    setOpenTransaction(openTransaction === index ? null : index); // Toggle submenu
  };

  return (
    <Stack sx={{ flexGrow: 1, p: 1, justifyContent: 'space-between' }}>
      <List dense disablePadding>
        {mainListItems.map((item, index) => (
          <ListItem key={index} disablePadding sx={{ display: 'block', mb: 1 }}>
            <ListItemButtonStyled
              selected={selectedIndex === index || openTransaction === index}
              onClick={() => {
                handleListItemClick(index);
                if (item.subItems.length > 0) handleSubmenuToggle(index);
              }}
            >
              <ListItemIcon>{item.icon}</ListItemIcon>
              <ListItemText primary={item.text} />
              {/* Add arrow icon for items with sub-items */}
              {item.subItems.length > 0 &&
                (openTransaction === index ? <ExpandLess /> : <ExpandMore />)}
            </ListItemButtonStyled>
            {/* Subitems menu */}
            {item.subItems.length > 0 && (
              <Collapse in={openTransaction} timeout="auto" unmountOnExit>
                <List dense>
                  {item.subItems.map((subItem, subIndex) => {
                    const combinedIndex = `${index}-${subIndex}`;
                    return (
                      <ListItem
                        key={combinedIndex}
                        disablePadding
                        sx={{ display: 'block', ml: 4 }}
                      >
                        <ListItemButtonStyled
                          selected={selectedIndex === combinedIndex} // Track sub-item selection
                          onClick={() => handleListItemClick(combinedIndex)}
                          sx={{ pl: 4, width: '70%' }}
                        >
                          <ListItemText primary={subItem.text} />
                        </ListItemButtonStyled>
                      </ListItem>
                    );
                  })}
                </List>
              </Collapse>
            )}
          </ListItem>
        ))}
      </List>
    </Stack>
  );
}

const ListItemButtonStyled = styled(ListItemButton)(({ theme }) => ({
  borderRadius: '8px',
  height: '40px',
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
