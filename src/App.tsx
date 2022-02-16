import { FC, Suspense } from 'react';
import { AppRoutes } from './modules/AppRoutes';

const App: FC = () => (
  <Suspense fallback={<></>}>
    <AppRoutes />
  </Suspense>
);

export default App;
