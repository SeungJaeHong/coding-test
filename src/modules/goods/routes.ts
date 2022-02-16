import React from 'react';

export const LazyGoodsListPage = React.lazy(
  () => import('./pages/GoodsListPage')
);
