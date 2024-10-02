/* eslint-disable indent */
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
import { useState } from 'react';
import { ButtonGradient } from '~/components/button';
import { useAuthContext } from '~/contexts/hooks';

const SearchContainer = ({
  theme,
  isExpanded,
  isNoContexts,
  children,
  ...props
}) => {
  const collapseStyle = {
    left: '21rem',
    width: '16rem',
    height: '40px',
    transition: 'left 0.3s ease, width 0.5s ease, height 0.3s ease',
  };
  const expandStyle = {
    left: 0,
    width: '38rem',
    height: 'fit-content',
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
  return (
    <Box
      sx={{
        top: '8px',
        position: 'absolute',
        zIndex: 1,
        overflow: 'hidden',
        borderRadius: '8px',
        ...(isExpanded ? expandStyle : collapseStyle),
      }}
    >
      {children}
    </Box>
  );
};

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
    label: 'feat',
  },
  {
    id: 1,
    icon: '',
    label: 'transaction',
  },
  {
    id: 2,
    icon: '',
    label: 'guidance',
  },
  {
    id: 3,
    icon: '',
    label: 'others',
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
    label: 'transaction', // Giao dịch
    children: [],
  },
  {
    id: 2,
    label: 'guidance', // Hướng dẫn
    children: [],
  },
  {
    id: 3,
    label: 'others',
    children: [],
  },
];

function searchByLabel(query, t) {
  const searchResult = {
    feat: [],
    transaction: [],
    guidance: [],
    others: [],
  };
  // Search in ITEMS
  ITEMS.forEach((item) => {
    // Search in children of each item
    // If the label of the child includes the query, add it to the search result
    if (item.children.length > 0) {
      item.children.forEach((child) => {
        const labelConverted = t(child.label);
        if (labelConverted.toLowerCase().includes(query.toLowerCase())) {
          searchResult[item.label].push(child);
        }
      });
    }
  });
  return searchResult;
}

function ShowTheSearchResult({ label, searchResult }) {
  const t = useTranslations();
  return (
    <Box>
      {Object.keys(searchResult).map((key) => {
        if (searchResult[key].length === 0) {
          return null;
        }
        return (
          <Box key={key}>
            {label === key &&
              searchResult[key].length > 0 &&
              searchResult[key]?.map((item) => (
                <ListItem key={item.label}>
                  <Image src={item.icon} width={30} height={30} alt="icon" />
                  <Box>{t(item.label)}</Box>
                </ListItem>
              ))}
          </Box>
        );
      })}
    </Box>
  );
}

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

  const [searchResult, setSearchResult] = useState({
    feat: [],
    transaction: [],
    guidance: [],
    others: [],
  });

  const isNoContexts = searchQuery.length === 0 && searchQuery.trim() === '';

  const onSearchChange = (e) => {
    handleSearch(e);
    const query = e.target.value;
    if (query) {
      const result = searchByLabel(query, t);
      setSearchResult(result);
    } else {
      setSearchResult({
        feat: [],
        transaction: [],
        guidance: [],
        others: [],
      });
    }
  };

  return (
    <SearchContainer
      isExpanded={isExpanded}
      isNoContexts={isNoContexts}
      theme={theme}
    >
      <TextField
        onFocus={expandSearch}
        variant="outlined"
        placeholder={`${t('Hello')} ${session?.firstName}, ${t('search')}`}
        onChange={onSearchChange}
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
          width: 'fit-content',
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
            {/* Default suggestions */}
            <Box
              sx={{
                display: 'flex',
                gap: '20px',
                paddingTop: '12px',
              }}
            >
              <ButtonGradient
                sx={{
                  width: 'fit-content',
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
            {/* Search result content */}
            <Box
              sx={{
                paddingTop: '12px',
                paddingBottom: '10px',
                overflowY: 'auto',
                maxHeight: '300px',
                '&::-webkit-scrollbar': {
                  width: '0px',
                },
              }}
            >
              {Object.values(searchResult).every(
                (_searchResult) => _searchResult.length === 0,
              ) ? (
                <Box
                  sx={{
                    fontSize: '12px',
                    color: theme.palette.slateGray,
                    mt: 0.5,
                  }}
                >
                  {t('noResult')}
                </Box>
              ) : (
                ITEMS.map((item) => (
                  <ListItem
                    key={item.label}
                    sx={{
                      flexDirection: 'column',
                      alignItems: 'flex-start',
                      pt: 0.5,
                    }}
                  >
                    {/* No has context */}
                    {/* Category */}
                    <Box
                      sx={{
                        fontSize: '12px',
                        color: theme.palette.slateGray,
                        mt: 0.5,
                      }}
                    >
                      {t(item.label)}
                    </Box>
                    {/* Search result */}
                    <ShowTheSearchResult
                      searchResult={searchResult}
                      label={item.label}
                    />
                  </ListItem>
                ))
              )}
            </Box>
          </Box>
        </>
      )}
    </SearchContainer>
  );
}
