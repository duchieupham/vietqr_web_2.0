import CustomList from '~/components/list/CustomList';
import { NAVBAR_CONFIG } from '~/layout/login/navbar/NavConfig';

function LoginHeaderBar({ style, styles }) {
  const navList = NAVBAR_CONFIG.login.items;

  return <CustomList list={navList} styles={styles} style={style} />;
}
export default LoginHeaderBar;
