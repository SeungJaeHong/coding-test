import { FC, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selGoodsState } from '../stores/goods.selector';

import { GoodsList } from '../components';
import { effSearchGoods } from '../stores';

export const GoodsListContainer: FC = () => {
  const dispatch = useDispatch();
  const goodsState = useSelector(selGoodsState);

  useEffect(() => {
    dispatch(effSearchGoods({ goodsName: '', page: 1, size: 1 }));
  }, [dispatch]);

  return <GoodsList {...goodsState} />;
};
