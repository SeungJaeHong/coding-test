import { FC } from 'react';
import { useSelector } from 'react-redux';
import { SimpleSpinner } from '../../common/components';
import { DataEmpty } from '../../common/components';
import { DataEmptyWrapper, SpinnerWrapper } from '../components';
import { selGoodsState } from '../stores';

export const GoodsFallbackContainer: FC = () => {
  const goodsState = useSelector(selGoodsState);
  return (
    <>
      <SpinnerWrapper>
        <SimpleSpinner loading={goodsState.loading} />
      </SpinnerWrapper>
      <DataEmptyWrapper>
        <DataEmpty
          visible={Boolean(
            !goodsState.loading && goodsState.goodsList.length === 0
          )}
        />
      </DataEmptyWrapper>
    </>
  );
};
