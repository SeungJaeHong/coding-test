import { FC } from 'react';
import { GoodsModel } from '../models';
import { Typography } from '../../common/components';

import './goodsList.css';

interface GoodsListProps {
  loading: boolean;
  goodsList: GoodsModel[];
}

export const GoodsList: FC<GoodsListProps> = ({ loading, goodsList }) => {
  return (
    <>
      {goodsList.map((goods: GoodsModel, index: number) => (
        <div className="wrap" key={`${goods.goodsNo}${index}`}>
          <Typography size="xs">{goods.brandName}</Typography>
          <img
            width="188"
            height="226"
            src={goods.imageUrl}
            alt={goods.goodsName}
          />
          <Typography>{goods.goodsName}</Typography>
          {goods.isSale ? (
            <div>
              <div className="wrap-between">
                <Typography bold>{goods.price.toLocaleString()}</Typography>
                <Typography
                  bold
                  $color="danger"
                >{`${goods.saleRate}%`}</Typography>
              </div>
              <Typography $color="secondary">
                {goods.normalPrice.toLocaleString()}
              </Typography>
            </div>
          ) : (
            <Typography>{goods.normalPrice.toLocaleString()}</Typography>
          )}
        </div>
      ))}
    </>
  );
};
