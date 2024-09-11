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
  Typography,
} from '@mui/material';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import MenuPopover from '~/components/MenuPopover';
import { DASHBOARD_TYPE } from '~/constants/dashboard';
import { useAppSelector } from '~/redux/hook';

export default function MenuContent({ isDrawerOpen, ...props }) {
  const { dashboardType } = useAppSelector((store) => store.app);
  const [selectedIndex, setSelectedIndex] = useState('general');
  const [selectedIndexSub, setSelectedIndexSub] = useState(0);
  const [openSubMenu, setOpenSubMenu] = useState(null);
  const [anchorEl, setAnchorEl] = useState(null);
  const displayedType = DASHBOARD_TYPE.find(
    (item) => item.id === dashboardType,
  );

  const onClickListItem = (id) => {
    setSelectedIndex(id);
    setOpenSubMenu(openSubMenu === id ? null : id);
  };

  const onClickOpenMenuPopover = (event, id) => {
    console.log('Click event:', event);
    console.log('MenuPopover id:', id);
    setAnchorEl(anchorEl?.id === id ? null : event.currentTarget);
  };

  const onCloseMenuPopover = () => {
    setAnchorEl(null);
  };

  useEffect(() => {
    if (!isDrawerOpen) {
      setAnchorEl(null);
    }
  }, [isDrawerOpen]);

  return (
    <Stack sx={{ flexGrow: 1, p: 1, justifyContent: 'space-between' }}>
      <List dense disablePadding>
        {displayedType.children.map((child) => (
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
                onClickOpenMenuPopover(event, child.id);
              }}
              sx={{
                height: isDrawerOpen ? '40px' : '50px',
                p: isDrawerOpen ? '0 10px' : 0,
                flexDirection: isDrawerOpen ? 'row' : 'column',
                justifyContent: isDrawerOpen ? 'flex-start' : 'center',
                gap: isDrawerOpen ? 1 : 0.5,
              }}
            >
              <ListItemIcon
                sx={{
                  display: 'flex',
                  alignItems: 'center',
                  flexWrap: 'wrap',
                  gap: 0.5,
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
                {!isDrawerOpen && (
                  <>
                    {child.children?.length > 0 && (
                      <Image
                        src={`/images/${selectedIndex === child.id ? 'arrow-down-active' : 'arrow-down'}.svg`}
                        alt="arrow-right"
                        width={12}
                        height={12}
                        quality={100}
                        priority
                      />
                    )}
                  </>
                )}
              </ListItemIcon>
              {!isDrawerOpen && (
                <ShortLabel>{child.shortLabel || child.label}</ShortLabel>
              )}
              {isDrawerOpen && <ListItemText primary={child?.id} />}
              {/* Add arrow icon for items with sub-items */}
              {child.children?.length > 0 &&
                isDrawerOpen &&
                (openSubMenu === child.id ? <ExpandLess /> : <ExpandMore />)}
            </ListItemButtonStyled>
            {child.children?.length > 0 && isDrawerOpen ? (
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
                open={Boolean(anchorEl) && openSubMenu === child.id}
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
                <List dense disablePadding>
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
                          sx={{
                            borderRadius: 0,
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

const ShortLabel = styled(Typography)(({ theme }) => ({
  fontSize: 10,
  fontWeight: 'semiBold',
}));
