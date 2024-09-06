import { Box, List, ListItemButton, ListItemText } from '@mui/material';
import { useTranslations } from 'next-intl';
import Link from 'next/link';
import { useRef, useState } from 'react';

export default function CustomList({
  list,
  styles,
  defaultActive,
  style,
  typographyStyle,
  ...props
}) {
  const selectedTab = useRef(null);
  const t = useTranslations();
  const [activeLink, setActiveLink] = useState(defaultActive);
  const [menuOpen, setMenuOpen] = useState(false);
  const handleLinkClick = (type) => {
    setActiveLink(type);
    setMenuOpen(false); // Close menu after clicking a link
  };

  return (
    <List className={styles.nav}>
      {list.map((item) => (
        <ListItemButton
          key={item.id}
          selected={activeLink === item.id}
          sx={{
            borderRadius: '8px',
            transition:
              'width 0.3s ease, height 0.3s ease, transform 0.3s ease',
            transform:
              selectedTab.current === item.id ? 'scale(0.97)' : 'scale(1)',
            backgroundColor: activeLink === item.id ? 'transparent' : 'initial',
            '&:hover': {
              background:
                'linear-gradient(90deg, rgba(0,198,255,0.7), rgba(0,114,255, 1.0))',
              textDecoration: 'none',
              backgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
            },
            '&.Mui-selected': {
              backgroundColor: 'transparent',
              boxShadow: 'none',
              transform: 'scale(0.98)',
              '&:hover': {
                backgroundColor: 'transparent',
                textDecoration: 'none',
              },
            },
            display: 'flex',
            justifyContent: 'center',
            ...style,
          }}
          disableRipple
          disableGutters
          onClick={() => handleLinkClick(item.id)}
          {...props}
        >
          <Link
            href={item.path}
            style={{
              textDecoration: 'none',
              color: activeLink === item.id ? '#00c6ff' : 'inherit',
            }}
            passHref
          >
            <ListItemText
              sx={{
                display: 'flex',
                color: activeLink === item.id ? '#00c6ff' : 'inherit',
              }}
              primary={t(item.name)}
              className={`${activeLink === item.id ? styles.active : ''}`}
              primaryTypographyProps={{
                ...typographyStyle,
              }}
            />
          </Link>
        </ListItemButton>
      ))}
    </List>
  );
}
