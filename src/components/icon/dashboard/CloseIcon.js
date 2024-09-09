import React from 'react';

function CLoseIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="22"
      height="22"
      fill="none"
      viewBox="0 0 22 22"
    >
      <path
        fill="#fff"
        d="M22 11c0 6.075-4.925 11-11 11S0 17.075 0 11 4.925 0 11 0s11 4.925 11 11z"
      />
      <path
        stroke="#666A72"
        strokeOpacity="0.1"
        d="M21.5 11c0 5.799-4.701 10.5-10.5 10.5S.5 16.799.5 11 5.201.5 11 .5 21.5 5.201 21.5 11z"
      />
      <path
        stroke="#666A72"
        strokeLinecap="round"
        strokeWidth="2"
        d="M13 15l-3.293-3.293a1 1 0 010-1.414L13 7"
      />
    </svg>
  );
}

export default React.memo(CLoseIcon);
