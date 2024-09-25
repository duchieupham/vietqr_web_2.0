import { Box, styled } from '@mui/material';
import { useState } from 'react';
import ExpandSearchBar from '~/sections/dashboard/searchbar/ExpandSearchBar';

export default function SearchBar() {
  const [isExpanded, setIsExpanded] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [contexts, setContexts] = useState([]);
  const [isSearch, setIsSearch] = useState(false);
  const [isNoContext, setIsNoContext] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const isEmpty = !contexts || contexts.length === 0;

  const expandSearch = () => {
    setIsExpanded(true);
  };
  const collapseSearch = () => {
    setIsExpanded(false);
  };

  return (
    // SearchBarContainer
    <ExpandSearchBar
      isExpanded={isExpanded}
      expandSearch={expandSearch}
      collapseSearch={collapseSearch}
    />
  );
}
