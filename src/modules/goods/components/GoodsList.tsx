import { FC } from 'react';
import { GoodsModel } from '../models';
import { Goods } from './Goods';
import { Grid } from './Goods.styles';

interface GoodsListProps {
  loading: boolean;
  goodsList: GoodsModel[];
}

export const GoodsList: FC<GoodsListProps> = ({ loading, goodsList }) => {
  return (
    <Grid>
      {goodsList.map((goods) => (
        <Goods key={goods.goodsNo} {...goods} />
      ))}
    </Grid>
  );
};
