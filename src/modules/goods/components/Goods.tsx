import { FC } from 'react';
import { Typography } from '../../core/components';
import { GoodsModel } from '../models';
import { formatKRW, formatPercentage } from '../utils';
import {
  ExclusiveLabel,
  GoodsBrandName,
  GoodsImage,
  GoodsImageWrapper,
  GoodsInfoWrapper,
  GoodsName,
  GoodsNameWrapper,
  GoodsSoldOutCover,
  GridItem,
  Price,
  SalePriceWrapper,
  SaleRate,
} from './Goods.styles';

interface GoodsProps extends GoodsModel {}

export const Goods: FC<GoodsProps> = ({
  imageUrl,
  goodsName,
  isSoldOut,
  isExclusive,
  brandName,
  isSale,
  price,
  saleRate,
  normalPrice,
}) => {
  return (
    <GridItem>
      <GoodsImageWrapper>
        <GoodsImage src={imageUrl} alt={goodsName} />
        {isSoldOut && (
          <GoodsSoldOutCover>
            <Typography $color="disable" size="lg">
              SOLD OUT
            </Typography>
          </GoodsSoldOutCover>
        )}
      </GoodsImageWrapper>
      <GoodsInfoWrapper>
        {isExclusive && (
          <ExclusiveLabel>
            <Typography $color="inverse" size="sm">
              단독
            </Typography>
          </ExclusiveLabel>
        )}
        <GoodsBrandName size="xs">{brandName}</GoodsBrandName>
        <GoodsNameWrapper>
          <GoodsName size="md" weight="bold">
            {goodsName}
          </GoodsName>
        </GoodsNameWrapper>

        {isSale ? (
          <>
            <SalePriceWrapper>
              <Price size="lg" weight="bold">
                {formatKRW(price)}
              </Price>
              <SaleRate size="lg" weight="bold" $color="danger">
                {formatPercentage(saleRate)}
              </SaleRate>
            </SalePriceWrapper>
            <Typography size="xs" $color="secondary" through>
              {formatKRW(normalPrice)}
            </Typography>
          </>
        ) : (
          <Typography size="lg" weight="bold">
            {formatKRW(normalPrice)}
          </Typography>
        )}
      </GoodsInfoWrapper>
    </GridItem>
  );
};
