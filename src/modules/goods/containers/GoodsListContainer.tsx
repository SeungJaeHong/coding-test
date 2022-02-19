import { FC } from 'react';
import { batch, useDispatch, useSelector } from 'react-redux';
import { useInfiniteScroll } from '../../common/hooks/useInfiniteScroll';
import { GoodsList } from '../components';
import { actSearchGoodsParamsApply, effSearchGoods } from '../stores';
import { selGoodsState, selSearchGoodsParams } from '../stores/goods.selector';

export const GoodsListContainer: FC = () => {
  const dispatch = useDispatch();
  const goodsState = useSelector(selGoodsState);
  const searchParams = useSelector(selSearchGoodsParams);

  const observingRef = useInfiniteScroll(
    {
      currentPage: searchParams.page,
      loading: goodsState.loading,
      hasNextPage: goodsState.hasNextPage,
    },
    (page) => {
      batch(() => {
        dispatch(actSearchGoodsParamsApply({ page }));
        dispatch(effSearchGoods({ reset: page === 1 }));
      });
    }
  );

  return (
    <>
      <GoodsList {...goodsState} />
      <div ref={observingRef} style={{ height: '10px' }} />
    </>
  );
};
