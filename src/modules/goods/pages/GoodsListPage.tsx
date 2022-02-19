import { FC } from 'react';
import { GoodsListContainer, GoodsSearchBoxContainer } from '../containers';

const GoodsListPage: FC = () => (
  <>
    <GoodsSearchBoxContainer />
    <GoodsListContainer />
  </>
);

export default GoodsListPage;
