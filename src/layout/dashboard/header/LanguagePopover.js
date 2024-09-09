import { Badge, IconButton, ListItemIcon, MenuItem } from '@mui/material';
import { setCookie } from 'cookies-next';
import { useTranslations } from 'next-intl';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import MenuPopover from '~/components/MenuPopover';
import { DEFAULT_IMAGE, LANGUAGE_OPTIONS, LOCALE_COOKIE } from '~/constants';
import { useAppContext } from '~/contexts/AppContext';

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
                src={option.icon2 || DEFAULT_IMAGE}
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
      <MenuPopover
        anchorEl={anchorEl}
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        {LANGUAGE_OPTIONS.map((option) => (
          <MenuItem
            key={option.value}
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
                  src={option.icon2}
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
