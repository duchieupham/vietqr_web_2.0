import { Breadcrumbs as MUIBreadcrumbs, Link as MUILink } from '@mui/material';
import _upperFirst from 'lodash-es/upperFirst';
import { useTranslations } from 'next-intl';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { DASHBOARD_TYPE } from '~/constants/dashboard';

export default function Breadcrumbs({ activeLast = false, ...otherProps }) {
  const pathname = usePathname();

  const path = pathname.startsWith('/') ? pathname : `/${pathname}`;

  const pathArray = path.split('/').filter(Boolean);

  const listPath = pathArray.map((segment, index) => {
    const href = `/${pathArray.slice(0, index + 1).join('/')}`;
    return <LinkItem key={href} href={href} label={segment} />;
  });

  const nextImage = (
    <Image
      src="/icons/next-icon.svg"
      width={20}
      height={20}
      alt="next icon"
      style={{
        cursor: 'pointer',
        margin: '4px 0 0 0',
      }}
    />
  );

  return (
    <MUIBreadcrumbs
      separator={nextImage}
      aria-label="breadcrumb"
      sx={{
        margin: '0 1.5rem',
        backgroundColor: '#F0F4FA',
        borderRadius: '8px',
        height: 30,
        width: 'fit-content',
        px: 1.5,
        alignItems: 'center',
        '& .MuiBreadcrumbs-ol': {
          justifyContent: 'center',
          pt: 0.2,
        },
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
          textDecoration: 'none',
          cursor: 'pointer',
          fontSize: {
            xs: 10,
            md: 12,
          },
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          pt: 0.6,
          color: '#666A72',
          '& > div': { display: 'inherit' },
        }}
      >
        {DASHBOARD_TYPE.map((item) => {
          if (item.path === href) {
            return (
              <Image
                src={item.icon}
                width={20}
                height={20}
                alt={item.label}
                key={item.path}
              />
            );
          }
          return null; // Ensure a return value for every iteration
        })}
        <span style={{ paddingTop: 0.5 }}>
          {t(convertBreadcrumbName(label))}
        </span>
      </MUILink>
    </Link>
  );
}
