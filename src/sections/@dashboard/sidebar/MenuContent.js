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
import Image from 'next/image';
import { useEffect, useState } from 'react';
import MenuPopover from '~/components/MenuPopover';
import { useAppSelector } from '~/redux/hook';

export default function MenuContent({ drawerOpen, ...props }) {
  const { dashboardType } = useAppSelector((store) => store.app);
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [selectedIndexSub, setSelectedIndexSub] = useState(0);
  const [openSubMenu, setOpenSubMenu] = useState(null);
  const [anchorEl, setAnchorEl] = useState(null);

  const onClickListItem = (index) => {
    setSelectedIndex(index); // set selected index for main menu
    setOpenSubMenu(openSubMenu === index ? null : index); // set open sub menu
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
        {dashboardType.children.map((child) => (
          <ListItem
            key={child.id}
            disablePadding
            sx={{
              display: 'block',
              mb: 1,
            }}
          >
            <ListItemButtonStyled
              selected={selectedIndex === child.id}
              onClick={() => {
                onClickListItem(child.id);
              }}
            >
              <ListItemIcon
                sx={{
                  justifyContent: 'center',
                }}
              >
                <Image
                  src={
                    selectedIndex === child.id ? child.iconActive : child.icon
                  }
                  alt="icon"
                  width={20}
                  height={20}
                  quality={100}
                  priority
                />
              </ListItemIcon>
              <ListItemText primary={child?.id} />
              {/* Add arrow icon for items with sub-items */}
              {child.children?.length > 0 &&
                (openSubMenu === child.id ? <ExpandLess /> : <ExpandMore />)}
            </ListItemButtonStyled>
            {child.children?.length > 0 && drawerOpen ? (
              <Collapse
                in={openSubMenu === child.id}
                timeout="auto"
                unmountOnExit
              >
                <List dense sx={{ paddingTop: '4px', paddingBottom: '0px' }}>
                  {child.children.map((subChild) => (
                    <ListItem
                      key={subChild.id}
                      disablePadding
                      sx={{
                        display: 'block',
                        mb: 1,
                        ml: 3,
                      }}
                    >
                      <ListItemButtonStyled
                        selected={selectedIndexSub === subChild.id}
                        onClick={() => {
                          setSelectedIndexSub(subChild.id);
                        }}
                        sx={{
                          width: '80%',
                          '&.Mui-selected': {
                            background: '#DADADA',
                            color: '#000000',
                          },
                          pl: 3,
                          mb: 0,
                        }}
                      >
                        <ListItemText primary={subChild.id} />
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
                  {child.children?.length > 0 &&
                    child.children.map((subChild) => (
                      <ListItem
                        key={subChild.id}
                        disablePadding
                        sx={{
                          display: 'block',
                          mb: 1,
                        }}
                      >
                        <ListItemButtonStyled
                          selected={selectedIndexSub === subChild.id}
                          onClick={() => {
                            setSelectedIndexSub(subChild.id);
                          }}
                        >
                          <ListItemIcon>{subChild.icon}</ListItemIcon>
                          <ListItemText primary={subChild.id} />
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
  alignItems: 'center',
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
    opacity: 1,
  },
}));
