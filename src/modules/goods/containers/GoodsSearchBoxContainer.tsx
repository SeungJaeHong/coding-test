import { FC } from 'react';
import { batch, useDispatch, useSelector } from 'react-redux';
import { GoodsFilterType } from '../../common/constants';
import { SearchGoodsParams } from '../../core/entities';
import { RootDispatchType } from '../../rootStore';
import { SearchFilterBox, SearchToolbar } from '../components';
import {
  actSearchGoodsParamsApply,
  actToggleShowSearchInput,
  effSearchGoods,
  toGoodsParams,
} from '../stores';
import {
  selSearchGoodsParams,
  selShowSearchInput,
} from '../stores/goods.selector';
import { isActiveFilter } from '../utils';

const batchApplyParamsAndFetch = (
  params: Partial<SearchGoodsParams> = {},
  dispatch: RootDispatchType
) => {
  batch(() => {
    dispatch(actSearchGoodsParamsApply(params));
    dispatch(effSearchGoods({ reset: params.page === 1 }));
  });
};

export const GoodsSearchBoxContainer: FC = () => {
  const dispatch = useDispatch();
  const params = useSelector(selSearchGoodsParams);
  const showInput = useSelector(selShowSearchInput);

  const handleKeywordSearch = (keyword: string) => {
    batchApplyParamsAndFetch({ keyword, page: 1 }, dispatch);
  };

  const handleToggleShowInput = () => {
    dispatch(actToggleShowSearchInput());
  };

  const handleClickToggleFilter = (goodsFilter: GoodsFilterType) => {
    const newFilters = isActiveFilter(params.filters, goodsFilter)
      ? params.filters.filter((filter) => filter !== goodsFilter)
      : params.filters.concat(goodsFilter);
    batchApplyParamsAndFetch({ filters: newFilters, page: 1 }, dispatch);
  };

  const handleClickClearKeyword = () => {
    batchApplyParamsAndFetch({ keyword: '', page: 1 }, dispatch);
  };

  const handleClickClearAll = () => {
    batchApplyParamsAndFetch(
      toGoodsParams({ keyword: '', page: 1, filters: [] }),
      dispatch
    );
  };

  return (
    <>
      <SearchToolbar
        {...params}
        showInput={showInput}
        onToggleShowInput={handleToggleShowInput}
        onClickToggleFilter={handleClickToggleFilter}
      />
      <SearchFilterBox
        {...params}
        showInput={showInput}
        onToggleShowInput={handleToggleShowInput}
        onKeywordSearch={handleKeywordSearch}
        onClickClearKeyword={handleClickClearKeyword}
        onClickToggleFilter={handleClickToggleFilter}
        onClickClearAll={handleClickClearAll}
      />
    </>
  );
};
