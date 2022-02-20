import styled from 'styled-components';
import { Typography } from '../../core/components';
import {
  flexWrapCenterBetweenCss,
  flexWrapCenterCss,
  flexWrapCss,
} from '../../core/utils';

export const SearchBoxDivider = styled.div`
  width: 100%;
  height: 10px;
  background-color: ${({ theme }) => theme.color.contrast.antiFlashWhite};
`;

export const Grid = styled.section`
  ${flexWrapCss};
  background-color: ${({ theme }) => theme.color.contrast.white};
  padding: 0;
  margin: 0 auto;
`;

export const GridItem = styled.article`
  position: relative;
  width: 50%;
  flex-direction: column;
`;

export const GoodsImageWrapper = styled.div`
  position: relative;
  width: 188px;
  height: 226px;
`;

export const GoodsImage = styled.img`
  width: 100%;
  height: 100%;
  margin: 0;
  background: ${({ theme }) => theme.color.contrast.white};
  background-size: cover;
  background-position: center center;
  background-repeat: no-repeat;
`;

export const GoodsSoldOutCover = styled.div`
  position: absolute;
  left: 0%;
  right: 0%;
  top: 0%;
  bottom: 0%;
  background: ${({ theme }) => theme.color.contrast.white};
  mix-blend-mode: normal;
  opacity: 0.8;

  ${flexWrapCenterCss};
`;

export const GoodsInfoWrapper = styled.div`
  position: relative;
  width: 100%;
  height: 140px;
  padding: 20px 10px 12px;
`;

export const ExclusiveLabel = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  transform: translate3d(10px, -50%, 0);
  background-color: ${({ theme }) => theme.color.green.crayola};
  color: ${({ theme }) => theme.color.contrast.white};
  ${flexWrapCenterCss};
  width: 34px;
  height: 26px;
`;

export const GoodsBrandName = styled(Typography)`
  line-height: 16px;
  margin-bottom: 8px;
`;

export const GoodsName = styled(Typography)`
  line-height: 18px;
  margin-bottom: 4px;
`;

export const Price = styled(Typography)`
  line-height: 24px;
`;

export const SaleRate = styled(Typography)`
  line-height: 24px;
`;

export const GoodsNameWrapper = styled.div`
  height: 36px;
  line-height: 18px;
  word-break: break-all;
  overflow: hidden;
`;

export const SalePriceWrapper = styled.div`
  ${flexWrapCenterBetweenCss};
`;

export const SpinnerWrapper = styled.div`
  ${flexWrapCenterCss};
  padding: 20px 0px 60px;
`;

export const DataEmptyWrapper = styled.div`
  ${flexWrapCenterCss};
  flex: 1;
  height: 100%;
`;

export const ScrollObserver = styled.div`
  height: 10px;
`;
