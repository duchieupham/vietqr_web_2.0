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
  const { dashboardType } = useAppSelector((store) => store.app);
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [selectedIndexSub, setSelectedIndexSub] = useState(0);
  const [openSubMenu, setOpenSubMenu] = useState(null);
  const [anchorEl, setAnchorEl] = useState(null);

  console.log(drawerOpen);

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
        {dashboardType.children.map((children) => (
          <ListItem
            key={children.id}
            disablePadding
            sx={{
              display: 'block',
              mb: 1,
            }}
          >
            <ListItemButtonStyled
              selected={selectedIndex === children.id}
              onClick={() => {
                onClickListItem(children.id);
              }}
            >
              <ListItemIcon>{children.icon}</ListItemIcon>
              <ListItemText primary={children.id} />
              {/* Add arrow icon for items with sub-items */}
              {children.children?.length > 0 &&
                (openSubMenu === children.id ? <ExpandLess /> : <ExpandMore />)}
            </ListItemButtonStyled>
            {children.children?.length > 0 && drawerOpen ? (
              <Collapse
                in={openSubMenu === children.id}
                timeout="auto"
                unmountOnExit
              >
                <List dense sx={{ paddingTop: '4px', paddingBottom: '0px' }}>
                  {children.children.map((subChildren) => (
                    <ListItem
                      key={subChildren.id}
                      disablePadding
                      sx={{
                        display: 'block',
                        mb: 1,
                        ml: 3,
                      }}
                    >
                      <ListItemButtonStyled
                        selected={selectedIndexSub === subChildren.id}
                        onClick={() => {
                          setSelectedIndexSub(subChildren.id);
                        }}
                        sx={{
                          width: '80%',
                          '&.Mui-selected': {
                            background: '#DADADA',
                            color: '#000000',
                          },
                          p: 0,
                          mb: 0,
                        }}
                      >
                        <ListItemIcon>{subChildren.icon}</ListItemIcon>
                        <ListItemText primary={subChildren.id} />
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
                  {children.children?.length > 0 &&
                    children.children.map((subChildren) => (
                      <ListItem
                        key={subChildren.id}
                        disablePadding
                        sx={{
                          display: 'block',
                          mb: 1,
                        }}
                      >
                        <ListItemButtonStyled
                          selected={selectedIndexSub === subChildren.id}
                          onClick={() => {
                            setSelectedIndexSub(subChildren.id);
                          }}
                        >
                          <ListItemIcon>{subChildren.icon}</ListItemIcon>
                          <ListItemText primary={subChildren.id} />
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
