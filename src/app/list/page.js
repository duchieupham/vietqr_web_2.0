'use client';

import { Button } from 'antd';
import { useTranslations } from 'next-intl';
import listApi from '~/api/listServices';
import { useAppDispatch, useAppSelector } from '~/redux/hook';
import { setList } from '~/redux/slices/listSlice';

function List() {
  const t = useTranslations();
  const { getList } = listApi;
  const dispatch = useAppDispatch();
  const { list } = useAppSelector((store) => store.list);

  const fetchDummy = async () => {
    const response = await getList();
    dispatch(setList(response));
  };

  return (
    <div>
      <h1>List page</h1>
      <div>{t('title')}</div>
      <Button onClick={fetchDummy}>Get list</Button>
      {list && list.map((item) => <div key={item.id}>{item.title}</div>)}
    </div>
  );
}

export default List;
