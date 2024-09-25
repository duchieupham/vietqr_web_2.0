import { useState } from 'react';
import ExpandSearchBar from '~/sections/dashboard/searchbar/ExpandSearchBar';

export default function SearchBar() {
  const [isExpanded, setIsExpanded] = useState(false);

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
