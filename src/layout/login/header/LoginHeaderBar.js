import { navConfig } from '~/layout/login/navbar/NavConfig';
import CustomList from '../../../components/list/CustomList';

function LoginHeaderBar({ style, styles, typographyStyle }) {
  const navList = navConfig[0].items;

  return (
    <CustomList
      list={navList}
      styles={styles}
      style={style}
      typographyStyle={typographyStyle}
    />
  );
}
export default LoginHeaderBar;
