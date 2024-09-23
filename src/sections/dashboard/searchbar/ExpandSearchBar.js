import {
  Box,
  Divider,
  InputAdornment,
  styled,
  TextField,
  Typography,
} from '@mui/material';
import { useTranslations } from 'next-intl';
import Image from 'next/image';
import { useAuthContext } from '~/contexts/hooks';
import AccountBalanceWalletIcon from '@mui/icons-material/AccountBalanceWallet';
import AddLinkIcon from '@mui/icons-material/AddLink';
import DescriptionIcon from '@mui/icons-material/Description';
import LinkIcon from '@mui/icons-material/Link';
import CloseIcon from '@mui/icons-material/Close';

const SearchContainer = styled(Box)(({ theme }) => ({
  borderRadius: '8px',
  background: theme.palette.aiTextColor,
  width: '600px',
  height: '380px',
  position: 'relative',
  top: '170px',
  padding: '0.8px',
}));

const SearchContainerStyled = styled(Box)(({ theme }) => ({
  background: theme.palette.aiColor,
  width: '100%',
  height: '100%',
  borderRadius: '8px',
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
  padding: '8px 0',
  fontSize: '14px',
  color: '#4A4A4A',
  cursor: 'pointer',
  transition: 'background 0.2s ease',
  '&:hover': {
    background: '#F0F4FA',
    borderRadius: '8px',
  },
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
        icon: <AccountBalanceWalletIcon />,
        label: 'account-list',
        children: [],
      },
      {
        icon: <AddLinkIcon />,
        label: 'add-link',
        children: [],
      },
    ],
  },
  {
    label: 'guidance', // Hướng dẫn
    children: [
      {
        icon: <DescriptionIcon />,
        label: 'more-description',
        children: [],
      },
    ],
  },
  {
    label: 'others',
    children: [
      { icon: <LinkIcon />, label: 'create-account-bidv', children: [] },
    ],
  },
];

export default function ExpandSearchBar() {
  const { session } = useAuthContext();
  const t = useTranslations();

  return (
    <SearchContainer>
      <SearchContainerStyled>
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
                  <CloseIcon fontSize="small" />
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
            <Box alignContent="center">
              <Typography variant="h7">Gợi ý</Typography>
            </Box>
            {suggestions.map((item) => (
              <ListItem key={item.label}>
                <Box>{item.icon}</Box>
                <Box>{item.label}</Box>
              </ListItem>
            ))}
          </ListContainer>
          <ListContainer>
            {items.map((item) => (
              <ListItem key={item.label}>
                <Box>{item.icon}</Box>
                <Box>{item.label}</Box>
              </ListItem>
            ))}
          </ListContainer>
        </ShowSearchContainer>
      </SearchContainerStyled>
    </SearchContainer>
  );
}
