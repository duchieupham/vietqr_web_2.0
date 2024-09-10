import { List, ListItemButton, ListItemText } from '@mui/material';
import { useTranslations } from 'next-intl';
import Link from 'next/link';
import { useState } from 'react';

export default function CustomList({
  list,
  styles,
  style,
  typographyStyle,
  ...props
}) {
  const [selectedTab, setSelectedTab] = useState(null);
  const t = useTranslations();
  const [activeLink, setActiveLink] = useState(4);

  const onClickLink = (id) => {
    setActiveLink(id);
    setSelectedTab(id);
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
            transform: selectedTab === item.id ? 'scale(0.97)' : 'scale(1)',
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
          onClick={() => onClickLink(item.id)}
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
                fontSize: {
                  xs: '12px',
                  md: '15px',
                },
              }}
            />
          </Link>
        </ListItemButton>
      ))}
    </List>
  );
}
