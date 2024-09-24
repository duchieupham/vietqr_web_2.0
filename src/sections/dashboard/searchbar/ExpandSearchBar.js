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
import { useAppDispatch } from '~/redux/hook';
import { setIsExpanded } from '~/redux/slices/searchSlice';

const SearchContainer = styled(Box)(({ theme }) => ({
  borderRadius: '8px',
  background: theme.palette.aiColor,
  width: '600px',
  height: '380px',
  position: 'relative',
  top: '170px',
  zIndex: 1,
  overflow: 'hidden',
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
    // animation: 'borderColorChange 3s infinite',
  },
  '@keyframes borderColorChange': {
    '0%': { background: theme.palette.primary.main },
    '50%': { background: theme.palette.secondary.main },
    '100%': { background: theme.palette.primary.main },
  },
}));

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
    children: [
      {
        id: 0,
        icon: '/icons/bank-account-solid.svg',
        label: 'account-list',
        children: [],
      },
      {
        id: 1,
        icon: '/icons/add-bank-solid.svg',
        label: 'add-link-account',
        children: [],
      },
    ],
  },
  {
    id: 1,
    label: 'guidance', // Hướng dẫn
    children: [
      {
        id: 0,
        icon: '/icons/document-solid.svg',
        label: 'more-description',
        children: [],
      },
    ],
  },
  {
    id: 2,
    label: 'others',
    children: [
      {
        id: 0,
        icon: '/icons/link-solid.svg',
        label: 'create-account-bidv',
        children: [],
      },
    ],
  },
];

export default function ExpandSearchBar({ ...props }) {
  const { session } = useAuthContext();
  const t = useTranslations();
  const theme = useTheme();
  const dispatch = useAppDispatch();

  return (
    <SearchContainer>
      <Box>
        <TextField
          variant="outlined"
          placeholder={`${t('Hello')} ${session?.firstName}, ${t('search')}`}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <Image
                  src="/icons/search-icon-gradient.svg"
                  width={30}
                  height={30}
                  alt="search-icon"
                  style={{
                    cursor: 'pointer',
                    margin: '0 0 0 10px',
                  }}
                />
              </InputAdornment>
            ),
            endAdornment: (
              <InputAdornment position="end">
                <CloseIcon
                  fontSize="small"
                  cursor="pointer"
                  onClick={() => dispatch(setIsExpanded(false))}
                />
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
            '& .MuiOutlinedInput-root': {
              padding: 0,
              zIndex: 1,
              border: 'none',
              backgroundColor: 'transparent',
            },
            '& .MuiInputBase-root': {
              width: '580px',
              height: 40,
              borderRadius: '8px',
            },
            '& .MuiInputBase-input': {
              fontSize: 12,
              padding: 0,
              marginLeft: '-4px',
              ':focus': {
                background: 'transparent',
              },
            },
          }}
        />
      </Box>
      <Divider />
      {/* Show Search Contents */}
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
    </SearchContainer>
  );
}
