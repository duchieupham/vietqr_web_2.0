'use client';

import { navConfig } from '~/layout/login/navbar/NavConfig';
import CustomList from '../list/CustomList';

function LoginHeaderBar({ style, styles, typographyStyle }) {
  const navList = navConfig[0].items;

  return (
    <CustomList
      list={navList}
      defaultActive={4}
      styles={styles}
      style={style}
      typographyStyle={typographyStyle}
    />
  );
}
export default LoginHeaderBar;
