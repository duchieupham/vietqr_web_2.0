import CloseIcon from '@mui/icons-material/Close';
import {
  Box,
  Divider,
  InputAdornment,
  styled,
  TextField,
  Typography,
  useTheme,
} from '@mui/material';
import { useTranslations } from 'next-intl';
import Image from 'next/image';
import { ButtonGradient } from '~/components/button';
import { useAuthContext } from '~/contexts/hooks';

const SearchContainer = styled(Box)(({ theme, ...props }) => {
  const collapseStyle = {
    left: '21rem',
    width: '16rem',
    height: '40px',
    transition: 'left 0.3s ease, width 0.5s ease, height 0.3s ease',
  };
  const expandStyle = {
    left: 0,
    width: '38rem',
    height: props.isNoContexts ? 'fit-content' : '380px',
    background: theme.palette.aiColor,
    transition: 'left 0.4s ease, width 0.5s ease, height 0.4s ease',
    '&::before': {
      content: '""',
      position: 'absolute',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      zIndex: -1,
      borderRadius: '8px',
      padding: '1px',
      background: theme.palette.aiTextColor,
      WebkitMask:
        'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
      mask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
      WebkitMaskComposite: 'xor',
      maskComposite: 'exclude',
    },
    '@keyframes borderColorChange': {
      '0%': { background: theme.palette.primary.main },
      '50%': { background: theme.palette.secondary.main },
      '100%': { background: theme.palette.primary.main },
    },
  };
  return {
    top: '8px',
    position: 'absolute',
    zIndex: 1,
    overflow: 'hidden',
    borderRadius: '8px',
    ...(props.isExpanded ? expandStyle : collapseStyle),
  };
});

const ListItem = styled(Box)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  fontSize: '12px',
  color: '#4A4A4A',
  cursor: 'pointer',
  transition: 'background 0.2s ease',
  '& svg': {
    marginRight: '12px',
    color: theme.palette.text.primary,
  },
}));

const SUGGESTIONS = [
  {
    id: 0,
    icon: '',
    label: 'Tính năng',
  },
  {
    id: 1,
    icon: '',
    label: 'Giao dịch',
  },
  {
    id: 2,
    icon: '',
    label: 'Hướng dẫn',
  },
  {
    id: 3,
    icon: '',
    label: 'Khác',
  },
];

const ITEMS = [
  {
    id: 0,
    label: 'feat',
    children: [],
  },
  {
    id: 1,
    label: 'guidance', // Hướng dẫn
    children: [],
  },
  {
    id: 2,
    label: 'others',
    children: [],
  },
];

export default function ExpandSearchBar({
  isExpanded,
  expandSearch,
  collapseSearch,
  handleSearch,
  searchQuery,
}) {
  const { session } = useAuthContext();
  const t = useTranslations();
  const theme = useTheme();

  const isNoContexts = searchQuery.length === 0 && searchQuery.trim() === '';

  return (
    <SearchContainer isExpanded={isExpanded} isNoContexts={isNoContexts}>
      <TextField
        onFocus={expandSearch}
        variant="outlined"
        placeholder={`${t('Hello')} ${session?.firstName}, ${t('search')}`}
        onChange={handleSearch}
        value={searchQuery}
        InputProps={{
          startAdornment: (
            <InputAdornment
              position="start"
              style={{
                cursor: 'pointer',
                marginLeft: '4px',
              }}
            >
              {isExpanded ? (
                <Image
                  src="/icons/search-icon-gradient.svg"
                  width={30}
                  height={30}
                  alt="search-icon"
                />
              ) : (
                <Image
                  src="/icons/search-icon-solid.svg"
                  width={30}
                  height={30}
                  alt="search-icon"
                />
              )}
            </InputAdornment>
          ),
          endAdornment: (
            <InputAdornment position="end" onClick={collapseSearch}>
              <CloseIcon fontSize="small" cursor="pointer" />
            </InputAdornment>
          ),
          sx: {
            padding: 0,
            '& fieldset': {
              border: 'none',
            },
          },
        }}
        sx={{
          borderRadius: '8px',
          display: 'flex',
          background: isExpanded ? 'transparent' : '#F0F4FA',
          cursor: 'pointer',
          width: 250,
          height: 40,
          '& .MuiOutlinedInput-root': {
            padding: 0,
            zIndex: 1,
            border: 'none',
            backgroundColor: 'transparent',
          },
          '& .MuiInputBase-root': {
            width: '580px',
            height: 40,
          },
          '& .MuiInputBase-input': {
            fontSize: 12,
            padding: 0,
            ':focus': {
              background: 'transparent',
            },
          },
        }}
      />

      {/* Show Search Contents */}
      {isExpanded && !isNoContexts && (
        <>
          <Divider />
          <Box
            sx={{
              padding: '0 20px',
            }}
          >
            <Box
              sx={{
                display: 'flex',
                gap: '20px',
                paddingTop: '12px',
              }}
            >
              <ButtonGradient
                sx={{
                  width: '80px',
                  height: '30px',
                  borderRadius: '30px',
                  p: 0,
                  overflow: 'hidden',
                  border: 'none',
                  background: theme.palette.aiColor,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                <Image
                  src="/icons/star-gradient.svg"
                  width={20}
                  height={20}
                  alt="star-gradient"
                />
                <Typography
                  sx={{
                    fontSize: '12px',
                    background: theme.palette.aiTextColor,
                    backgroundClip: 'text',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    color: 'transparent',
                  }}
                >
                  {t('suggest')}
                </Typography>
              </ButtonGradient>
              {SUGGESTIONS.map((item) => (
                <ListItem key={item.label}>
                  <Box>{t(item.label)}</Box>
                </ListItem>
              ))}
            </Box>
            <Box
              sx={{
                paddingTop: '12px',
              }}
            >
              {ITEMS.map((item) => (
                <ListItem
                  key={item.label}
                  sx={{
                    flexDirection: 'column',
                    alignItems: 'flex-start',
                    pt: 0.5,
                  }}
                >
                  <Box sx={{ fontSize: '12px', color: '#666A72', mt: 0.5 }}>
                    {t(item.label)}
                  </Box>
                  <Box>
                    {item.children.map((child) => (
                      <Box key={child.label} sx={{ pt: '12px' }}>
                        <ListItem sx={{ gap: 1.5 }}>
                          <Image
                            src={child.icon}
                            width={30}
                            height={30}
                            alt="icon"
                          />
                          <Box>{t(child.label)}</Box>
                        </ListItem>
                      </Box>
                    ))}
                  </Box>
                </ListItem>
              ))}
            </Box>
          </Box>
        </>
      )}
    </SearchContainer>
  );
}
