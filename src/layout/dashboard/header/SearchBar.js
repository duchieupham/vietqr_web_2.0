import SearchIcon from '@mui/icons-material/Search';
import {
  Badge,
  Box,
  Button,
  ClickAwayListener,
  IconButton,
  Input,
  InputAdornment,
  Slide,
  styled,
} from '@mui/material';
import { useState } from 'react';

export default function SearchBar() {
  const [isOpen, setIsOpen] = useState(false);

  const handleOpen = () => {
    setIsOpen((prevState) => !prevState);
  };
  const handleClose = () => {
    setIsOpen(false);
  };

  return (
    <ClickAwayListener onClickAway={handleOpen}>
      <Box>
        {!isOpen && (
          <IconButton onClick={handleOpen}>
            <Badge
              badgeContent={0}
              color="primary"
              sx={{ '& .MuiBadge-badge': { display: 'none' } }}
            >
              <SearchIcon sx={{ width: 20, height: 20 }} />
            </Badge>
          </IconButton>
        )}
        <Slide direction="down" in={isOpen} mountOnEnter unmountOnExit>
          <SearchBarStyled>
            <Input
              autoFocus
              fullWidth
              disableUnderline
              placeholder="Tìm kiếm..."
              startAdornment={<StartAdornmentItems />}
              sx={{ mr: 1, fontWeight: 'fontWeightBold' }}
            />
            <Button variant="contained" onClick={handleClose}>
              Search
            </Button>
          </SearchBarStyled>
        </Slide>
      </Box>
    </ClickAwayListener>
  );
}

const StartAdornmentItems = () => (
  <InputAdornment position="start">
    <SearchIcon sx={{ color: 'text.disabled', width: 20, height: 20 }} />
  </InputAdornment>
);

const SearchBarStyled = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  padding: theme.spacing(0, 2),
  boxShadow: theme.shadows[2],
  borderRadius: theme.shape.borderRadius,
  backgroundColor: theme.palette.background.paper,
  position: 'absolute',
  top: 0,
  right: 0,
  width: '100%',
  maxWidth: '500px',
  zIndex: 10,
}));
