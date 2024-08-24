import { Stack } from '@mui/material';
import { useRouter } from 'next/router';
import { useEffect } from 'react';
import Scrollbar from '~/components/Scrollbar';
import { useCollapseDrawer } from '~/contexts/CollapseDrawerContext';
import useResponsive from '~/hooks/useResponsive';

export default function NavbarVertical({ isOpenSidebar, onCloseSidebar }) {
  const { pathname } = useRouter();
  const isDesktop = useResponsive('up', 'lg');
  const {
    isCollapse,
    collapseClick,
    collapseHover,
    onToggleCollapse,
    onHoverEnter,
    onHoverLeave,
  } = useCollapseDrawer();

  useEffect(() => {
    if (isOpenSidebar) {
      onCloseSidebar();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pathname]);

  const renderContent = (
    <Scrollbar
      sx={{
        heigh: 1,
        '& .simplebar-content': {
          height: 1,
          display: 'flex',
          flexDirection: 'column',
        },
      }}
    >
      <Stack
        spacing={3}
        sx={{
          pt: 3,
          pb: 2,
          px: 2.5,
          flexShrink: 0,
          ...(isCollapse && { alignItems: 'center' }),
        }}
      >
        <Stack
          direction="row"
          alignItems="center"
          justifyContent="space-between"
        >
          {isDesktop && !isCollapse && (
            <CollapseButton
              onToggleCollapse={onToggleCollapse}
              collapseClick={collapseClick}
            />
          )}
        </Stack>
      </Stack>
    </Scrollbar>
  );
  return <div>NavbarVertical</div>;
}
