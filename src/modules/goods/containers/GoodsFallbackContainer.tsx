import { FC } from 'react';
import { useSelector } from 'react-redux';
import { SimpleSpinner } from '../../common/components';
import { DataEmpty } from '../../common/components';
import { Typography } from '../../core/components';
import { DataEmptyWrapper, SpinnerWrapper } from '../components';
import { selGoodsState } from '../stores';

export const GoodsFallbackContainer: FC = () => {
  const goodsState = useSelector(selGoodsState);

  const shouldShowSpinner = goodsState.loading;

  const isDataEmpty = Boolean(
    !goodsState.loading && goodsState.goodsList.length === 0
  );
  return (
    <>
      {shouldShowSpinner && (
        <SpinnerWrapper>
          <SimpleSpinner loading={shouldShowSpinner} />
        </SpinnerWrapper>
      )}
      {isDataEmpty && (
        <DataEmptyWrapper>
          <div className="empty">
            <DataEmpty visible={isDataEmpty}>
              <Typography $color="secondary" size="md">
                검색 결과 없음
              </Typography>
            </DataEmpty>
          </div>
        </DataEmptyWrapper>
      )}
    </>
  );
};
