import NavigateNextRoundedIcon from '@mui/icons-material/NavigateNextRounded';
import {
  Breadcrumbs as MUIBreadcrumbs,
  breadcrumbsClasses,
  styled,
  Typography,
} from '@mui/material';

export default function Breadcrumbs({
  links,
  activeLast = false,
  ...otherProps
}) {
  // const currentLink = links[links.length - 1].name;
  // const listDefault = links.map((link, index) => {
  //   const isLast = index === links.length - 1;
  //   return (
  //     <Typography
  //       key={link.name}
  //       variant="body1"
  //       sx={{
  //         color: isLast ? 'text.primary' : 'text.secondary',
  //         fontWeight: isLast ? 600 : 400,
  //       }}
  //     >
  //       {link.name}
  //     </Typography>
  //   );
  // });

  return (
    <BreadcrumbsStyled
      aria-label="breadcrumb"
      separator={<NavigateNextRoundedIcon fontSize="small" />}
    >
      <Typography variant="body1">Dashboard</Typography>
      <Typography
        variant="body1"
        sx={{ color: 'text.primary', fontWeight: 600 }}
      >
        Home
      </Typography>
    </BreadcrumbsStyled>
  );
}

const BreadcrumbsStyled = styled(MUIBreadcrumbs)(({ theme }) => ({
  display: 'flex',
  flexWrap: 'wrap',
  width: '100%',
  margin: theme.spacing(1, 0),
  [`& .${breadcrumbsClasses.separator}`]: {
    color: theme.palette.action.disabled,
    margin: 1,
  },
  [`& .${breadcrumbsClasses.ol}`]: {
    alignItems: 'center',
  },
}));
