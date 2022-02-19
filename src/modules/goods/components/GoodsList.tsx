import { FC } from 'react';
import styled from 'styled-components';
import { GoodsModel } from '../models';
import { Goods } from './Goods';
import { Grid } from './Goods.styles';

export const Loader = styled.div`
  @keyframes rotation {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }

  .loader {
    width: 16px;
    height: 16px;
    border-radius: 50%;
    display: inline-block;
    border-top: 2px solid black;
    border-right: 2px solid transparent;
    animation: rotation 1s linear infinite;
  }
`;

export const Spinner: FC<any> = () => (
  <Loader>
    <span className="loader"></span>
  </Loader>
);

interface GoodsListProps {
  loading: boolean;
  goodsList: GoodsModel[];
}

export const GoodsList: FC<GoodsListProps> = ({ loading, goodsList }) => {
  return (
    <Grid>
      <Spinner />
      {goodsList.map((goods) => (
        <Goods key={goods.goodsNo} {...goods} />
      ))}
    </Grid>
  );
};
