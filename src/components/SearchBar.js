import { Box, styled } from '@mui/material';
import { useAppSelector } from '~/redux/hook';
import { CollapseSearchBar } from '~/sections/dashboard/searchbar';
import ExpandSearchBar from '~/sections/dashboard/searchbar/ExpandSearchBar';

export default function SearchBar() {
  const { isExpanded } = useAppSelector((state) => state.search);
  return (
    <SearchBarContainer>
      {isExpanded ? (
        // Expanded searchbar
        <ExpandSearchBar />
      ) : (
        // Default searchbar
        <CollapseSearchBar />
      )}
    </SearchBarContainer>
  );
}

const SearchBarContainer = styled(Box)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  position: 'relative',
}));
