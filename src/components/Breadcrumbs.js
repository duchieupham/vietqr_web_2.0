import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';
import { Breadcrumbs as MUIBreadcrumbs, Link as MUILink } from '@mui/material';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import _upperFirst from 'lodash-es/upperFirst';
import { useTranslations } from 'next-intl';

export default function Breadcrumbs({ activeLast = false, ...otherProps }) {
  const pathname = usePathname();

  const path = pathname.startsWith('/') ? pathname : `/${pathname}`;

  const pathArray = path.split('/').filter(Boolean);

  const listPath = pathArray.map((segment, index) => {
    const href = `/${pathArray.slice(0, index + 1).join('/')}`;
    return <LinkItem key={href} href={href} label={segment} />;
  });

  // const listActiveLast = pathArray.map((segment, index) => {
  //   const href = `/${pathArray.slice(0, index + 1).join('/')}`;
  //   return (
  //     <div key={href}>
  //       {index !== pathArray.length - 1 ? (
  //         <LinkItem href={href} label={segment} />
  //       ) : (
  //         <Typography
  //           variant="body2"
  //           sx={{
  //             maxWidth: 260,
  //             overflow: 'hidden',
  //             whiteSpace: 'nowrap',
  //             color: 'text.disabled',
  //             textOverflow: 'ellipsis',
  //           }}
  //         >
  //           {segment}
  //         </Typography>
  //       )}
  //     </div>
  //   );
  // });

  return (
    <MUIBreadcrumbs
      separator={
        <FiberManualRecordIcon sx={{ fontSize: 5 }} fontSize="small" />
      }
      sx={{
        ml: 2,
      }}
      {...otherProps}
    >
      {listPath}
    </MUIBreadcrumbs>
  );
}

function convertBreadcrumbName(name) {
  return _upperFirst(
    name
      .split('-')
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(' '),
  );
}

// LinkItem component for rendering individual breadcrumb links
function LinkItem({ href, label, ...otherProps }) {
  const t = useTranslations();
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
          cursor: 'pointer',
          '& > div': { display: 'inherit' },
        }}
      >
        {t(convertBreadcrumbName(label))}
      </MUILink>
    </Link>
  );
}
