'use client';

import { navConfig } from '~/layout/login/navbar/NavConfig';
import styles from '~styles/Header.module.scss';
import CustomList from '../list/CustomList';

function LoginHeaderBar() {
  const navList = navConfig[0].items;

  return <CustomList list={navList} defaultActive={4} styles={styles} />;
}
export default LoginHeaderBar;
