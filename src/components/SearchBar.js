import { Box, Popper } from '@mui/material';
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
  const [anchorEl, setAnchorEl] = useState(null);

  const isEmpty = !contexts || contexts.length === 0;

  const onClickSearch = (event) => {
    setAnchorEl(anchorEl ? null : event.currentTarget);
  };

  const open = Boolean(anchorEl);

  const onClickExpandedSearchBar = () => {
    setIsExpanded((prev) => !prev);
  };

  const id = open ? 'simple-popper' : undefined;

  return (
    // SearchBarContainer
    <Box
      sx={{
        display: 'flex',
        alignItems: 'center',
      }}
    >
      <CollapseSearchBar onClick={onClickSearch} />
      <Popper id={id} open={open} anchorEl={anchorEl}>
        <ExpandSearchBar />
      </Popper>
    </Box>
  );
}
