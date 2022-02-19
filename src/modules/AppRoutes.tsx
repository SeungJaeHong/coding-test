import { FC } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import { PageLayout } from './common/components/PageLayout';
import { LazyGoodsListPage } from './goods/routes';

export const AppRoutes: FC = () => (
  <Routes>
    <Route element={<PageLayout />}>
      <Route path="/" element={<LazyGoodsListPage />} />
      <Route path="/goods" element={<LazyGoodsListPage />} />
    </Route>
    <Route path="*" element={<Navigate to="/" />} />
  </Routes>
);
