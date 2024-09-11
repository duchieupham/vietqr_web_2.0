/* eslint-disable react/no-array-index-key */
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
import { useEffect, useState } from 'react';
import MenuPopover from '~/components/MenuPopover';
import { useAppSelector } from '~/redux/hook';

export default function MenuContent({ drawerOpen, ...props }) {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [selectedIndexSub, setSelectedIndexSub] = useState(0);
  const [openTransaction, setOpenTransaction] = useState(null);
  const [anchorEl, setAnchorEl] = useState(null);
  const { dashboardType } = useAppSelector((store) => store.app);

  console.log(dashboardType);

  const onClickListItem = (index) => {
    setSelectedIndex(index); // set selected index for main menu
    if (openTransaction === index) {
      setOpenTransaction(null); // Close if already open
    } else {
      setOpenTransaction(index); // Open new submenu
    }
  };

  const onClickSubmenuToggle = (index) => {
    setOpenTransaction(openTransaction === index ? null : index); // Toggle submenu
  };

  const onClickOpenMenuPopover = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const onCloseMenuPopover = () => {
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
        {dashboardType.children.map((route) => (
          <ListItem
            key={route.id}
            disablePadding
            sx={{
              display: 'block',
              mb: 1,
            }}
          >
            <ListItemButtonStyled
              selected={selectedIndex === route.id}
              onClick={() => {
                onClickListItem(route.id);
              }}
            >
              <ListItemIcon
                onClick={drawerOpen ? undefined : onClickOpenMenuPopover}
              >
                {route.icon}
              </ListItemIcon>
              <ListItemText primary={route.id} />
              {/* Add arrow icon for items with sub-items */}
              {route.children?.length > 0 &&
                (openTransaction === route.id ? (
                  <ExpandLess />
                ) : (
                  <ExpandMore />
                ))}
            </ListItemButtonStyled>
            {route.children?.length > 0 && drawerOpen ? (
              <Collapse
                in={openTransaction === route.id}
                timeout="auto"
                unmountOnExit
              >
                <List dense>
                  {route.children.map((subRoute) => (
                    <ListItem
                      key={subRoute.id}
                      disablePadding
                      sx={{
                        display: 'block',
                        mb: 1,
                      }}
                    >
                      <ListItemButtonStyled
                        selected={selectedIndexSub === subRoute.id}
                        onClick={() => {
                          setSelectedIndexSub(subRoute.id);
                        }}
                      >
                        <ListItemIcon>{subRoute.icon}</ListItemIcon>
                        <ListItemText primary={subRoute.id} />
                      </ListItemButtonStyled>
                    </ListItem>
                  ))}
                </List>
              </Collapse>
            ) : (
              <MenuPopover
                anchorEl={anchorEl}
                open={Boolean(anchorEl)}
                onClose={onCloseMenuPopover}
                anchorOrigin={{
                  vertical: 'center',
                  horizontal: 'right',
                }}
                transformOrigin={{
                  vertical: 'center',
                  horizontal: 'left',
                }}
              >
                <List dense>
                  {route.children?.length > 0 &&
                    route.children.map((subRoute) => (
                      <ListItem
                        key={subRoute.id}
                        disablePadding
                        sx={{
                          display: 'block',
                          mb: 1,
                        }}
                      >
                        <ListItemButtonStyled
                          selected={selectedIndexSub === subRoute.id}
                          onClick={() => {
                            setSelectedIndexSub(subRoute.id);
                          }}
                        >
                          <ListItemIcon>{subRoute.icon}</ListItemIcon>
                          <ListItemText primary={subRoute.id} />
                        </ListItemButtonStyled>
                      </ListItem>
                    ))}
                </List>
              </MenuPopover>
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
