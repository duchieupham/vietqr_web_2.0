import { useState } from 'react';
import ExpandSearchBar from '~/sections/dashboard/searchbar/ExpandSearchBar';

export default function SearchBar() {
  const [isExpanded, setIsExpanded] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  const expandSearch = () => {
    setIsExpanded(true);
  };

  const collapseSearch = () => {
    setIsExpanded(false);
    setSearchQuery('');
  };

  const handleSearch = (e) => {
    e.preventDefault();
    const { value } = e.target;
    setSearchQuery(value); //
  };

  return (
    // SearchBarContainer
    <ExpandSearchBar
      searchQuery={searchQuery}
      isExpanded={isExpanded}
      expandSearch={expandSearch}
      collapseSearch={collapseSearch}
      handleSearch={handleSearch}
    />
  );
}
