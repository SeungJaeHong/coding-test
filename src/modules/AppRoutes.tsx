import { FC } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import { PageContainer } from './goods/containers';
import { LazyGoodsListPage } from './goods/routes';

export const AppRoutes: FC = () => (
  <Routes>
    <Route element={<PageContainer />}>
      <Route path="/" element={<LazyGoodsListPage />} />
      <Route path="/goods" element={<LazyGoodsListPage />} />
    </Route>
    <Route path="*" element={<Navigate to="/" />} />
  </Routes>
);
