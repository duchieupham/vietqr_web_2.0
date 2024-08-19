import {
  Box,
  Container,
  List,
  ListItemButton,
  ListItemText,
} from '@mui/material';
import { useTranslations } from 'next-intl';
import { useRef, useState } from 'react';
import styles from '~styles/Header.module.scss';

const headerList = [
  {
    id: 1,
    name: 'headerQR',
  },
  {
    id: 2,
    name: 'headerServiceConnect',
  },
  {
    id: 3,
    name: 'headerLogin',
    style: 'nav__links_login',
  },
  {
    id: 4,
    name: 'headerRegister',
  },
];

function LoginHeader() {
  const selectedTab = useRef(null);
  const t = useTranslations();

  const handleClickTab = (id) => {
    selectedTab.current = id;
  };

  const [activeLink, setActiveLink] = useState(1);
  const [menuOpen, setMenuOpen] = useState(false);

  const handleLinkClick = (type) => {
    setActiveLink(type);
    setMenuOpen(false); // Close menu after clicking a link
  };

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <Container component="header" className={styles.header}>
      <List component="nav" className={styles.nav}>
        {headerList.map((item) => (
          <ListItemButton
            key={item.id}
            alignItems="center"
            selected={activeLink === item.id}
            className={styles.nav__links}
            sx={{
              width: selectedTab.current === item.id ? '80px' : '100px',
              height: selectedTab.current === item.id ? '40px' : '50px',
              alignItems: 'center',
              borderRadius: '8px',
              transition:
                'width 0.3s ease, height 0.3s ease, transform 0.3s ease',
              transform:
                selectedTab.current === item.id ? 'scale(0.97)' : 'scale(1)',
              backgroundColor:
                activeLink === item.id ? 'transparent' : 'initial',
              '&:hover': {
                background:
                  'linear-gradient(90deg, rgba(0,198,255,0.5), rgba(0,114,255,0.5))',
                textDecoration: 'none',
              },
              '&.Mui-selected': {
                backgroundColor: 'transparent',
                boxShadow: 'none',
                transform: 'scale(0.98)',
                '&:hover': {
                  background:
                    'linear-gradient(90deg, rgba(0,198,255,0.5), rgba(0,114,255,0.5))',
                  textDecoration: 'none',
                  opacity: 0.9,
                },
                '& .MuiListItemButton-root': {
                  backgroundColor: 'transparent',
                  boxShadow: 'none',
                },
              },
            }}
            onClick={() => handleLinkClick(item.id)}
          >
            <ListItemText
              sx={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: activeLink === item.id ? '#00c6ff' : 'inherit',
              }}
              primary={t(item.name)}
              className={`${activeLink === item.id ? styles.active : ''}`}
            />
          </ListItemButton>
        ))}
      </List>
    </Container>
  );
}
export default LoginHeader;
