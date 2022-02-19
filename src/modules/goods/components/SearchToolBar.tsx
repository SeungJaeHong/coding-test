import { FC } from 'react';
import {
  GoodsFilterType,
  GOODS_FILTER_DICTIONARY,
} from '../../common/constants';
import {
  CircleButton,
  CircleButtonWithIcon,
  Typography,
} from '../../core/components';
import { ICON_DICTIONARY } from '../../core/constants';
import { SearchGoodsParams } from '../../core/entities';
import { getCircleButtonColors, getGoodsFilterClass } from '../utils';
import { GoodsSearchBoxWrapper } from './SearchFilterBox.styles';

const filterOptions = Object.keys(
  GOODS_FILTER_DICTIONARY
) as Array<GoodsFilterType>;

interface SearchToolbarProps extends SearchGoodsParams {
  showInput: boolean;
  onToggleShowInput: () => void;
  onClickToggleFilter: (goodsFilter: GoodsFilterType) => void;
}

export const SearchToolbar: FC<SearchToolbarProps> = ({
  keyword,
  showInput,
  filters,
  onToggleShowInput,
  onClickToggleFilter,
}) => {
  const { bgColor, color } = getCircleButtonColors(keyword, showInput);

  const handleClickToggleFilter = (goodsFilter: GoodsFilterType) => {
    return () => onClickToggleFilter(goodsFilter);
  };

  return (
    <GoodsSearchBoxWrapper>
      <CircleButtonWithIcon
        bgColor={bgColor}
        spacing="6"
        onClick={onToggleShowInput}
      >
        <Typography $color={color}>검색</Typography>
        <img src={ICON_DICTIONARY.SEARCH} alt="검색" />
      </CircleButtonWithIcon>

      {filterOptions.map((filter) => (
        <CircleButton key={filter} onClick={handleClickToggleFilter(filter)}>
          <Typography $color={getGoodsFilterClass(filters, filter)}>
            {GOODS_FILTER_DICTIONARY[filter]}
          </Typography>
        </CircleButton>
      ))}
    </GoodsSearchBoxWrapper>
  );
};
