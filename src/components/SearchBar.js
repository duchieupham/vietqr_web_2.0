/* eslint-disable no-nested-ternary */
/* eslint-disable max-len */
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
import { debounce } from 'lodash-es';
import { useTranslations } from 'next-intl';
import Image from 'next/image';
import { useEffect, useMemo, useState } from 'react';
import { searchAPI } from '~/api/search/searchService';
import { useAuthContext } from '~/contexts/hooks';
import { ButtonGradient } from './button';
import { GradientCircularProgress } from './feedback/loading';

const SearchContainer = ({
  theme,
  isExpanded,
  isEmptySearch,
  children,
  ...props
}) => {
  const collapseStyle = {
    width: '70%',
    maxWidth: '16rem',
    background: '#F0F4FA',
  };
  const expandStyle = {
    width: '100%',
    maxWidth: '40vw',
    background: theme.palette.aiColor,
    '&::before': {
      content: '""',
      position: 'absolute',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      zIndex: 1,
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
        position: 'absolute',
        borderRadius: '8px',
        transition: 'all 0.3s ease',
        height: 'fit-content',
        ...(isExpanded ? expandStyle : collapseStyle),
      }}
      {...props}
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
  overflow: 'hidden',
  transition: 'background 0.2s ease',
  zIndex: 1,
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

const DEFAULT_SEARCH_RESULT = {
  feat: [],
  transaction: [],
  guidance: [],
  others: [],
};

function searchByLabel(query, t) {
  if (!query) return { ...DEFAULT_SEARCH_RESULT };

  const newSearchResult = { ...DEFAULT_SEARCH_RESULT };

  // Search in ITEMS
  ITEMS.forEach((item) => {
    if (newSearchResult[item.label]) {
      newSearchResult[item.label] = [];
    }
    // Search in children of each item
    // If the label of the child includes the query, add it to the new search result
    if (item.children.length > 0) {
      item.children.forEach((child) => {
        const labelConverted = t(child.label).trim().toLowerCase(); // Convert label to text for searching in translation
        if (!labelConverted?.includes(query)) {
          return;
        }
        const isDuplicate = newSearchResult[item.label].some(
          (existing) => existing.label === child.label,
        );
        // check duplicate search result
        if (!isDuplicate) {
          newSearchResult[item.label].push(child);
        }
      });
    }
  });
  return newSearchResult;
}

function ShowTheSearchResult({ label, searchResult }) {
  const t = useTranslations();
  const result = searchResult[label];

  if (result.length === 0) return null;

  const renderedResults = useMemo(
    () =>
      result?.map((item) => (
        <ListItem key={item.label}>
          <Image src={item.icon} width={30} height={30} alt="icon" />
          <Box>{t(item.label)}</Box>
        </ListItem>
      )),
    [result],
  );

  return <Box>{renderedResults}</Box>;
}

export default function SearchBar() {
  const { session } = useAuthContext();
  const t = useTranslations();
  const theme = useTheme();

  const [isExpanded, setIsExpanded] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResult, setSearchResult] = useState(DEFAULT_SEARCH_RESULT);
  const [isLoading, setIsLoading] = useState(false);

  const handleClearQuery = (e) => {
    if (e) {
      e.preventDefault();
    }
    setSearchQuery('');
    setSearchResult(DEFAULT_SEARCH_RESULT);
  };

  const expandSearch = () => {
    setIsExpanded(true);
  };

  const collapseSearch = () => {
    if (searchQuery.trim() === '') {
      setIsExpanded(false);
      handleClearQuery();
    }
  };

  const isEmptySearch = searchQuery.trim() === '';

  const handleSearch = async (query) => {
    setIsLoading(true);
    const parsedQuery = query.trim().toLowerCase();

    // if the query is empty, reset the search results and return early
    if (!parsedQuery) {
      handleClearQuery();
      setIsLoading(false);
      return;
    }

    const result = searchByLabel(parsedQuery, t);

    // search transaction if query length >= 10 characters
    if (parsedQuery.length >= 10) {
      const transactionResult = await searchAPI.searchTransaction({
        searchQuery: parsedQuery,
        userId: session?.userId, // required
        // userId: '648dca06-4f72-4df8-b98f-429f4777fbda', // test
      });

      if (transactionResult) {
        result.transaction = transactionResult.map((txn) => ({
          // id: txn.transactionId,
          amount: txn.amount,
          content: txn.content,
        }));
      }
    }

    // set the new search result
    setSearchResult(result);
    setIsLoading(false);
  };

  // Debounce search change
  const debouncedSearchChange = useMemo(() => debounce(handleSearch, 300), []);

  // Clear debounce on unmount
  useEffect(
    () => () => {
      debouncedSearchChange.cancel();
    },
    [debouncedSearchChange],
  );

  const onInputChange = (e) => {
    const query = e.target.value;
    setSearchQuery(query);
    debouncedSearchChange(query);
  };

  const searchResultIsEmpty = useMemo(
    () => Object.values(searchResult).every((result) => result.length === 0),
    [searchResult],
  );

  return (
    <SearchContainer
      isExpanded={isExpanded}
      isEmptySearch={isEmptySearch}
      theme={theme}
    >
      <TextField
        onFocus={expandSearch}
        onBlur={collapseSearch}
        onChange={onInputChange}
        variant="outlined"
        placeholder={`${t('Hello')} ${session?.firstName}, ${t('search')}`}
        value={searchQuery}
        autoComplete="off"
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
          endAdornment: !isEmptySearch && (
            <InputAdornment
              position="end"
              sx={{ paddingRight: 1 }}
              onMouseDown={handleClearQuery} // just clear the search query don't collapse the search bar
            >
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
          cursor: 'pointer',
          width: '100%',
          height: 40,
          '& .MuiOutlinedInput-root': {
            padding: 0,
            zIndex: 1,
            border: 'none',
            backgroundColor: 'transparent',
          },
          '& .MuiInputBase-root': {
            height: '100%',
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
      {isExpanded && !isEmptySearch && (
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
              {isLoading ? (
                <Box sx={{ display: 'flex', justifyContent: 'center' }}>
                  <GradientCircularProgress />
                </Box>
              ) : searchResultIsEmpty ? (
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
