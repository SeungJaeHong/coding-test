import styled from 'styled-components';
import { Typography } from '../../core/components';
import {
  flexWrapAlignCenterCss,
  flexWrapCenterBetweenCss,
  flexWrapCss,
} from '../../core/utils';

export const InputWrapper = styled.div`
  ${flexWrapAlignCenterCss};

  width: 100%;
  height: 80px;
  padding: 20px 15px;
  margin-bottom: 10px;
  background-color: ${({ theme }) => theme.color.contrast.ghostWhite};
`;

export const InputBox = styled.div`
  position: relative;
  width: 100%;
`;

export const SearchImage = styled.img`
  position: absolute;
  transform: translate3d(10px, 50%, 0);
`;

export const KeywordInput = styled.input`
  width: 100%;
  height: 40px;
  padding: 10px 10px 10px 30px;
`;

export const GoodsSearchBoxWrapper = styled.div`
  ${flexWrapCss};
  width: 100%;
  padding: 10px;
  gap: 5px;
`;

export const SearchBoxWrapper = styled.div`
  ${flexWrapCenterBetweenCss}
  flex: 1;
  padding: 12px 15px;
`;

export const SearchKeywordWrapper = styled.div`
  ${flexWrapAlignCenterCss};
  gap: 5px;
  width: 80%;
`;

export const SearchKeyword = styled(Typography)`
  line-height: 18px;
`;

export const ResetButton = styled.button`
  margin-right: 10px;
`;
