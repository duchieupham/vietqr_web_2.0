import { Box, styled } from '@mui/material';
import { useState } from 'react';
import { CollapseSearchBar } from '~/sections/dashboard/searchbar';
import ExpandSearchBar from '~/sections/dashboard/searchbar/ExpandSearchBar';

export default function SearchBar() {
  const [isExpanded, setIsExpanded] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [contexts, setContexts] = useState([]);
  const [isSearch, setIsSearch] = useState(false);
  const [isNoContext, setIsNoContext] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const isEmpty = !contexts || contexts.length === 0;

  const onClickExpandedSearchBar = () => {
    setIsExpanded((prev) => !prev);
  };

  return (
    // SearchBarContainer
    <Box
      sx={{
        display: 'flex',
        alignItems: 'center',
        position: 'relative',
      }}
    >
      {isExpanded ? (
        // Expanded searchbar
        <ExpandSearchBar isExpanded onClick={onClickExpandedSearchBar} />
      ) : (
        // Default searchbar
        <CollapseSearchBar />
      )}
    </Box>
  );
}
