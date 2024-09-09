import React from 'react';

function LinkIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="14"
      height="14"
      fill="none"
      viewBox="0 0 14 14"
    >
      <path
        fill="#DADADA"
        fillOpacity="0.3"
        stroke="#666A72"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
        d="M2.98 12.536L1.464 11.02c-.7-.7-.79-1.804-.21-2.607.431-.6.96-1.124 1.563-1.552l.28-.2a1.627 1.627 0 012.093.176l1.997 1.996c.547.548.62 1.41.172 2.041l-.22.31a6.726 6.726 0 01-1.552 1.563 2.018 2.018 0 01-2.607-.21z"
      />
      <path
        fill="#DADADA"
        fillOpacity="0.3"
        d="M12.536 2.98L11.02 1.464c-.7-.7-1.804-.79-2.607-.21-.6.431-1.124.96-1.552 1.563l-.2.28a1.627 1.627 0 00.176 2.093l1.996 1.997c.548.547 1.41.62 2.041.172l.31-.22a6.726 6.726 0 001.563-1.552 2.018 2.018 0 00-.21-2.607z"
      />
      <path
        stroke="#666A72"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
        d="M12.536 2.98L11.02 1.464c-.7-.7-1.804-.79-2.607-.21-.6.431-1.124.96-1.552 1.563l-.2.28a1.627 1.627 0 00.176 2.093l1.996 1.997c.548.547 1.41.62 2.041.172l.31-.22a6.726 6.726 0 001.563-1.552 2.018 2.018 0 00-.21-2.607zM8.861 5.138L5.146 8.853"
      />
    </svg>
  );
}

export default React.memo(LinkIcon);
