import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import HeadphonesOutlinedIcon from '@mui/icons-material/HeadphonesOutlined';
import { Box, Button, MenuItem, Select, useMediaQuery } from '@mui/material';
import { setCookie } from 'cookies-next';
import { useTranslations } from 'next-intl';
import { useRouter } from 'next/navigation';
import { LOCALE_COOKIE } from '~/constants';
import { useAppContext } from '~/contexts/AppContext';
import theme from '~/theme';

export default function ContactLangButton({ languageOptions, style }) {
  const t = useTranslations();
  const router = useRouter();
  const isMdUp = useMediaQuery(theme.breakpoints.up('md'));

  const { language, setLanguage } = useAppContext();
  const onChangeLanguage = (e) => {
    const locale = e.target.value;
    setCookie(LOCALE_COOKIE, locale);
    setLanguage(locale);
    router.refresh();
  };

  return (
    <Box
      sx={{
        alignContent: 'center',
        justifyContent: 'flex-end',
        display: 'flex',
        ...style,
      }}
    >
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
      <Select
        value={language}
        onChange={onChangeLanguage}
        IconComponent={ExpandMoreIcon}
        renderValue={(selected) => {
          const selectedOption = languageOptions.find(
            (option) => option.value === selected,
          );
          return selectedOption ? (
            <>
              {selectedOption.icon}
              {isMdUp && t(selectedOption.label)}
            </>
          ) : null;
        }}
        sx={{
          '.MuiOutlinedInput-notchedOutline': {
            border: 'none',
          },
          '.MuiSelect-icon': {
            color: 'inherit',
          },
          fontSize: {
            xs: '12px',
            md: '15px',
          },
          '.MuiSelect-select': {
            display: 'flex',
            alignItems: 'center',
            gap: 1,
          },
        }}
      >
        {languageOptions.map((option) => (
          <MenuItem
            key={option.id}
            value={option.value}
            sx={{
              justifyContent: 'center',
              display: 'flex',
              gap: 1,
            }}
          >
            {option.icon}
            {t(option.label)}
          </MenuItem>
        ))}
      </Select>
    </Box>
  );
}
