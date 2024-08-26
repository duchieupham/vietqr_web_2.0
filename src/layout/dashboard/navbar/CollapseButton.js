import { Box } from '@mui/material';
import { IconButtonAnimate } from '~/components/animate/IconButtonAnimate';

const icon = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <polyline points="6 9 12 15 18 9" />
  </svg>
);

export default function CollapseButton({ onToggleCollapse, collapseClick }) {
  return (
    <IconButtonAnimate onClick={onToggleCollapse}>
      <Box
        sx={{
          lineHeight: 0,
          transition: (theme) =>
            theme.transitions.create('transform', {
              duration: theme.transitions.duration.shorter,
            }),
          ...(collapseClick && {
            transform: 'rotate(180deg)',
          }),
        }}
      >
        {icon}
      </Box>
    </IconButtonAnimate>
  );
}
