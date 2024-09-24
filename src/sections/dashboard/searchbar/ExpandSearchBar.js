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

const InputContainer = styled(Box)(({ theme }) => ({}));

const ShowSearchContainer = styled(Box)(({ theme }) => ({
  padding: '0 20px',
}));

const ListContainer = styled(Box)(({ theme }) => ({
  paddingTop: '12px',
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

const suggestions = [
  {
    icon: '',
    label: 'Tính năng',
  },
  {
    icon: '',
    label: 'Giao dịch',
  },
  {
    icon: '',
    label: 'Hướng dẫn',
  },
  {
    icon: '',
    label: 'Khác',
  },
];

const items = [
  {
    label: 'feat',
    children: [
      {
        icon: (
          <Image
            src="/icons/bank-account-solid.svg"
            width={30}
            height={30}
            alt="bank-account-solid"
          />
        ),
        label: 'account-list',
        children: [],
      },
      {
        icon: (
          <Image
            src="/icons/add-bank-solid.svg"
            width={30}
            height={30}
            alt="add-bank-solid"
          />
        ),
        label: 'add-link',
        children: [],
      },
    ],
  },
  {
    label: 'guidance', // Hướng dẫn
    children: [
      {
        icon: (
          <Image
            src="/icons/document-solid.svg"
            width={30}
            height={30}
            alt="document-solid"
          />
        ),
        label: 'more-description',
        children: [],
      },
    ],
  },
  {
    label: 'others',
    children: [
      {
        icon: (
          <Image
            src="/icons/link-solid.svg"
            width={30}
            height={30}
            alt="link-solid"
          />
        ),
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
      <InputContainer>
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
              border: '1px solid transparent',
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
      </InputContainer>
      <Divider />
      {/* Search Contents */}
      <ShowSearchContainer>
        <ListContainer
          sx={{
            display: 'flex',
            gap: '20px',
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
              Gợi ý
            </Typography>
          </ButtonGradient>
          {suggestions.map((item) => (
            <ListItem key={item.label}>
              <Box>{item.icon}</Box>
              <Box>{item.label}</Box>
            </ListItem>
          ))}
        </ListContainer>
        <ListContainer>
          {items.map((item) => (
            <ListItem
              key={item.label}
              sx={{
                flexDirection: 'column',
                alignItems: 'flex-start',
                pt: 0.5,
              }}
            >
              <Box sx={{ fontSize: '12px', color: '#666A72', mt: 0.5 }}>
                {item.label}
              </Box>
              <Box>
                {item.children.map((child) => (
                  <ListContainer key={child.label} sx={{ pt: 1 }}>
                    <ListItem sx={{ gap: 1.5 }}>
                      <Box>{child.icon}</Box>
                      <Box>{child.label}</Box>
                    </ListItem>
                  </ListContainer>
                ))}
              </Box>
            </ListItem>
          ))}
        </ListContainer>
      </ShowSearchContainer>
    </SearchContainer>
  );
}
