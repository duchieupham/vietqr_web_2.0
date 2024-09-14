import { Badge, Box, IconButton, ListItemIcon, MenuItem } from '@mui/material';
import { setCookie } from 'cookies-next';
import { useTranslations } from 'next-intl';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import MenuPopover from '~/components/MenuPopover';
import { LANGUAGE_OPTIONS, LOCALE_COOKIE, VIETQR_IMAGE } from '~/constants';
import { useAppContext } from '~/contexts/hooks';

export default function LanguagePopover() {
  const [anchorEl, setAnchorEl] = useState(null);
  const router = useRouter();
  const t = useTranslations();
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
  };

  return (
    <>
      <IconButton onClick={handleOpen}>
        {LANGUAGE_OPTIONS.map(
          (option) =>
            option.value === language && (
              <Box
                key={option.id}
                sx={{
                  width: 30, // Control the size of the circle
                  height: 30,
                  borderRadius: '50%', // Circular shape
                  overflow: 'hidden', // Ensure the image fits within the circle
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                }}
              >
                <Image
                  key={option.id}
                  src={option.flagIcon || VIETQR_IMAGE}
                  width={22}
                  height={15}
                  alt={option.label || 'VIETQR_IMAGE'}
                  priority
                  quality={100}
                />
              </Box>
            ),
        )}
      </IconButton>

      {/* // TODO: MenuPopover */}
      <MenuPopover
        anchorEl={anchorEl}
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        {LANGUAGE_OPTIONS.map((option) => (
          <MenuItem
            key={option.id}
            onClick={() => onChangeLanguage(option.value)}
          >
            <ListItemIcon>
              <Badge
                color="primary"
                variant={language === option.value ? 'dot' : 'standard'}
              >
                <Image
                  quality={100}
                  priority
                  src={option.flagIcon}
                  alt={option.label}
                  width={22}
                  height={15}
                  style={{
                    objectFit: 'cover',
                    objectPosition: 'center',
                  }}
                />
              </Badge>
            </ListItemIcon>
            {t(option.label)}
          </MenuItem>
        ))}
      </MenuPopover>
    </>
  );
}
