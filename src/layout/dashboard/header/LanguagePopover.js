import { Badge, IconButton, ListItemIcon, Menu, MenuItem } from '@mui/material';
import { setCookie } from 'cookies-next';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { DEFAULT_IMAGE, LANGUAGE_OPTIONS, LOCALE_COOKIE } from '~/constants';
import { useAppContext } from '~/contexts/AppContext';

export default function LanguagePopover() {
  const [anchorEl, setAnchorEl] = useState(null);
  const router = useRouter();
  const { language, setLanguage } = useAppContext();

  const handleOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const onChangeLanguage = (e) => {
    const locale = e.target.value;
    setCookie(LOCALE_COOKIE, locale);
    setLanguage(locale);
    router.refresh();
    handleClose();
  };

  return (
    <>
      <IconButton onClick={handleOpen}>
        {LANGUAGE_OPTIONS.map(
          (option) =>
            option.value === language && (
              <Image
                key={option.id}
                src={option.icon || DEFAULT_IMAGE}
                width={22}
                height={15}
                alt={option.value || 'DEFAULT IMAGE'}
                priority
                quality={100}
              />
            ),
        )}
      </IconButton>

      {/* // TODO: MenuPopover */}
      <Menu
        anchorEl={anchorEl}
        open={Boolean(anchorEl)}
        onClose={handleClose}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
        transformOrigin={{ vertical: 'top', horizontal: 'center' }}
      >
        {LANGUAGE_OPTIONS.map((option) => (
          <MenuItem
            key={option.value}
            onClick={() => onChangeLanguage(option.value)}
          >
            <ListItemIcon>
              <Badge
                color="secondary"
                variant={language === option.value ? 'dot' : 'standard'}
              >
                <Image
                  quality={100}
                  priority
                  src={option.icon}
                  alt={option.label}
                  width={22}
                  height={15}
                />
              </Badge>
            </ListItemIcon>
            {option.label}
          </MenuItem>
        ))}
      </Menu>
    </>
  );
}
