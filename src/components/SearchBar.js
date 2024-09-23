import { Box } from '@mui/material';
import ExpandSearchBar from '~/sections/dashboard/searchbar/ExpandSearchBar';

export default function SearchBar() {
  return (
    <Box sx={{ display: 'flex', alignItems: 'center', position: 'relative' }}>
      <ExpandSearchBar />
    </Box>
  );
}
