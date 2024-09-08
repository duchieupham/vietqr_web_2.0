import { Menu } from '@mui/material';

export default function MenuPopover({ children, sx, ...props }) {
  return (
    <Menu
      anchorOrigin={{
        vertical: 'bottom',
        horizontal: 'center',
      }}
      transformOrigin={{
        vertical: 'top',
        horizontal: 'center',
      }}
      sx={{
        '& .MuiMenu-list': {
          paddingTop: 0,
          paddingBottom: 0,
        },
        ...sx,
      }}
      {...props}
    >
      {children}
    </Menu>
  );
}
