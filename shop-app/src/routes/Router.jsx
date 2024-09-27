import { BrowserRouter, Route, Routes } from 'react-router-dom';
import MainLayout from '../layouts/MainLayout';
import MainPage from '../pages/MainPage';
import ClothBottomSheet from '../components/ClothBottomSheet';

const Router = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route index element={<MainPage />} />
      </Route>
    </Routes>
    <ClothBottomSheet />
  </BrowserRouter>
);

export default Router;
