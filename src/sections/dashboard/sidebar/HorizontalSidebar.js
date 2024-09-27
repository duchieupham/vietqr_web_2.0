import {
  Box,
  ListItemButton,
  Stack,
  styled,
  Typography,
  useTheme,
} from '@mui/material';
import { useTranslations } from 'next-intl';
import Image from 'next/image';
import { usePathname, useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import MenuPopover from '~/components/MenuPopover';
import { DASHBOARD_TYPE } from '~/constants/dashboard';
import { useAppSelector } from '~/redux/hook';

const PageWrapper = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexGrow: 1,
  height: 50,
  margin: '0.5rem 1.5rem',
}));

const ListItemButtonStyled = styled(ListItemButton)(({ theme }) => ({
  display: 'flex',
  justifyContent: 'center',
  whiteSpace: 'nowrap',
  gap: '5px',
  '& .MuiTypography-root': {
    fontSize: '12px',
  },
  '&:hover': {
    transform: 'scale(1.05)',
    background: 'transparent',
  },
  '&.Mui-selected': {
    color: '#0072FF',
    background: theme.palette.bright.blue.linear,
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
    '&::after': {
      zIndex: 1,
      content: '""',
      position: 'absolute',
      bottom: 8,
      left: '50%',
      transform: 'translateX(-50%)',
      width: '85%',
      height: 2,
      background: theme.palette.bright.blue.linear,
    },
  },
}));

function ShowMenuContents({ isSelected = false }) {
  return isSelected ? (
    <Image src="/icons/arrows-up.svg" width={20} height={20} alt="icon" />
  ) : (
    <Image src="/icons/arrows-down.svg" width={20} height={20} alt="icon" />
  );
}

function TabsMenuPopper({ open, anchorEl, onClose, type, handleToggledMenu }) {
  const t = useTranslations();
  const pathname = usePathname();
  const theme = useTheme();
  const router = useRouter();

  return (
    <MenuPopover
      open={open}
      anchorEl={anchorEl}
      onClose={onClose}
      PaperProps={{
        sx: {
          background: theme.palette.lily.white.linear,
          minWidth: 0,
          minHeight: 0,
          marginTop: '-10px',
          marginLeft: '17.5px',
          boxShadow: 'none',
          borderRadius: '0 0 8px 8px',
          width: '200px',
          display: 'flex',
          justifyContent: 'flex-start',
          alignContents: 'center',
        },
      }}
    >
      {type.children.map((child) => (
        <ListItemButtonStyled
          key={child.id}
          disableRipple
          selected={pathname.includes(child.path)}
          onClick={() => {
            router.push(child.path);
            handleToggledMenu(child.id);
          }}
          sx={{
            width: '100%',
          }}
        >
          {/* ICON */}
          {/* LABEL */}
          <Typography>{t(child.label)}</Typography>
        </ListItemButtonStyled>
      ))}
    </MenuPopover>
  );
}
export default function HorizontalSidebar() {
  const { dashboardType } = useAppSelector((state) => state.app);
  const t = useTranslations();
  const pathname = usePathname();
  const router = useRouter();

  const [selected, setSelected] = useState({});
  const [activeParentTab, setActiveParentTab] = useState(null);
  const [anchorEl, setAnchorEl] = useState(null);

  const displayedTypes = DASHBOARD_TYPE.find(
    (type) => type.id === dashboardType,
  );

  const handleToggledMenu = (id) => {
    setSelected((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  const onClickOpenPopper = (event, id) => {
    setAnchorEl(anchorEl ? null : event.currentTarget);
    setActiveParentTab(id);
  };

  const open = Boolean(anchorEl);

  useEffect(() => {
    const foundType = DASHBOARD_TYPE.find((type) =>
      pathname.includes(type.path),
    );
    if (foundType) {
      setActiveParentTab(foundType.id);
    }
  }, [pathname]);

  return (
    <PageWrapper>
      {/* dashboard */}
      <Stack sx={{ flexDirection: 'row', gap: 1 }}>
        {displayedTypes.children.map((type) => (
          <ListItemButtonStyled
            key={type.id}
            disableRipple
            selected={pathname.includes(type.path)}
            onClick={(event) => {
              // Check if the type has children
              if (type.children && type.children.length > 0) {
                handleToggledMenu(type.id);
                onClickOpenPopper(event, type.id);
              } else {
                router.push(type.path);
              }
            }}
          >
            <Image src={type.icon} width={20} height={20} alt="icon" />
            <Typography>{t(type.label)}</Typography>
            {/* ARROWS ICON */}
            {type.children && type.children.length > 0 && (
              <ShowMenuContents isSelected={selected[type.id]} />
            )}
            {/* Tabs Menu */}
            {type.children && activeParentTab === type.id && (
              <TabsMenuPopper
                anchorEl={anchorEl}
                handleToggledMenu={handleToggledMenu}
                open={open}
                type={type}
              />
            )}
          </ListItemButtonStyled>
        ))}
      </Stack>
    </PageWrapper>
  );
}
