import { FC, useState } from 'react';
import {
  GoodsFilterType,
  GOODS_FILTER_DICTIONARY,
} from '../../common/constants';
import { SquareButtonWithIcon } from '../../core/components';
import { ICON_DICTIONARY } from '../../core/constants';
import { SearchGoodsParams } from '../../core/entities';
import {
  InputBox,
  InputWrapper,
  KeywordInput,
  SearchBoxWrapper,
  SearchImage,
  SearchKeyword,
  SearchKeywordWrapper,
} from './SearchFilterBox.styles';

interface SearchFilterBoxProps extends SearchGoodsParams {
  showInput: boolean;
  onToggleShowInput: () => void;
  onKeywordSearch: (keyword: string) => void;
  onClickClearKeyword: () => void;
  onClickToggleFilter: (goodsFilter: GoodsFilterType) => void;
  onClickClearAll: () => void;
}

export const SearchFilterBox: FC<SearchFilterBoxProps> = ({
  keyword,
  showInput,
  filters,
  onToggleShowInput,
  onKeywordSearch,
  onClickClearKeyword,
  onClickToggleFilter,
  onClickClearAll,
}) => {
  const [value, setValue] = useState(keyword);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value.trim());
  };

  const handlePressEnter = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      onKeywordSearch(value);
      onToggleShowInput();
    }
  };

  const handleClickToggleFilter = (goodsFilter: GoodsFilterType) => {
    return () => onClickToggleFilter(goodsFilter);
  };

  if (showInput) {
    return (
      <InputWrapper>
        <InputBox>
          <SearchImage src={ICON_DICTIONARY.SEARCH} alt="검색" />
          <KeywordInput
            type="text"
            value={value}
            onChange={handleChange}
            onKeyPress={handlePressEnter}
          />
        </InputBox>
      </InputWrapper>
    );
  }

  if (keyword === '' && filters.length === 0) {
    return null;
  }

  return (
    <SearchBoxWrapper>
      <SearchKeywordWrapper>
        {keyword && (
          <SquareButtonWithIcon bgColor="info" spacing="8">
            <SearchKeyword size="sm" $color="inverse">
              {keyword}
            </SearchKeyword>
            <img
              src={ICON_DICTIONARY.CLOSE}
              alt="clear-keyword"
              onClick={onClickClearKeyword}
            />
          </SquareButtonWithIcon>
        )}
        {filters.map((filter) => (
          <SquareButtonWithIcon bgColor="info" spacing="8" key={filter}>
            <SearchKeyword size="sm" $color="inverse">
              {GOODS_FILTER_DICTIONARY[filter]}
            </SearchKeyword>
            <img
              src={ICON_DICTIONARY.CLOSE}
              alt="clear-filter"
              onClick={handleClickToggleFilter(filter)}
            />
          </SquareButtonWithIcon>
        ))}
      </SearchKeywordWrapper>

      {(keyword || filters.length !== 0) && (
        <button type="button" onClick={onClickClearAll}>
          <img src={ICON_DICTIONARY.REFRESH} alt="초기화" />
        </button>
      )}
    </SearchBoxWrapper>
  );
};
