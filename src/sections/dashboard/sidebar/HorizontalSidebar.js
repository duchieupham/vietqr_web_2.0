import { Box, styled } from '@mui/material';
import { useAppSelector } from '~/redux/hook';

const PageWrapper = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexGrow: 1,
  height: 50,
  backgroundColor: theme.palette.lily.white.linear,
}));

export default function HorizontalSidebar() {
  const { dashboardType } = useAppSelector((state) => state.app);
  return <PageWrapper>{/*  Add your code here */}</PageWrapper>;
}
