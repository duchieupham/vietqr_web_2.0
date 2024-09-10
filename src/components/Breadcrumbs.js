import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';
import {
  Box,
  Breadcrumbs as MUIBreadcrumbs,
  Link as MUILink,
} from '@mui/material';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';

export default function Breadcrumbs({ ...otherProps }) {
  const [crumbs, setCrumbs] = useState([]);
  const pathname = usePathname();

  // TODO:  Slit the pathname and set the crumbs array
  useEffect(() => {
    // Split the pathname and filter out any empty strings
    const crumbsArray = pathname.split('/').filter(Boolean);
    // Create the crumbs array
    const _crumbs = crumbsArray.map((crumb, index) => ({
      href: `/${crumbsArray.slice(0, index + 1).join('/')}`,
      label: crumb,
    }));
    setCrumbs(_crumbs);
  }, [pathname]);

  return (
    <MUIBreadcrumbs
      separator={
        <FiberManualRecordIcon sx={{ fontSize: 5, m: 1 }} fontSize="small" />
      }
    >
      {crumbs.map((crumb) => (
        <LinkItem key={crumb.href} href={crumb.href} label={crumb.label} />
      ))}
    </MUIBreadcrumbs>
  );
}

function LinkItem({ href, label, icon, ...otherProps }) {
  return (
    <Link
      href={href}
      passHref
      style={{
        textDecoration: 'none',
      }}
    >
      <MUILink
        component="span"
        variant="body2"
        sx={{
          lineHeight: 2,
          display: 'flex',
          alignItems: 'center',
          color: 'text.primary',
          textDecoration: 'none',
          '& > div': { display: 'inherit' },
        }}
      >
        {icon && (
          <Box sx={{ mr: 1, '& svg': { width: 20, height: 20 } }}>{icon}</Box>
        )}
        {label}
      </MUILink>
    </Link>
  );
}
