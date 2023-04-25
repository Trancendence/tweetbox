import { Route, Routes } from 'react-router-dom';
import { lazy } from 'react';
import { SharedLayout } from './componens/SharedLayout/SharedLayout';

const HomePage = lazy(() => import('./pages/Home'));
const TweestPage = lazy(() => import('./pages/Tweets'));

export const App = () => {
  
  return (
    <Routes>
      <Route path="/" element={<SharedLayout />}>
      <Route index element={<HomePage />} />
        <Route path="/tweets" element={<TweestPage />} />
      </Route>
    </Routes>
  )
}
 