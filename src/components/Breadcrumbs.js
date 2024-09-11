import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';
import {
  Breadcrumbs as MUIBreadcrumbs,
  Link as MUILink,
  Typography,
} from '@mui/material';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Breadcrumbs({ activeLast = false, ...otherProps }) {
  const pathname = usePathname();

  const path = pathname.startsWith('/') ? pathname : `/${pathname}`;

  const pathArray = path.split('/').filter(Boolean);

  const listDefault = pathArray.map((segment, index) => {
    const href = `/${pathArray.slice(0, index + 1).join('/')}`;
    return <LinkItem key={href} href={href} label={segment} />;
  });

  const listActiveLast = pathArray.map((segment, index) => {
    const href = `/${pathArray.slice(0, index + 1).join('/')}`;
    return (
      <div key={href}>
        {index !== pathArray.length - 1 ? (
          <LinkItem href={href} label={segment} />
        ) : (
          <Typography
            variant="body2"
            sx={{
              maxWidth: 260,
              overflow: 'hidden',
              whiteSpace: 'nowrap',
              color: 'text.disabled',
              textOverflow: 'ellipsis',
            }}
          >
            {segment}
          </Typography>
        )}
      </div>
    );
  });

  return (
    <MUIBreadcrumbs
      separator={
        <FiberManualRecordIcon sx={{ fontSize: 5, m: 0.5 }} fontSize="small" />
      }
      {...otherProps}
    >
      {activeLast ? listDefault : listActiveLast}
    </MUIBreadcrumbs>
  );
}

// LinkItem component for rendering individual breadcrumb links
function LinkItem({ href, label, ...otherProps }) {
  return (
    <Link href={href} passHref style={{ textDecoration: 'none' }}>
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
        {label}
      </MUILink>
    </Link>
  );
}
