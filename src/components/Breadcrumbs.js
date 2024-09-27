/* eslint-disable no-restricted-syntax */
import { Breadcrumbs as MUIBreadcrumbs, Link as MUILink } from '@mui/material';
import _upperFirst from 'lodash-es/upperFirst';
import { useTranslations } from 'next-intl';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useMemo } from 'react';
import { DASHBOARD_TYPE } from '~/constants/dashboard';

export default function Breadcrumbs({ activeLast = false, ...otherProps }) {
  const pathname = usePathname();

  const flattenRoutes = (routes) => {
    let flattenedRoutes = [];

    for (const route of routes) {
      flattenedRoutes.push({
        id: route.id,
        label: route.label,
        path: route.path,
        icon: route.icon,
        iconActive: route.iconActive,
        shortLabel: route.shortLabel,
      });

      if (route.children && route.children.length > 0) {
        flattenedRoutes = flattenedRoutes.concat(flattenRoutes(route.children));
      }
    }

    return flattenedRoutes;
  };

  const convertedBreadcrumbs = useMemo(() => {
    const breadcrumbs = [];
    const pathArray = pathname.split('/').filter(Boolean);

    const flattenedRoutes = flattenRoutes(DASHBOARD_TYPE);
    for (const path of pathArray) {
      const foundRoute = flattenedRoutes.find((route) => route.id === path);
      if (foundRoute) breadcrumbs.push(foundRoute);
    }
    console.log('breadcrumbs', breadcrumbs);

    return {
      current: pathArray[pathArray.length - 1],
      items: breadcrumbs,
    };
  }, [pathname]);

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
      {convertedBreadcrumbs.items.map((breadcrumb) => (
        <LinkItem
          key={breadcrumb.id}
          id={breadcrumb.id}
          href={breadcrumb.path}
          label={breadcrumb.label}
          icon={breadcrumb.icon}
          current={convertedBreadcrumbs.current}
        />
      ))}
    </MUIBreadcrumbs>
  );
}

// LinkItem component for rendering individual breadcrumb links
function LinkItem({ id, href, label, icon, current, ...otherProps }) {
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
        {...otherProps}
      >
        <Image src={icon} width={20} height={20} alt={label} />
        <span style={{ paddingTop: 0.5 }}>{t(label)}</span>
      </MUILink>
    </Link>
  );
}
