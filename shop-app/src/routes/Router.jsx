import { BrowserRouter, Route, Routes } from 'react-router-dom';
import MainLayout from '../layouts/MainLayout';
import MainPage from '../pages/MainPage';

const Router = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route index element={<MainPage />} />
      </Route>
    </Routes>
  </BrowserRouter>
);

export default Router;
