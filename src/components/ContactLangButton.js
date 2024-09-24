import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import HeadphonesOutlinedIcon from '@mui/icons-material/HeadphonesOutlined';
import {
  Box,
  Button,
  MenuItem,
  Select,
  useMediaQuery,
  useTheme,
} from '@mui/material';
import { setCookie } from 'cookies-next';
import { useTranslations } from 'next-intl';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import { LANGUAGE_OPTIONS, LOCALE_COOKIE } from '~/constants';
import { useAppContext } from '~/contexts/hooks';

const dashboardLanguageStyled = {
  borderRadius: '50%',
  height: 40,
  width: 40,
  alignContent: 'center',
  justifyContent: 'center',
  overflow: 'hidden',
  display: 'flex',
  alignItems: 'center',
  backgroundColor: '#F0F4FA',
  '& .MuiSelect-select': {
    py: 0,
    px: 0.65,
  },
};

export default function ContactLangButton({ type, style }) {
  const t = useTranslations();
  const router = useRouter();
  const theme = useTheme();
  const isMdUp = useMediaQuery(theme.breakpoints.up('md'));
  const { language, setLanguage } = useAppContext();
  const [selectedLanguage, setSelectedLanguage] = useState('');

  useEffect(() => {
    // Khi component mount, đảm bảo giá trị mặc định được set
    if (LANGUAGE_OPTIONS.length > 0) {
      const defaultLanguage =
        LANGUAGE_OPTIONS.find((option) => option.value === language)?.value ||
        LANGUAGE_OPTIONS[0].value;
      setSelectedLanguage(defaultLanguage);
    }
  }, [language]);

  const onChangeLanguage = (e) => {
    const locale = e.target.value;
    setCookie(LOCALE_COOKIE, locale);
    setLanguage(locale);
    router.refresh();
  };

  return (
    <Box
      sx={{
        justifyContent: 'flex-end',
        display: 'flex',
        ...(type === 'dashboard' && {
          alignItems: 'center',
        }),
        ...style,
      }}
    >
      {type === 'login' && (
        <Button
          sx={{
            color: 'black',
            fontSize: {
              xs: '10px',
              md: '12px',
            },
            textTransform: 'none',
            gap: {
              xs: 0,
              lg: '0.5rem',
            },
            '&:hover': {
              backgroundColor: 'transparent',
              textDecoration: 'none',
            },
          }}
          disableRipple
        >
          <HeadphonesOutlinedIcon />
          {isMdUp && t('contact')}
        </Button>
      )}
      <Select
        value={selectedLanguage}
        onChange={(e) => {
          setSelectedLanguage(e.target.value);
          onChangeLanguage(e);
        }}
        IconComponent={type === 'dashboard' ? null : ExpandMoreIcon}
        renderValue={(selected) => {
          const selectedOption = LANGUAGE_OPTIONS.find(
            (option) => option.value === selected,
          );
          return selectedOption ? (
            <>
              <Image
                alt={selectedOption.label}
                src={selectedOption.circleIcon}
                width={30}
                height={30}
              />
              {isMdUp && type !== 'dashboard' && t(selectedOption.label)}
            </>
          ) : null;
        }}
        MenuProps={{
          PaperProps: {
            sx: {
              '& .MuiMenu-list': {
                paddingTop: 0,
                paddingBottom: 0,
              },
            },
          },
        }}
        sx={{
          '.MuiOutlinedInput-notchedOutline': {
            border: 'none',
          },
          '.MuiSelect-icon': {
            color: 'inherit',
          },
          fontSize: {
            xs: '10px',
            md: '12px',
          },
          '.MuiSelect-select': {
            display: 'flex',
            alignItems: 'center',
            gap: 1,
          },
          ...(type === 'dashboard' && dashboardLanguageStyled),
        }}
      >
        {LANGUAGE_OPTIONS.map((option) => (
          <MenuItem
            key={option.id}
            value={option.value}
            sx={{
              justifyContent: 'center',
              display: 'flex',
              gap: 1,
            }}
          >
            <Image
              alt={option.label}
              src={option.circleIcon}
              width={20}
              height={20}
            />
            {t(option.label)}
          </MenuItem>
        ))}
      </Select>
    </Box>
  );
}
